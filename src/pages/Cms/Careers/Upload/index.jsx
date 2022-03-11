import { useState, useEffect } from "react"
import { languages, statuses, services } from "./data"
import { validateFloatInput, validateNumberInput } from "utils"
import Container from "components/Container"
import TopBar from "components/TopBar"
import ColorPicker from "components/ColorPicker"
import usePage from "hooks/usePage"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import { Row, Col, Modal } from "antd"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"
import Heading from "ant/Heading"
import { TextArea } from "ant/Input"
import styled from "styled-components"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import theme from "styles/Theme"
import UploadImages from "components/UploadImages"
import useServicesController from "./useServicesController"
import FiltersBar from "components/FiltersBar"
import { CallPostService } from "api/services"
import { ReactComponent as PlusIcon } from "assets/icons/PlusMuutos.svg"
import { Form } from 'react-bootstrap';
import axios from "axios"
import "./style.css";
const { Option } = Select

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("Add Career Content")
  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  const [Content, setContent] = useState([]);
  useEffect(() => {
    if (userRole == 'admin') {
      setUserRole('admin');
    }
    async function getContent() {
      const content = await axios.get(`http://localhost:8080/api/getCareerContent`)
      if(content){
        setContent(content.data.data); 
        console.log(content.data.data)  
      } 
    }
    getContent()
  }, []);

  const uploadCareerImage = async (e) => {
    e.preventDefault();
    console.log(e.target.files[0])
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateCareerImage = await axios.post(`http://localhost:8080/api/updateCareerTitleImage`, formData);
    if (updateCareerImage) {
      document.getElementById('careerTitleImage').value = updateCareerImage.data.img
      document.getElementById('careerTitleImageDisplay').src = `http://localhost:8080/upload/cms/career/${updateCareerImage.data.img}`
    }
  }

  return (
    <>
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              CMS: () => setActiveComp("upload"),
              "Career": () => { },
            }}
          />
          <Form>
            <input type="hidden" defaultValue={Content.careerTitleImage} name="careerTitleImage" id="careerTitleImage" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Label className="text-white">Career Content</Form.Label>
              <Form.Control defaultValue={Content.message} name="message" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />
            <Form.Label className="text-white">Select Image</Form.Label>
            <Form.Control className="theme-styling" type="file" id="career-image" onChange={uploadCareerImage} />
            <br />
            <Button type="primary" variant="primary"
              onClick={() => {
                var message = document.getElementsByName('message')[0].value;
                var careerTitleImage = document.getElementsByName('careerTitleImage')[0].value;

                var data = {
                  message: message,
                  careerTitleImage: careerTitleImage,
                }

                const updateContent = axios.post(`http://localhost:8080/api/updateCareerContent`, data);
                if (updateContent) {
                  window.location.reload();
                }
              }}
            >Submit</Button>
          </Form>
          <br></br>
        </div>
        <div className="pt-4">
          <h5 className="text-white">Career Title Image</h5>
          <img id="careerTitleImageDisplay" src={`http://localhost:8080/upload/cms/career/${Content.careerTitleImage}`} alt="" style={{ width: '100%' }} />
        </div>
      </Container>
    </>
  )
}

const SearchBar = styled(FiltersBar)`
    background:none;
    }
    `

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
    margin-right: 40px;
    border-radius: 8px;
  }
  div {
    width: 100px;
    height: 100px;
    background-color: #222225;
    border-radius: 8px;
  }
`