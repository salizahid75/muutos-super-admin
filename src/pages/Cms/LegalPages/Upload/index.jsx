import { useState, useEffect } from "react";
import { languages, statuses, services } from "./data";
import { validateFloatInput, validateNumberInput } from "utils";
import Container from "components/Container";
import TopBar from "components/TopBar";
import ColorPicker from "components/ColorPicker";
import usePage from "hooks/usePage";
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant";
import { Row, Col, Modal } from "antd";
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg";
import Heading from "ant/Heading";
import { TextArea } from "ant/Input";
import styled from "styled-components";
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg";
import theme from "styles/Theme";
import UploadImages from "components/UploadImages";
import useServicesController from "./useServicesController";
import FiltersBar from "components/FiltersBar";
import { CallPostService } from "api/services";
import { ReactComponent as PlusIcon } from "assets/icons/PlusMuutos.svg";
import { Form } from "react-bootstrap";
import "./style.css";
import axios from "axios";
const { Option } = Select;

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("Add Legal Pages Content");
  const userRole = localStorage.getItem("muutos-u-role");
  const [UserRole, setUserRole] = useState("");
  const [Content, setContent] = useState([]);
  useEffect(() => {
    if (userRole == "admin") {
      setUserRole("admin");
    }
    async function getContent() {
      const content = await axios.get(`http://localhost:8080/api/getLegalContent`)
      if(content){
        setContent(content.data.data); 
        console.log(content.data.data)  
      } 
    }
    getContent()
  }, []);


  return (
    <>
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              CMS: () => setActiveComp("upload"),
              "Legal": () => { },
            }}
          />
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Terms & Condition</Form.Label>
              <Form.Control defaultValue={Content.termsAndCondition} name="termsAndCondition" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Privacy Policy</Form.Label>
              <Form.Control defaultValue={Content.privacyPolicy} name="privacyPolicy" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Cookie Policy</Form.Label>
              <Form.Control defaultValue={Content.cookiePolicy} name="cookiePolicy" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Data Protection</Form.Label>
              <Form.Control defaultValue={Content.dataProtection} name="dataProtection" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Report Incident</Form.Label>
              <Form.Control defaultValue={Content.reportIncident} name="reportIncident" className="theme-styling" as="textarea" rows={5} />
            </Form.Group>
            <br />
            <Button type="primary"
              onClick={()=>{
                var privacyPolicy = document.getElementsByName('privacyPolicy')[0].value;
                var cookiePolicy = document.getElementsByName('cookiePolicy')[0].value;
                var dataProtection = document.getElementsByName('dataProtection')[0].value;
                var reportIncident = document.getElementsByName('reportIncident')[0].value;
                var termsAndCondition = document.getElementsByName('termsAndCondition')[0].value;

                var data = {
                  privacyPolicy:privacyPolicy,
                  cookiePolicy:cookiePolicy,
                  dataProtection:dataProtection,
                  reportIncident:reportIncident,
                  termsAndCondition:termsAndCondition,
                }

                const updateContent = axios.post(`http://localhost:8080/api/updateLegalContent`, data);
                if (updateContent) {
                  window.location.reload();
                }
              }}
            >Submit</Button>
          </Form>
          <br></br>
        </div>
      </Container>
    </>
  );
}

const SearchBar = styled(FiltersBar)`
    background:none;
    }
    `;

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
`;
