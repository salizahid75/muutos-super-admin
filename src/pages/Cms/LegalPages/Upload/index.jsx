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
const { Option } = Select;

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("Add Legal Pages Content");
  const userRole = localStorage.getItem("muutos-u-role");
  const [UserRole, setUserRole] = useState("");
  useEffect(() => {
    if (userRole == "admin") {
      setUserRole("admin");
    }
  }, []);
  const [component, setComponent] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [colors, setColors] = useState([]);
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const [serviceImages, setServiceImages] = useState(
    isEdit && Array.isArray(service?.images)
      ? service?.images?.map((i) => ({
          file: i,
        }))
      : []
  );
  const [trainerImages, setTrainerImages] = useState(
    isEdit && Array.isArray(service?.specialistImages)
      ? service?.specialistImages?.map((i) => ({
          file: i,
        }))
      : []
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onPickerDone = (color) => {
    if (color) {
      setColors([...colors, color]);
    }

    setPickerVisible(false);
  };
  const { set, get } = useServicesController({
    data: {},
    defaultData: service,
  });

  const onSubmit = async () => {
    setErrors([]);

    const data = get.data();
    var inputFields;
    const userRole = localStorage.getItem("muutos-u-role");
    if (userRole == "admin") {
      inputFields = [
        "userEmail",
        "name",
        "address",
        "staffWorkers",
        "userCapacity",
        "specialists",
        "spot",
        "code",
        "schedule",
        "price",
      ];
    } else {
      inputFields = [
        "name",
        "address",
        "staffWorkers",
        "userCapacity",
        "specialists",
        "spot",
        "code",
        "schedule",
        "price",
      ];
    }
    const inputEmptyFields = inputFields.filter(
      (f) => !data[f] || !data[f].trim()
    );
    const inputErrors = [];

    if (inputEmptyFields.length) {
      inputErrors.push(
        `${inputEmptyFields
          .map((f) => f[0].toUpperCase() + f.slice(1))
          .join(", ")} cannot be Empty`
      );
    }
    if (data.audiences.length < 1) {
      inputErrors.push("please select at least one audiences");
    }
    if (data.workingHours.length < 1) {
      inputErrors.push("please select at least one Working Hour");
    }
    if (data.facilities.length < 1) {
      inputErrors.push("please select at least one Facility");
    }
    if (data.memberships.length < 1 && component % 2 === 0) {
      inputErrors.push("please select at least one MemberShip");
    }
    if (data.servicesOffered.length < 1 && component % 2 === 1) {
      inputErrors.push("please select at least one Service");
    }
    if (inputErrors.length) {
      setErrors(inputErrors);
      window.scrollTo(0, 0);
      return;
    }
    setButtonLoading(true);

    let formData = new FormData();

    for (const prop in data) {
      formData.append(prop, data[prop]);
    }

    const res = await CallPostService(formData);
    if (res.status === "active") {
      setActiveComp("products");
    } else {
      setErrors([res.data]);
    }
    setButtonLoading(false);
  };

  return (
    <>
      <ColorPicker onDone={onPickerDone} visible={pickerVisible} />
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              Services: () => setActiveComp("services"),
              "Upload Service": () => {},
            }}
          />
          <Form onClick={formHandler}>
            <h2 className="text-white">To the world Section</h2>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Title</Form.Label>
              <Form.Control className="theme-styling" type="text" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Content</Form.Label>
              <Form.Control className="theme-styling" as="textarea" rows={3} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label className="text-white">Select Page</Form.Label>
              <Form.Select className="theme-styling" aria-label="Default select example">
                <option  disabled>Select Page</option>
                <option value="terms-of-user">Terms of Use</option>
                <option value="Data-Protection">Data Protection</option>
                <option value="Cookie-Policy">Cookie Policy</option>
                <option value="Report-Incident">Report Incident</option>
                
            </Form.Select>
            </Form.Group>
           

            <Button variant="primary">Submit</Button>
          </Form>
          <br></br>
        </div>
        {() => {
          if (UserRole !== "admin") {
            return (
              <div>
                <Heading
                  size="32px"
                  style={{ marginTop: "10px", marginBottom: "37px" }}
                >
                  Notice Widgets
                </Heading>
                {errors.map((error, index) => (
                  <Alert
                    key={index}
                    message={error}
                    type="error"
                    showIcon
                    icon={
                      <ColorSvg style={{ alignSelf: "start" }} color="assetRed">
                        <AlertIcon
                          style={{
                            transform: "translateY(4px)",
                            marginRight: "8px",
                          }}
                        />
                      </ColorSvg>
                    }
                  />
                ))}
              </div>
            );
          }
        }}
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
