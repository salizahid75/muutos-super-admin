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
import axios from "axios"
const { Option } = Select

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("Add World Page Content")
  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  const [Content, setContent] = useState([]);
  useEffect(() => {
    if (userRole == 'admin') {
      setUserRole('admin');
    }

    async function getContent() {
      const content = await axios.get(`http://localhost:8080/api/getWorldContent`)
      if(content){
        setContent(content.data.data); 
        console.log(content.data.data)  
      } 
    }
    getContent()
  }, []);

  const uploadTitleImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('toTheWorldImage').value = updateImage.data.img
      document.getElementById('toTheWorldImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadCommitmentImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('companyCommitmentImage').value = updateImage.data.img
      document.getElementById('companyCommitmentImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadCsvFirstInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('csvFirstInitiativeImage').value = updateImage.data.img
      document.getElementById('csvFirstInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadCsvSecondInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('csvSecondInitiativeImage').value = updateImage.data.img
      document.getElementById('csvSecondInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadCsvThreeInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('csvThreeInitiativeImage').value = updateImage.data.img
      document.getElementById('csvThreeInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadRecyclingFirstInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('recyclingFirstInitiativeImage').value = updateImage.data.img
      document.getElementById('recyclingFirstInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadRecyclingSecondInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('recyclingSecondInitiativeImage').value = updateImage.data.img
      document.getElementById('recyclingSecondInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }

  const uploadRecyclingThreeInitiativeImage = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    const updateImage = await axios.post(`http://localhost:8080/api/updateWorldImage`, formData);
    if (updateImage) {
      document.getElementById('recyclingThreeInitiativeImage').value = updateImage.data.img
      document.getElementById('recyclingThreeInitiativeImageDisplay').src = `http://localhost:8080/upload/cms/world/${updateImage.data.img}`
    }
  }


  return (
    <>
      
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              CMS: () => setActiveComp("upload"),
              "World": () => { },
            }}
          />
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Label className="text-white">To The World Message</Form.Label>
              <Form.Control defaultValue={Content.toTheWorldText} name="toTheWorldText" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-white">Select Image</Form.Label>
              <Form.Control className="theme-styling" type="file" onChange={uploadTitleImage}/>
              <input type="hidden" defaultValue={Content.toTheWorldImage} name="toTheWorldImage" id="toTheWorldImage" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Label className="text-white">Commitment Message</Form.Label>
              <Form.Control defaultValue={Content.companyCommitmentText} name="companyCommitmentText" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-white">Select Image</Form.Label>
              <Form.Control className="theme-styling" type="file" onChange={uploadCommitmentImage}/>
              <input type="hidden" defaultValue={Content.companyCommitmentImage} name="companyCommitmentImage" id="companyCommitmentImage" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Label className="text-white">CSV Initiative Message</Form.Label>
              <Form.Control defaultValue={Content.csvInitiativeText} name="csvInitiativeText" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">CSV First Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.csvFirstInitiativeText} name="csvFirstInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadCsvFirstInitiativeImage}/>
                      <input type="hidden" defaultValue={Content.csvFirstInitiativeImage} name="csvFirstInitiativeImage" id="csvFirstInitiativeImage" />
                      <div className="p-2">
                        <img id="csvFirstInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.csvFirstInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">CSV Second Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.csvSecondInitiativeText} name="csvSecondInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadCsvSecondInitiativeImage}/>
                      <input type="hidden" defaultValue={Content.csvSecondInitiativeImage} name="csvSecondInitiativeImage" id="csvSecondInitiativeImage" />
                      <div className="p-2">
                        <img id="csvSecondInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.csvSecondInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>
                
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">CSV Third Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.csvThreeInitiativeText} name="csvThreeInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadCsvThreeInitiativeImage}/>
                      <input type="hidden" defaultValue={Content.csvThreeInitiativeImage} name="csvThreeInitiativeImage" id="csvThreeInitiativeImage" />
                      <div className="p-2">
                        <img id="csvThreeInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.csvThreeInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Label className="text-white">Recycling Initiative Message</Form.Label>
              <Form.Control defaultValue={Content.recyclingInitiativeText} name="recyclingInitiativeText" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Recycling First Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.recyclingFirstInitiativeText} name="recyclingFirstInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadRecyclingFirstInitiativeImage}/>
                      <input type="hidden" defaultValue={Content.recyclingFirstInitiativeImage} name="recyclingFirstInitiativeImage" id="recyclingFirstInitiativeImage" />
                      <div className="p-2">
                        <img id="recyclingFirstInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.recyclingFirstInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Recycling Second Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.recyclingSecondInitiativeText} name="recyclingSecondInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadRecyclingSecondInitiativeImage} />
                      <input type="hidden" defaultValue={Content.recyclingSecondInitiativeImage} name="recyclingSecondInitiativeImage" id="recyclingSecondInitiativeImage" />
                      <div className="p-2">
                        <img id="recyclingSecondInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.recyclingSecondInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>
                
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
               
                <Row>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Recycling Third Initiative Text</Form.Label>
                      <Form.Control defaultValue={Content.recyclingThreeInitiativeText} name="recyclingThreeInitiativeText" className="theme-styling" type="text"  />
                  </Col>
                  <Col className="mx-1">
                      <Form.Label className="text-white">Select Image</Form.Label>
                      <Form.Control className="theme-styling" type="file" onChange={uploadRecyclingThreeInitiativeImage}/>
                      <input type="hidden" defaultValue={Content.recyclingThreeInitiativeImage} name="recyclingThreeInitiativeImage" id="recyclingThreeInitiativeImage" />
                      <div className="p-2">
                        <img id="recyclingThreeInitiativeImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.recyclingThreeInitiativeImage}`} alt="" style={{ width: '100%' }} />
                      </div>
                  </Col>
                </Row>
            </Form.Group>


            


            <Button type="primary"
            onClick={()=>{
              var toTheWorldText = document.getElementsByName('toTheWorldText')[0].value;
              var toTheWorldImage = document.getElementsByName('toTheWorldImage')[0].value;
              var companyCommitmentText = document.getElementsByName('companyCommitmentText')[0].value;
              var companyCommitmentImage = document.getElementsByName('companyCommitmentImage')[0].value;
              var csvInitiativeText = document.getElementsByName('csvInitiativeText')[0].value;
              var csvFirstInitiativeText = document.getElementsByName('csvFirstInitiativeText')[0].value;
              var csvFirstInitiativeImage = document.getElementsByName('csvFirstInitiativeImage')[0].value;
              var csvSecondInitiativeText = document.getElementsByName('csvSecondInitiativeText')[0].value;
              var csvSecondInitiativeImage = document.getElementsByName('csvSecondInitiativeImage')[0].value;
              var csvThreeInitiativeText = document.getElementsByName('csvThreeInitiativeText')[0].value;
              var csvThreeInitiativeImage = document.getElementsByName('csvThreeInitiativeImage')[0].value;
              var recyclingInitiativeText = document.getElementsByName('recyclingInitiativeText')[0].value;
              var recyclingFirstInitiativeText = document.getElementsByName('recyclingFirstInitiativeText')[0].value;
              var recyclingFirstInitiativeImage = document.getElementsByName('recyclingFirstInitiativeImage')[0].value;
              var recyclingSecondInitiativeText = document.getElementsByName('recyclingSecondInitiativeText')[0].value;
              var recyclingSecondInitiativeImage = document.getElementsByName('recyclingSecondInitiativeImage')[0].value;
              var recyclingThreeInitiativeText = document.getElementsByName('recyclingThreeInitiativeText')[0].value;
              var recyclingThreeInitiativeImage = document.getElementsByName('recyclingThreeInitiativeImage')[0].value;

                var data = {
                  toTheWorldText:toTheWorldText,
                  toTheWorldImage:toTheWorldImage,
                  companyCommitmentText:companyCommitmentText,
                  companyCommitmentImage:companyCommitmentImage,
                  csvInitiativeText:csvInitiativeText,
                  csvFirstInitiativeText:csvFirstInitiativeText,
                  csvFirstInitiativeImage:csvFirstInitiativeImage,
                  csvSecondInitiativeText:csvSecondInitiativeText,
                  csvSecondInitiativeImage:csvSecondInitiativeImage,
                  csvThreeInitiativeText:csvThreeInitiativeText,
                  csvThreeInitiativeImage:csvThreeInitiativeImage,
                  recyclingInitiativeText:recyclingInitiativeText,
                  recyclingFirstInitiativeText:recyclingFirstInitiativeText,
                  recyclingFirstInitiativeImage:recyclingFirstInitiativeImage,
                  recyclingSecondInitiativeText:recyclingSecondInitiativeText,
                  recyclingSecondInitiativeImage:recyclingSecondInitiativeImage,
                  recyclingThreeInitiativeText:recyclingThreeInitiativeText,
                  recyclingThreeInitiativeImage:recyclingThreeInitiativeImage,
                }

                const updateContent = axios.post(`http://localhost:8080/api/updateWorldContent`, data);
                if (updateContent) {
                  window.location.reload();
                }
            }}
            >Submit</Button>
          </Form>
          <br></br>
        </div>
        <div className="pt-4">
          <h5 className="text-white">World Title Image</h5>
          <img id="toTheWorldImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.toTheWorldImage}`} alt="" style={{ width: '100%' }} />
          <br />
          <br />
          <h5 className="text-white">Commitment Image</h5>
          <img id="companyCommitmentImageDisplay" src={`http://localhost:8080/upload/cms/world/${Content.companyCommitmentImage}`} alt="" style={{ width: '100%' }} />
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
