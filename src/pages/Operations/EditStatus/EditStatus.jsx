import { useState, useEffect, useRef } from "react"

import Container from "components/Container"
import TopBar from "components/TopBar"
import ColorPicker from "components/ColorPicker"
import usePage from "hooks/usePage"

import { Row, Col } from "antd"
import {
  Button,
  Select,
  Input,
  Checkbox,
  DatePicker,
  Alert,
  ColorSvg,
} from "ant"
import Heading from "ant/Heading"
import { TextArea } from "ant/Input"

import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"
import theme from "styles/Theme"
import Colors from "components/Colors"
import UploadImages from "components/UploadImages"


import CompLoading from "components/CompLoading"

import { CallGetProductCategories, CallPostProduct, CallUpdateProductById } from "api/products"
import useGoBack from "hooks/useGoBack"


import { validateFloatInput, validateNumberInput } from "utils"
import styled from "styled-components"
import axios from "axios"
import { Formik } from "formik"
const { Option } = Select

export default function UploadProducts({
  setActiveComp,
  onProductAdd,
  isEdit = false,
  product = null,
}) {

  const [isButtonLoading, setButtonLoading] = useState(false)

  const [errors, setErrors] = useState([])

  const [Operations, setOperations] = useState({});

  useEffect(() => {
    async function getOperations() {
      const getOperation = await axios.post(`http://localhost:8080/api/operations`, { vendorId: localStorage.getItem('uid') });
      if (getOperation) {
        console.log(getOperation.data.data)
        setOperations(getOperation.data.data);
      }
    }
    getOperations();
  }, []);

  const submitButtonRef = useRef()
  const onSubmit = () => {
    submitButtonRef.current.click()
  }
  usePage("Edit Status")
  useGoBack(() => setActiveComp("operations"))

  return (
    <>
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              Operations: () => setActiveComp("operations"),
              Modify: () => { },
            }}
          />
          <Formik
            initialValues={{
              operationStatus: Operations.operationStatus,
              address: Operations.address,
              googleMapLocation: Operations.googleMapLocation,
              phoneNumber: Operations.phoneNumber,
              staffWorkers: Operations.staffWorkers,
              specialistForUser: Operations.specialistForUser,
              userCapacity: Operations.userCapacity,
            }}
            validate={values => {
              const errors = {}
              // if (!Operations.password.trim()) {
              //   errors.password = "Password is Required"
              // }

              return errors
            }}
            enableReinitialize={true}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values)
              var operationsData = {
                vendorId: localStorage.getItem('uid'),
                operationStatus: 'Active',
                address: values.address,
                googleMapLocation: values.googleMapLocation,
                phoneNumber: values.phoneNumber,
                staffWorkers: values.staffWorkers,
                specialistForUser: values.specialistForUser,
                userCapacity: values.userCapacity,
              }
              const updateOperations = await axios.post(`http://localhost:8080/api/updateOperations`, operationsData);
              if (updateOperations.data.data !== null || updateOperations.data.data !== undefined) {
                window.location.reload();
              }
              setSubmitting(false)
            }}>
            {({
              values,
              errors,
              handleChange,
              touched,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <Row
                    style={{
                      maxWidth: "1092px",
                      marginTop: "50px",
                      marginBottom: "60px",
                    }}>

                    <Col style={{ display: "flex", alignItems: "center" }} span={12}>
                      <Heading
                        style={{ marginRight: "35px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Status:
                      </Heading>
                      <input type="hidden" defaultValue={Operations.operationStatus} name="operationStatus" id="operationStatus" />
                      <Select
                        onChange={(value) => {
                          console.log(value)
                          document.getElementById('operationStatus').value = value;
                        }}
                        defaultValue={'Active'}
                        suffixIcon={<DownArrowIcon />}>
                        <Option value={'Active'}>{`Active`}</Option>
                        <Option value={'Inactive'}>{'Inactive'}</Option>
                      </Select>
                    </Col>
                  </Row>
                  <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Address
                      </Heading>
                      <InputMuutos>
                        <input type="text"  
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="address"
                          defaultValue={Operations.address}
                          style={{ marginBottom: "50px" }}
                          placeholder='Address'
                          className="input-styled"
                        />
                      </InputMuutos>
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Google Map Location
                      </Heading>
                      <InputMuutos>
                      <input type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={Operations.googleMapLocation}
                        name="googleMapLocation"
                        style={{ marginBottom: "50px" }}
                        placeholder='Google Map Location'
                        className="input-styled"
                      />
                      </InputMuutos>
                    </Col>
                  </Row>
                  <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Phone Number
                      </Heading>
                      <InputMuutos>
                        <input type="text"   
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={Operations.phoneNumber}
                        name="phoneNumber"
                        style={{ marginBottom: "50px" }}
                        placeholder='Phone Number'
                        className="input-styled"
                        />
                      </InputMuutos>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Staff Workers
                      </Heading>
                      <InputMuutos>
                        <input type="text" 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={Operations.staffWorkers}
                          name="staffWorkers"
                          style={{ marginBottom: "60px" }}
                          placeholder='QAR'
                          className="input-styled"
                        />
                      </InputMuutos>
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        User Capacity
                      </Heading>
                      <InputMuutos>
                        <input type="text" 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={Operations.userCapacity}
                          name="userCapacity"
                          style={{ marginBottom: "60px" }}
                          placeholder='QAR'
                          className="input-styled"
                        />
                      </InputMuutos>
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Specialist For A User
                      </Heading>
                      <InputMuutos>
                        <input type="text" 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={Operations.specialistForUser}
                          name="specialistForUser"
                          style={{ marginBottom: "60px" }}
                          placeholder='QAR'
                          className="input-styled" 
                        />
                      </InputMuutos>
                    </Col>
                  </Row>
                  <Row gutter={20} style={{ maxWidth: "1092px" }}>
                    <Col span={12}>
                      <Row style={{ marginBottom: "40px" }}>
                        <Col span={12}>
                          <button
                            type='submit'
                            ref={submitButtonRef}
                            style={{ display: "none" }}></button>
                          <Button
                            loading={isSubmitting}
                            onClick={onSubmit}
                            type='primary'>
                            Save
                          </Button>
                        </Col>

                        {isEdit && (
                          <Col span={12}>
                            <Button
                              style={{
                                color: "red",
                                position: "absolute",
                                top: "15px",
                                left: "100px",
                              }}
                              type='link'>
                              Delete
                            </Button>
                          </Col>
                        )}
                        <Col span={12}></Col>
                      </Row>
                    </Col>

                    <Col span={12}></Col>
                  </Row>
                </form>
              </>
            )}
          </Formik>
        </div>
      </Container>
    </>
  )
}


const CalculateWidget = styled.div`

  & > div > .heading{
    margin-left:-10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #D4D4D8;
  }

  & > div > .table-one > tr > th {
    padding:5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #FAFAFA;
  }
  & > div > .table-one > tr > td {
    padding:5px;
    text-align:right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #71717A;
  }

  & > div > .table-second > tr > .active {
    padding:5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #10B981;
  }
  & > div > .table-second > tr > .active {
    padding:5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #10B981;
  }

  & > div > .table-second > tr > th {
    padding:5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #FAFAFA;
  }
  & > div > .table-second > tr > td {
    padding:5px;
    text-align:right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #71717A;
  }




`;


const InputMuutos = styled.div`

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
    border-top-width: 1px; 
    border-right-width: 1px; 
    border-bottom-width: 1px; 
    border-left-width: 1px; 
    border-top-style: solid; 
    border-right-style: solid; 
    border-bottom-style: solid; 
    border-left-style: solid; 
    border-top-color: rgb(217, 217, 217); 
    border-right-color: rgb(217, 217, 217); 
    border-bottom-color: rgb(217, 217, 217); 
    border-left-color: rgb(217, 217, 217); 
    border-image-source: initial; 
    border-image-slice: initial; 
    border-image-width: initial; 
    border-image-outset: initial; 
    border-image-repeat: initial; 
    border-top-left-radius: 8px; 
    border-top-right-radius: 8px; 
    border-bottom-right-radius: 8px; 
    border-bottom-left-radius: 8px; 
    transition-duration: 0.3s; 
    transition-timing-function: ease; 
    transition-delay: 0s; 
    transition-property: all;
  }

  & > .input-styled{
    background-color: rgb(34, 34, 37); 
    font-size: 16px; 
    color: rgb(250, 250, 250); 
    font-weight: 400; 
    padding: 16px 24px; 
    border: none; 
    border-radius: 12px; 
    
    padding-top: 16px; 
    padding-right: 24px; 
    padding-bottom: 16px; 
    padding-left: 24px; 
    border-top-width: initial; 
    border-right-width: initial; 
    border-bottom-width: initial; 
    border-left-width: initial; 
    border-top-style: none; 
    border-right-style: none; 
    border-bottom-style: none; 
    border-left-style: none; 
    border-top-color: initial; 
    border-right-color: initial; 
    border-bottom-color: initial; 
    border-left-color: initial; 
    border-image-source: initial; 
    border-image-slice: initial; 
    border-image-width: initial; 
    border-image-outset: initial; 
    border-image-repeat: initial; 
    border-top-left-radius: 12px; 
    border-top-right-radius: 12px; 
    border-bottom-right-radius: 12px; 
    border-bottom-left-radius: 12px;
  }

`