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
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Heading
              style={{ marginBottom: "30px" }}
              size='24px'
              weight={theme.font.weight.semiBold}>
              Trainers
            </Heading>
            <SearchBar
              style={{ width: "100px" }}
              onSearchChange={s => console.log(s)}
              placeHolder={"Search Trainer"}></SearchBar>
          </Row>
          <Row>
            <ImageWrapper>
              <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                }}>
                Faiz Champ
              </p>
            </ImageWrapper>
            <ImageWrapper>
              <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                }}>
                Faiz Champ
              </p>
            </ImageWrapper>
            <ImageWrapper>
              <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                }}>
                Faiz Champ
              </p>
            </ImageWrapper>
            <ImageWrapper>
              <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                }}>
                Faiz Champ
              </p>
            </ImageWrapper>
            <ImageWrapper>
              <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                }}>
                Faiz Champ
              </p>
            </ImageWrapper>
            <ImageWrapper>
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <PlusIcon
                  onClick={showModal}
                  style={{}}
                />
                <>
                  <Modal
                    title='Basic Modal'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}>
                    <Input type='text' />
                    {/* <UploadImages />
                    <p>Some contents...</p> */}
                  </Modal>
                </>
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "85px",
                  height: "21px",
                  position: "relative",
                  top: "5px",
                  textAlign: "center",
                }}>
                Add
              </p>
            </ImageWrapper>
          </Row>
          <br />
          <br />
          <Heading
            style={{ marginBottom: "30px" }}
            size='24px'
            weight={theme.font.weight.semiBold}>
            Facilities
          </Heading>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.facilities(["facility-1", e.target.checked])
                  }>
                  Facility 1
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.facilities(["facility-2", e.target.checked])
                  }>
                  Facility 2
                </Checkbox>
                <Checkbox
                  onChange={e =>
                    set.facilities(["facility-3", e.target.checked])
                  }>
                  Facility 3
                </Checkbox>
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.facilities(["facility-4", e.target.checked])
                  }>
                  Facility 4
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.facilities(["facility-5", e.target.checked])
                  }>
                  Facility 5
                </Checkbox>
                <Checkbox
                  onChange={e =>
                    set.facilities(["facility-6", e.target.checked])
                  }>
                  Facility 6
                </Checkbox>
              </div>
            </Col>
          </Row>
          <Heading
            style={{ marginBottom: "30px" }}
            size='24px'
            weight={theme.font.weight.semiBold}>
            Additional Services
          </Heading>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox style={{ marginBottom: "20px" }}>Service 1</Checkbox>
                <Checkbox style={{ marginBottom: "20px" }}>Service 2</Checkbox>
                <Checkbox>Service 3</Checkbox>
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox style={{ marginBottom: "20px" }}>Service 4</Checkbox>
                <Checkbox style={{ marginBottom: "20px" }}>Service 5</Checkbox>
                <Checkbox>Service 6</Checkbox>
              </div>
            </Col>
          </Row>
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
            <Col span={12}>
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
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-sat", e.target.checked])
                  }>
                  Saturday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-sun", e.target.checked])
                  }>
                  Sunday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-mon", e.target.checked])
                  }>
                  Monday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-tue", e.target.checked])
                  }>
                  Tuesday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-wed", e.target.checked])
                  }>
                  Wednesday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e =>
                    set.workingHours(["work-thur", e.target.checked])
                  }>
                  Thursday
                </Checkbox>
                <Checkbox
                  onChange={e =>
                    set.workingHours(["work-fri", e.target.checked])
                  }>
                  Friday
                </Checkbox>
              </div>
            </Col>
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
