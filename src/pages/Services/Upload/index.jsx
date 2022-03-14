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
import axios from "axios"
const { Option } = Select

export default function Upload({
  setActiveComp,
  isEdit = false,
  service = null,
}) {
  usePage("Upload Service")
  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  useEffect(() => {
    if (userRole == 'admin') {
      setUserRole('admin');
    }
  }, []);
  const [component, setComponent] = useState(0)
  const [pickerVisible, setPickerVisible] = useState(false)
  const [colors, setColors] = useState([])
  const [isButtonLoading, setButtonLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [Staff, setStaff] = useState([])
  const [Trainers, setTrainers] = useState([])
  const [AboutTheSpot, setAboutTheSpot] = useState([])
  const [ServiceCode, setServiceCode] = useState([])
  const [TrainerSchedule, setTrainerSchedule] = useState([])
  const [AdditionalServices, setAdditionalServices] = useState([])
  const [serviceImages, setServiceImages] = useState(
    isEdit && Array.isArray(service?.images)
      ? service?.images?.map(i => ({
        file: i,
      }))
      : []
  )
  const [trainerImages, setTrainerImages] = useState(
    isEdit && Array.isArray(service?.specialistImages)
      ? service?.specialistImages?.map(i => ({
        file: i,
      }))
      : []
  )

  useEffect(()=>{
    async function getStaff(){
      const staff = await axios.get(`http://localhost:8080/api/allStaff?ownerId=${localStorage.getItem('uid')}`);
      console.log(staff);
      setStaff(staff.data.data);
    }
    getStaff()
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onPickerDone = color => {
    if (color) {
      setColors([...colors, color])
    }

    setPickerVisible(false)
  }
  const { set, get } = useServicesController({
    data: {},
    defaultData: service,
  })

  const onSubmit = async () => {
    setErrors([])

    const data = get.data()
    var inputFields;
    const userRole = localStorage.getItem('muutos-u-role');
    if (userRole == 'admin') {
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
      ]
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
      ]
    }

    
    const inputEmptyFields = inputFields.filter(
      f => !data[f] || !data[f].trim()
    )
    const inputErrors = []

    if (inputEmptyFields.length) {
      inputErrors.push(
        `${inputEmptyFields
          .map(f => f[0].toUpperCase() + f.slice(1))
          .join(", ")} cannot be Empty`
      )
    }
    if (data.audiences.length < 1) {
      inputErrors.push("please select at least one audiences")
    }
    if (data.workingHours.length < 1) {
      inputErrors.push("please select at least one Working Hour")
    }
    if (data.facilities.length < 1) {
      inputErrors.push("please select at least one Facility")
    }
    if (data.memberships.length < 1 && component % 2 === 0) {
      inputErrors.push("please select at least one MemberShip")
    }
    if (data.servicesOffered.length < 1 && component % 2 === 1) {
      inputErrors.push("please select at least one Service")
    }
    if (inputErrors.length) {
      setErrors(inputErrors)
      window.scrollTo(0, 0)
      return
    }
    setButtonLoading(true)

    let formData = new FormData()

    for (const prop in data) {
      formData.append(prop, data[prop])
    }
    for (const image of serviceImages) {
      formData.append("image", image.file)
    }
    for (const trainer of Trainers) {
      formData.append('trainers', trainer);
    }

    for (const service of AdditionalServices) {
      formData.append('additionalServices', service);
    }

    var facilities = data.facilities;
    delete data.facilities;
    for (const facility of facilities) {
      formData.append('facilities', facility);
    }
    formData.append('vendorId', localStorage.getItem('uid'))
    const res = await CallPostService(formData)
    if (res.status === "active") {
      setActiveComp("products")
    } else {
      setErrors([res.data])
    }
    setButtonLoading(false)
  }

  return (
    <>
      <ColorPicker onDone={onPickerDone} visible={pickerVisible} />
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              Services: () => setActiveComp("services"),
              "Upload Service": () => { },
            }}
          />
          {() => {
            if (localStorage.getItem('muutos-u-role') == 'admin') {
              return (
                <>
                  <Row
                    style={{
                      maxWidth: "1092px",
                      marginTop: "50px",
                      marginBottom: "60px",
                    }}>
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      span={24}>
                      <Heading
                        style={{ marginRight: "35px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Enter User Email:
                      </Heading>
                      <Input
                        type='primary'
                        style={{ marginBottom: "5px", width: '100%' }}
                        placeholder='Enter A Valid User Email Address'
                        {...set.registerInput("userEmail")}
                      />
                    </Col>
                  </Row>
                </>
              )
            }
          }}
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "70px",
                }}>
                <Heading
                  style={{ marginRight: "35px" }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Select Service:
                </Heading>
                <Select
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={"Gym Memberships"}
                  onChange={v => setComponent(v)}>
                  {Object.entries(services).map(([name, value]) => (
                    <Option value={value}>{name}</Option>
                  ))}
                </Select>
              </div>
            </Col>

            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Target Audience
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox
                  onChange={e => set.audiences(["men", e.target.checked])}>
                  Men
                </Checkbox>
                <Checkbox
                  style={{
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                  onChange={e => set.audiences(["women", e.target.checked])}>
                  Women
                </Checkbox>
                <Checkbox
                  onChange={e => set.audiences(["kid", e.target.checked])}>
                  Kids
                </Checkbox>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              maxWidth: "1092px",
              marginTop: "50px",
              marginBottom: "60px",
            }}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
              }}
              span={12}>
              <Heading
                style={{ marginRight: "35px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Select Language:
              </Heading>

              <Select
                suffixIcon={<DownArrowIcon />}
                defaultValue={languages}
                onChange={v => set.language(v)}>
                {languages.map((l, index) => (
                  <Option key={index} value={l}>
                    <span
                      style={{
                        textTransform: "capitalize",
                      }}>
                      {l}
                    </span>
                  </Option>
                ))}
              </Select>
            </Col>
            <Col style={{ display: "flex", alignItems: "center" }} span={12}>
              <Heading
                style={{ marginRight: "35px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Status:
              </Heading>
              <Select
                suffixIcon={<DownArrowIcon />}
                defaultValue={Object.values(statuses)[0]}
                onChange={v => set.status(v)}>
                {Object.entries(statuses).map(([name, value]) => (
                  <Option value={value}>{name}</Option>
                ))}
              </Select>
            </Col>
          </Row>
          <div style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Heading
              style={{ marginBottom: "30px" }}
              size='24px'
              weight={theme.font.weight.semiBold}>
              Upload Image:
            </Heading>
            <UploadImages images={serviceImages} setImages={setServiceImages} />
          </div>

          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Name
              </Heading>
              <Input
                type='primary'
                style={{ marginBottom: "60px" }}
                placeholder='A unique Service name'
                {...set.registerInput("name")}
              />
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Address
              </Heading>
              <Input
                type='primary'
                style={{ marginBottom: "60px" }}
                placeholder='Center Location'
                {...set.registerInput("address")}
              />
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                }}>
                <Heading
                  style={{
                    marginRight: "30px",
                    minWidth: "max-content",
                  }}
                  size='19px'
                  weight={theme.font.weight.regular}>
                  Staff Workers
                </Heading>
                <Input
                  style={{
                    padding: "12px 17px",
                    maxWidth: "150px",
                  }}
                  type='primary'
                  placeholder='Capacity'
                  {...set.registerInput("staffWorkers", {
                    validator: validateNumberInput,
                  })}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                }}>
                <Heading
                  style={{
                    marginRight: "30px",
                    minWidth: "max-content",
                  }}
                  size='19px'
                  weight={theme.font.weight.regular}>
                  Specialists For A User
                </Heading>
                <Input
                  style={{
                    padding: "12px 17px",
                    maxWidth: "150px",
                  }}
                  type='primary'
                  placeholder='Capacity'
                  {...set.registerInput("specialists", {
                    validator: validateNumberInput,
                  })}
                />
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                }}>
                <Heading
                  style={{
                    marginRight: "30px",
                    minWidth: "max-content",
                  }}
                  size='19px'
                  weight={theme.font.weight.regular}>
                  Users Capacity
                </Heading>
                <Input
                  style={{
                    padding: "12px 17px",
                    maxWidth: "150px",
                  }}
                  type='primary'
                  placeholder='Capacity'
                  {...set.registerInput("userCapacity", {
                    validator: validateNumberInput,
                  })}
                />
              </div>
            </Col>
          </Row>
          <Row
            gutter={20}
            style={{
              maxWidth: "1092px",
              marginBottom: "60px",
            }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "30px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Membership Types
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.memberships(["day-pass", e.target.checked])
                  }>
                  Day Pass
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => {
                    set.memberships(["1week-permit", e.target.checked])
                  }}>
                  1 Week Permit
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.memberships(["quarter-permit", e.target.checked])
                  }>
                  Quarter Permit
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.memberships(["half-permit", e.target.checked])
                  }>
                  Half Permit
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.memberships[("annual-permit", e.target.checked)]
                  }>
                  Annual Permit
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.memberships[("couple-permit", e.target.checked)]
                  }>
                  Couple Permit
                </Checkbox>
                <Checkbox
                  onChange={e =>
                    set.memberships[("family-permit", e.target.checked)]
                  }>
                  Family Permit
                </Checkbox>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}>
            <Heading
              size='24px'
              weight={theme.font.weight.semiBold}>
              Trainers
            </Heading>
            <SearchBar
              style={{ width: "100px" }}
              onSearchChange={e => {
                var arr = Staff.filter(function(elem) {
                  //return false for the element that matches both the name and the id
                  var name = elem.name.toLowerCase();
                  return (name.includes(e.target.value));
                });
                var targetContainer = e.target.parentNode.parentNode.nextSibling.firstChild;
                targetContainer.innerHTML = '';
                arr.forEach(function(staff){
                  var listItem = document.createElement('li');
                  var person = `Name : ${staff.name}, Email: ${staff.email}`;
                  listItem.innerText = person;
                  listItem.setAttribute('key', staff.id);
                  listItem.addEventListener('click', function(event){
                    // console.log(event.target.getAttribute('key'));
                    Trainers.push(event.target.getAttribute('key'))
                    console.log(Trainers)
                  })
                  listItem.style.cursor='pointer'
                  listItem.style.backgroundColor='#222225'
                  listItem.style.padding='5px 10px'
                  listItem.style.marginBottom='5px'
                  targetContainer.append(listItem);
                  console.log(targetContainer)
                })
                if(e.target.value==''){
                  targetContainer.innerHTML = '';
                }
              }}
              placeHolder={"Search Trainer"}></SearchBar>
              <div className="found-staff">
                <ul style={{listStyle:'none', color:'#fff'}}>

                </ul>
              </div>
          </Row>
          <br />
          <Heading
            style={{ marginBottom: "30px" }}
            size='24px'
            weight={theme.font.weight.semiBold}>
            Facilities
            <input type="button" value="Add New Facility" style={{color:'#000', fontSize:'16px', transform:'translateY(-15%)', marginLeft:'20px'}}
              onClick={(e)=>{
                var targetContainer = e.target.parentNode.nextSibling;
                targetContainer.innerHTML = '';
                var facilityNameInput = document.createElement('input');
                var facilitySubmitButton = document.createElement('button');
                facilityNameInput.classList.add('styled-input');
                facilityNameInput.placeholder="Enter Facility Name";
                facilitySubmitButton.innerText = 'Add';
                facilitySubmitButton.style.marginLeft = '10px';
                facilitySubmitButton.style.padding = '12px 20px';
                facilitySubmitButton.setAttribute('type', 'primary')
                facilitySubmitButton.addEventListener('click', function(event){
                  console.log(event.target.previousSibling.value);
                  const facilityText = event.target.previousSibling.value;
                  set.facilities([facilityText, facilityText]);
                  targetContainer.innerHTML = '';
                })
                targetContainer.append(facilityNameInput);
                targetContainer.append(facilitySubmitButton);
              }}
            />
          </Heading>
          <div className="facilities-container">

          </div>
          <Heading
            style={{ marginBottom: "30px" }}
            size='24px'
            weight={theme.font.weight.semiBold}>
            Additional Services
            <input type="button" value="Add New Service" style={{color:'#000', fontSize:'16px', transform:'translateY(-15%)', marginLeft:'20px'}}
              onClick={(e)=>{
                var targetContainer = e.target.parentNode.nextSibling;
                targetContainer.innerHTML = '';
                var serviceNameInput = document.createElement('input');
                var serviceSubmitButton = document.createElement('button');
                serviceNameInput.classList.add('styled-input');
                serviceNameInput.placeholder="Enter Service Name";
                serviceSubmitButton.innerText = 'Add';
                serviceSubmitButton.style.marginLeft = '10px';
                serviceSubmitButton.style.padding = '12px 20px';
                serviceSubmitButton.setAttribute('type', 'primary')
                serviceSubmitButton.addEventListener('click', function(event){
                  console.log(event.target.previousSibling.value);
                  const serviceText = event.target.previousSibling.value;
                  AdditionalServices.push(serviceText)
                  targetContainer.innerHTML = '';
                })
                targetContainer.append(serviceNameInput);
                targetContainer.append(serviceSubmitButton);
              }}
            />
          </Heading>
          <div className="additional-services-container"></div>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                About The Spot
              </Heading>
              <TextArea
                placeholder='Maximum 400 Word Count Limit'
                style={{
                  height: "212px",
                  marginBottom: "60px",
                }}
                row={12}
                {...set.registerInput("spot")}
              />
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Service Code
              </Heading>
              <Input
                type='primary'
                style={{ marginBottom: "60px" }}
                placeholder='FAIZ-21'
                {...set.registerInput("code")}
              />
            </Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <WorkingHours>
              <Col span={24}>
                <Heading
                  style={{ marginBottom: "30px" }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Working Hours
                </Heading>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('saturday-opening-time').value;
                        var closingTime = document.getElementById('saturday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'saturday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Saturday
                    </Checkbox>
                    <div className="d-flex">
                      <InputMuutos>
                        <input className="styled-input" type="time" id="saturday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="saturday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('sunday-opening-time').value;
                        var closingTime = document.getElementById('sunday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'sunday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Sunday
                    </Checkbox>
                    <div className="d-flex">
                      <InputMuutos>
                        <input className="styled-input" type="time" id="sunday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="sunday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('monday-opening-time').value;
                        var closingTime = document.getElementById('monday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'monday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Monday
                    </Checkbox>
                    <div className="d-flex">
                      <InputMuutos>
                        <input className="styled-input" type="time" id="monday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="monday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('tuesday-opening-time').value;
                        var closingTime = document.getElementById('tuesday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'tuesday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Tuesday
                    </Checkbox>
                    <div className="d-flex">
                      <InputMuutos>
                        <input className="styled-input" type="time" id="tuesday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="tuesday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('wednesday-opening-time').value;
                        var closingTime = document.getElementById('wednesday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'wednesday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Wednesday
                    </Checkbox>
                    <div className="d-flex">
                      <InputMuutos>
                        <input className="styled-input" type="time" id="wednesday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="wednesday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('thursday-opening-time').value;
                        var closingTime = document.getElementById('thursday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'thursday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Thursday
                    </Checkbox>
                    <div className="d-flex">
                    <InputMuutos>
                        <input className="styled-input" type="time" id="thursday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="thursday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between m-1">
                    <Checkbox
                      style={{}}
                      onChange={e => {
                        var openingTime = document.getElementById('friday-opening-time').value;
                        var closingTime = document.getElementById('friday-closing-time').value;
                        var data = {
                          openingTime: openingTime,
                          closingTime: closingTime,
                          day:'friday'
                        }
                        set.workingHours([data, data])
                      }}>
                      Friday
                    </Checkbox>
                    <div className="d-flex">
                    <InputMuutos>
                        <input className="styled-input" type="time" id="friday-opening-time" /> &nbsp;&nbsp;&nbsp;
                        <input className="styled-input" type="time" id="friday-closing-time" />
                      </InputMuutos>
                    </div>
                  </div>
                </div>
              </Col>
            </WorkingHours>
            <Col span={12}></Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                {"Trainers Schedule"}
              </Heading>
              <TextArea
                placeholder='Lorem Ipsum'
                style={{
                  height: "212px",
                  marginBottom: "60px",
                }}
                row={12}
                {...set.registerInput("schedule")}
              />
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Price
              </Heading>
              <Input
                type='primary'
                style={{ marginBottom: "60px" }}
                placeholder='QAR (per/user)'
                {...set.registerInput("price", {
                  validator: validateFloatInput,
                })}
              />
            </Col>
          </Row>
          {/* <div style={{ marginBottom: "60px", maxWidth: "1092px" }}>
            <Heading
              style={{ marginBottom: "30px" }}
              size='24px'
              weight={theme.font.weight.semiBold}>
              {"Trainer Images"}
            </Heading>
            <UploadImages images={trainerImages} setImages={setTrainerImages} />
          </div> */}
          {errors.map((error, index) => (
            <Alert
              key={index}
              message={error}
              type='error'
              showIcon
              icon={
                <ColorSvg style={{ alignSelf: "start" }} color='assetRed'>
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
          <Row style={{ marginBottom: "40px", maxWidth: "1092px" }}>
            <Col span={12}>
              <Row gutter={20}>
                <Col span={12}>
                  <Button
                    type='primary'
                    onClick={onSubmit}
                    loading={isButtonLoading}>
                    Save
                  </Button>
                </Col>
                <Col span={12}>
                  <Button type='secondary'>Cancel</Button>
                </Col>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
        {
          () => {
            if (UserRole !== 'admin') {
              return (
                <div>
                  <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Notice Widgets
                  </Heading>
                  {errors.map((error, index) => (
                    <Alert
                      key={index}
                      message={error}
                      type='error'
                      showIcon
                      icon={
                        <ColorSvg style={{ alignSelf: "start" }} color='assetRed'>
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
              )

            }
          }
        }
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
const WorkingHours = styled.div`

& > div > div > div > div > .ant-input{
  background-color:#222225 !important;
  border: 3px solid #3F3F46;
  color:#D4D4D8;
}

& > div > div > div > div > .ant-input::-webkit-calendar-picker-indicator {
  background:none;
  display:none;
}
`

const InputMuutos = styled.div`
display:flex;
& > input { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 4px 11px; 
    font-variant: tabular-nums; 
    list-style: none; 
    font-feature-settings: "tnum", "tnum"; 
    position: relative; 
    display: inline-block; 
    width: 100%; 
    min-width: 0px; 
    color: rgba(0, 0, 0, 0.85); 
    font-size: 14px; 
    line-height: 1.5715; 
    background-color: rgb(255, 255, 255); 
    background-image: none; 
    border: 1px solid #d9d9d9; 
    border-radius: 8px; 
    transition: all 0.3s; 
    margin-top: 0px; 
    margin-right: 0px; 
    margin-bottom: 0px; 
    margin-left: 0px; 
    font-variant-ligatures: normal; 
    font-variant-numeric: tabular-nums; 
    font-variant-east-asian: normal; 
    font-variant-caps: normal; 
    list-style-position: initial; 
    list-style-image: initial; 
    list-style-type: none; 
    padding-top: 4px; 
    padding-right: 11px; 
    padding-bottom: 4px; 
    padding-left: 11px; 
   


  } 
  & > .styled-input{
      background-color: rgb(34, 34, 37); 
      font-size: 16px; 
      color: rgb(250, 250, 250); 
      font-weight: 400; 
      padding: 16px 24px; 
      border: 3px solid #3F3F46;
      &::-webkit-calendar-picker-indicator {
        background:none;
        display:none;
      }
  }


  
`