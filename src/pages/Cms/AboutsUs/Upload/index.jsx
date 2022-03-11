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
import "./style.css";
import axios from 'axios'
const { Option } = Select

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("About Page Content")
  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  
  const [Content, setContent] = useState([]);
  
  useEffect(() => {
    if (userRole == 'admin') {
      setUserRole('admin');
    }


  async function getContent() {
    const content = await axios.get(`http://localhost:8080/api/getAboutContent`)
    if(content){
      setContent(content.data.data); 
      console.log(content.data.data)  
    } 
  }
  getContent()
  }, []);

  const uploadAboutUsImage = async (e) => {
    e.preventDefault();
    console.log(e.target.files[0])
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateAboutTitleImage = await axios.post(`http://localhost:8080/api/updateAboutTitleImage`, formData);
    if (updateAboutTitleImage) {
      document.getElementById('aboutTitleImage').value = updateAboutTitleImage.data.img
      document.getElementById('aboutTitleImageDisplay').src = `http://localhost:8080/upload/cms/about-us/${updateAboutTitleImage.data.img}`
    }
  }


  return (
    <>
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              CMS: () => setActiveComp("upload"),
              "About": () => { },
            }}
          />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="text-white">Select Image</Form.Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="about-us-image" onChange={uploadAboutUsImage} className="theme-styling" />
          </Form.Group>
          <Form>

            <Form.Label className="text-white">Page Title</Form.Label>
            <Form.Control defaultValue={Content.pageTitle} name="pageTitle" className="theme-styling" type="text" />
            <br />

            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Label className="text-white">Page Content</Form.Label>
              <Form.Control className="theme-styling" as="textarea" rows={3} />
            </Form.Group> */}
            <input type="hidden" defaultValue={Content.aboutTitleImage} name="aboutTitleImage" id="aboutTitleImage" />

            <Form.Label className="text-white">Paragraph1</Form.Label>
            <Form.Control defaultValue={Content.paragraphOne} name="paragraphOne" className="theme-styling" as="textarea" rows={5} />
            <br />


            <Form.Label className="text-white">Paragraph2</Form.Label>
            <Form.Control defaultValue={Content.paragraphTwo} name="paragraphTwo" className="theme-styling" as="textarea" rows={5} />
            <br />


            <Form.Label className="text-white">Paragraph3</Form.Label>
            <Form.Control defaultValue={Content.paragraphThree} name="paragraphThree" className="theme-styling" as="textarea" rows={5} />
            <br />


            <Form.Label className="text-white">Paragraph4</Form.Label>
            <Form.Control defaultValue={Content.paragraphFour} name="paragraphFour" className="theme-styling" as="textarea" rows={5} />
            <br />

            <h3 className="text-white">Stats1</h3>
            <Row>
              <Col className="mx-1">
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control defaultValue={Content.statOneTitle} name="statOneTitle" className="theme-styling" type="text" />
              </Col>
              <Col className="mx-1">
                <Form.Label className="text-white">Value</Form.Label>
                <Form.Control defaultValue={Content.statOneValue} name="statOneValue" className="theme-styling" type="text" />
              </Col>
            </Row>
            <br />


            <h3 className="text-white">Stats2</h3>
            <Row>
              <Col className="mx-1">
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control defaultValue={Content.statTwoTitle}  name="statTwoTitle" className="theme-styling" type="text" />
              </Col>
              <Col className="mx-1">
                <Form.Label className="text-white">Value</Form.Label>
                <Form.Control defaultValue={Content.statTwoValue}  name="statTwoValue" className="theme-styling" type="text" />
              </Col>
            </Row>
            <br />



            <h3 className="text-white">Stats3</h3>
            <Row>
              <Col className="mx-1">
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control defaultValue={Content.statThreeTitle} name="statThreeTitle" className="theme-styling" type="text" />
              </Col>
              <Col className="mx-1">
                <Form.Label className="text-white">Value</Form.Label>
                <Form.Control defaultValue={Content.statThreeValue} name="statThreeValue" className="theme-styling" type="text" />
              </Col>
            </Row>
            <br />


            <h3 className="text-white">Stats4</h3>
            <Row>
              <Col className="mx-1">
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control defaultValue={Content.statFourTitle} name="statFourTitle" className="theme-styling" type="text" />
              </Col>
              <Col className="mx-1">
                <Form.Label className="text-white">Value</Form.Label>
                <Form.Control defaultValue={Content.statFourValue} name="statFourValue" className="theme-styling" type="text" />
              </Col>
            </Row>
            <br />

            <Button type="primary" variant="primary" onClick={() => {
              var pageTitle = document.getElementsByName('pageTitle')[0].value;
              var paragraphOne = document.getElementsByName('paragraphOne')[0].value;
              var paragraphTwo = document.getElementsByName('paragraphTwo')[0].value;
              var paragraphThree = document.getElementsByName('paragraphThree')[0].value;
              var paragraphFour = document.getElementsByName('paragraphFour')[0].value;
              var statOneTitle = document.getElementsByName('statOneTitle')[0].value;
              var statOneValue = document.getElementsByName('statOneValue')[0].value;
              var statTwoTitle = document.getElementsByName('statTwoTitle')[0].value;
              var statTwoValue = document.getElementsByName('statTwoValue')[0].value;
              var statThreeTitle = document.getElementsByName('statThreeTitle')[0].value;
              var statThreeValue = document.getElementsByName('statThreeValue')[0].value;
              var statFourTitle = document.getElementsByName('statFourTitle')[0].value;
              var statFourValue = document.getElementsByName('statFourValue')[0].value;
              var aboutTitleImage = document.getElementsByName('aboutTitleImage')[0].value;

              var data = {
                pageTitle:pageTitle,
                paragraphOne:paragraphOne,
                paragraphTwo:paragraphTwo,
                paragraphThree:paragraphThree,
                paragraphFour:paragraphFour,
                statOneTitle:statOneTitle,
                statOneValue:statOneValue,
                statTwoTitle:statTwoTitle,
                statTwoValue:statTwoValue,
                statThreeTitle:statThreeTitle,
                statThreeValue:statThreeValue,
                statFourTitle:statFourTitle,
                statFourValue:statFourValue,
                aboutTitleImage:aboutTitleImage,
              }

              const updateContent = axios.post(`http://localhost:8080/api/updateAboutContent`, data);
              if(updateContent){
                window.location.reload();
              }

            }}>Submit</Button>
          </Form>
          <br></br>
        </div>
        <div className="pt-4">
            <h5 className="text-white">About Title Image</h5>
            <img id="aboutTitleImageDisplay" src={`http://localhost:8080/upload/cms/about-us/${Content.aboutTitleImage}`} alt="" style={{width:'100%'}}/>
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
