import { useState } from "react"

import Container from "components/Container"
import TopBar from "components/TopBar"
import ColorPicker from "components/ColorPicker"
import usePage from "hooks/usePage"
import { validateFloatInput, validateNumberInput } from "utils"

import { Row, Col } from "antd"
import Heading from "ant/Heading"
import { TextArea } from "ant/Input"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"

import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import theme from "styles/Theme"
import Colors from "components/Colors"
import UploadImages from "components/UploadImages"
import useStaffController from "./useStaffController"
import { specialities, statuses } from "./data"
import { CallPostStaff, CallUpdateStaffById} from "api/staff"
const { Option } = Select

export default function UploadProducts({ 
  setActiveComp,
  onStaffAdd,
  isEdit = false,
  staff = null,
 }) {
  const [errors, setErrors] = useState([])
  const [images, setImages] = useState(
    isEdit
      ? staff.images?.map(i => ({
          file: process.env.REACT_APP_HOST + "/" + i,
        }))
      : []
  )
  const { set, get } = useStaffController({
    data: {},
    defaultData: staff,
  })
  const onSubmit = async () => {
    setErrors([])

    const data = get.data()

    const inputFields = ["name", "email", "mobile", "description", "charges"]
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

    if (data.workingHours.length < 1) {
      inputErrors.push("please select at least one Working Hour")
    }
    if (inputErrors.length) {
      setErrors(inputErrors)
      window.scrollTo(0, 0)
      return
    }

    let formData = new FormData()

    for (const prop in data) {
      formData.append(prop, data[prop])
    }

    for (const image of images) {
      formData.append("image", image.file)
    }
    formData.append('vendorId', localStorage.getItem('uid'));
    if(!isEdit){

      const res = await CallPostStaff(formData)
  
      // setButtonLoading(false)
      if (res.status === "active") {
        onStaffAdd &&
          onStaffAdd({
            ...data,
            id: res.data.staffId,
            images: res.data.images,
          })
        if (isEdit) setActiveComp("staff")
      } else {
        setErrors([res.data])
      }
    }else{
      formData.append('id', staff.id)
      const res = await CallUpdateStaffById(formData)
      if(res.status=='active'){
        window.location.reload();
      }
    }

    // if (res.status === "active") {
    //   setActiveComp("staff")
    // } else {
    //   setErrors([res.data])
    // }
    // console.log(formData)
  }
  usePage("Add Specialist")
  return (
    <>
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              Staff: () => setActiveComp("staff"),
              "Add Specialist": () => {},
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
              span={12}>
              <Heading
                style={{ marginRight: "35px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Speciality:
              </Heading>
              <Select
                suffixIcon={<DownArrowIcon />}
                defaultValue={specialities}
                onChange={v => set.speciality(v)}>
                {specialities.map((s, index) => (
                  <Option key={index} value={s}>
                    <span
                      style={{
                        textTransform: "capitalize",
                      }}>
                      {s}
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
          <div style={{ marginBottom: "60px" }}>
            <UploadImages images={images} setImages={setImages} />
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
                placeholder='Full Name'
                {...set.registerInput("name")}
              />
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Contact
              </Heading>
              <Input
                type='primary'
                style={{ marginBottom: "20px" }}
                placeholder='Email'
                {...set.registerInput("email")}
              />
              <Input
                type='primary'
                placeholder='Mobile Number'
                {...set.registerInput("mobile", {
                  validator: validateNumberInput,
                })}
              />
            </Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "70px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Description
              </Heading>
              <TextArea
                placeholder='Maximum 400 Word Count Limit'
                style={{
                  height: "212px",
                }}
                row={12}
                {...set.registerInput("description")}
              />
            </Col>
            <Col span={12}></Col>
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
                  onChange={e => set.workingHours(["sat", e.target.checked])}>
                  Saturday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => set.workingHours(["sun", e.target.checked])}>
                  Sunday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => set.workingHours(["mon", e.target.checked])}>
                  Monday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => set.workingHours(["tue", e.target.checked])}>
                  Tuesday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => set.workingHours(["wed", e.target.checked])}>
                  Wednesday
                </Checkbox>
                <Checkbox
                  style={{ marginBottom: "20px" }}
                  onChange={e => set.workingHours(["thur", e.target.checked])}>
                  Thursday
                </Checkbox>
                <Checkbox
                  onChange={e => set.workingHours(["fri", e.target.checked])}>
                  Friday
                </Checkbox>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px" }}>
            <Col span={12}>
              <Row style={{ marginBottom: "40px" }}>
                <Col span={12}>
                  <Heading
                    style={{ marginBottom: "15px" }}
                    size='24px'
                    weight={theme.font.weight.semiBold}>
                    Monthy Cost
                  </Heading>
                  <Input
                    type='primary'
                    placeholder='QAR '
                    {...set.registerInput("charges", {
                      validator: validateFloatInput,
                    })}
                  />
                </Col>
                <Col span={12}></Col>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px" }}>
            <Col span={12}>
              <Row style={{ marginBottom: "40px" }}>
                <Col span={12}>
                  <Button type='primary' onClick={onSubmit}>
                    Save
                  </Button>
                </Col>
                <Col span={12}></Col>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
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
      </Container>
    </>
  )
}
