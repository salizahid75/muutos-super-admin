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
              // if (!values.password.trim()) {
              //   errors.password = "Password is Required"
              // }

              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
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
              console.log(operationsData)
              const updateOperations = await axios.post(`http://localhost:8080/api/updateOperations`, operationsData);

              if (updateOperations.data.data !== null || updateOperations.data.data !== undefined) {
                console.log(updateOperations.data.data);
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
                      <input type="hidden" value={values.operationStatus} name="operationStatus" id="operationStatus" />
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
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="address"
                        value={values.address}
                        style={{ marginBottom: "50px" }}
                        placeholder='Address'
                      // {...set.registerInput("name")}
                      />
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Google Map Location
                      </Heading>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.googleMapLocation}
                        name="googleMapLocation"
                        style={{ marginBottom: "50px" }}
                        placeholder='Google Map Location'
                      // {...set.registerInput("name")}
                      />
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
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        name="phoneNumber"
                        style={{ marginBottom: "50px" }}
                        placeholder='Phone Number'
                      // {...set.registerInput("name")}
                      />
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
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.staffWorkers}
                        name="staffWorkers"
                        style={{ marginBottom: "60px" }}
                        placeholder='QAR'
                      />
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        User Capacity
                      </Heading>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userCapacity}
                        name="userCapacity"
                        style={{ marginBottom: "60px" }}
                        placeholder='QAR'
                      />
                    </Col>
                    <Col span={12}>
                      <Heading
                        style={{ marginBottom: "15px" }}
                        size='24px'
                        weight={theme.font.weight.semiBold}>
                        Specialist For A User
                      </Heading>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.specialistForUser}
                        name="specialistForUser"
                        style={{ marginBottom: "60px" }}
                        placeholder='QAR'
                      />
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