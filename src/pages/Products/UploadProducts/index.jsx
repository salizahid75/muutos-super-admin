import { useState, useEffect } from "react"

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

import Sizes from "./Sizes"
import { languages, statuses, audienceData as audience } from "./data"

import CompLoading from "components/CompLoading"

import { CallGetProductCategories, CallPostProduct, CallUpdateProductById } from "api/products"
import useGoBack from "hooks/useGoBack"

import useProductsController from "./useProductsController"

import { validateFloatInput, validateNumberInput } from "utils"
import styled from "styled-components"
const { Option } = Select

export default function UploadProducts({
  setActiveComp,
  onProductAdd,
  isEdit = false,
  product = null,
}) {

  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  useEffect(() => {
    if (userRole == 'admin') {
      setUserRole('admin');
    }
  }, []);
  const [pickerVisible, setPickerVisible] = useState(false)
  const [colors, setColors] = useState(isEdit ? product.colors : [])
  const [images, setImages] = useState(
    isEdit
      ? product.images?.map(i => ({
        file: process.env.REACT_APP_HOST + "/upload/productImages/" + i,
      }))
      : []
  )

  // const [isLoading, setLoading] = useState(true)
  const [isButtonLoading, setButtonLoading] = useState(false)

  // const [productCats, setProductCats] = useState([])

  const [errors, setErrors] = useState([])

  // useEffect(() => {
  //   const callApis = async () => {
  //     const cats = await CallGetProductCategories()

  //     if (cats.status === "active") {
  //       setProductCats(cats.data)
  //     }

  //     setLoading(false)
  //   }

  //   callApis()
  // }, [])

  const onPickerDone = color => {
    if (color) {
      setColors([...colors, color])
    }

    setPickerVisible(false)
  }

  const onDeleteColor = colorIndex => {
    setColors([...colors?.filter((_, i) => i != colorIndex)])
  }

  const { set, get } = useProductsController({
    data: { categories: ["Shoe", "Cloth", "Gym"], colors: colors },
    defaultData: product,
  })

  const onSubmit = async () => {
    setErrors([])

    const data = get.data()

    var inputFields;
    const userRole = localStorage.getItem('muutos-u-role');
    if (userRole == 'admin') {
      inputFields = [
        "name",
        "description",
        "sku",
        "userEmail",
        "material",
        "origin",
        "brand",
        "price",
        "availability",
        "stock",
        "deliveryTerms",
      ]
    } else {
      inputFields = [
        "name",
        "description",
        "sku",
        "material",
        "origin",
        "brand",
        "price",
        "availability",
        "stock",
        "deliveryTerms",
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

    if (data.sizes.length < 1) {
      inputErrors.push("Please select at least one product size")
    }
    if (colors?.length < 1) {
      inputErrors.push("Please select at least one Color for the Product")
    }


    // if (images.length < 1) {
    //     // inputErrors.push("Please select at least one Image for the Product")
    // }
    if (inputErrors.length) {
      setErrors(inputErrors)
      window.scrollTo(0, 0)
      return
    }

    data.colors = colors

    let formData = new FormData()

    for (const prop in data) {
      formData.append(prop, data[prop])
    }

    for (const image of images) {
      formData.append("image", image.file)
    }

    setButtonLoading(true)

    if (isEdit) {
      formData.append("id", product.id);
      const res = await CallUpdateProductById(formData)
      setButtonLoading(false)
      if (res.status === "active") {
        onProductAdd &&
          onProductAdd({
            ...data,
            id: res.data.productId,
            images: res.data.images,
          })
        if (isEdit) setActiveComp("products")
      } else {
        setErrors([res.data])
      }
    } else {
      const res = await CallPostProduct(formData)
      setButtonLoading(false)
      if (res.status === "active") {
        onProductAdd &&
          onProductAdd({
            ...data,
            id: res.data.productId,
            images: res.data.images,
          })
        if (isEdit) setActiveComp("products")
      } else {
        setErrors([res.data])
      }
    }

  }

  usePage("Upload Product")
  useGoBack(() => setActiveComp("products"))

  // if (isLoading) return <CompLoading />

  return (
    <>
      <ColorPicker onDone={onPickerDone} visible={pickerVisible} />
      <Container>
        <div>
          <TopBar
            breadcrumb={{
              Product: () => setActiveComp("products"),
              Upload: () => { },
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
                defaultValue={'English'}
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
                style={{ marginBottom: "50px" }}
                placeholder='A unique product name'
                {...set.registerInput("name")}
              />
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Code/SKU
              </Heading>
              <Input
                type='primary'
                placeholder='FAIZ-21'
                {...set.registerInput("sku")}
              />
            </Col>
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
                {...set.registerInput("description")}
                row={12}
              />
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "30px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "32px",
                }}>
                <Heading
                  style={{
                    marginRight: "35px",
                  }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Category:
                </Heading>
                <Select
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={["Shoe", "Cloth", "Gym"]?.[0]}
                  onChange={v => set.category(v)}>
                  {["Shoe", "Cloth", "Gym"].map(pc => (
                    <Option value={pc}>{pc}</Option>
                  ))}
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                <Heading
                  style={{ marginRight: "35px" }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Sub Category:
                </Heading>
                <Select
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={"Shoe"}
                  onChange={v => console.log(v)}>
                  <Option key='1'>Shoe</Option>
                  <Option key='2'>Shirt</Option>
                  <Option key='3'>Pant</Option>
                </Select>
              </div>
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "30px" }}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                <Heading
                  style={{ marginRight: "35px" }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Brand:
                </Heading>
                <Select
                  // style={{ marginRight: "100px" }}
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={"Shoe"}
                  onChange={v => console.log(v)}>
                  <Option key='1'>Choose</Option>
                  <Option key='2'>Shirt</Option>
                  <Option key='3'>Pant</Option>
                </Select>
              </div>
            </Col>

            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                <Heading
                  style={{ marginRight: "35px" }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Target Audience:
                </Heading>
                <Select
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={Object.keys(audience)[0]}
                  onChange={v => set.audience(Number(v))}>
                  {Object.entries(audience).map(([key, value]) => (
                    <Option key={value}>{key}</Option>
                  ))}
                </Select>
              </div>
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "70px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Material
              </Heading>
              <Input
                type='primary'
                placeholder='exp: Eva Foam'
                {...set.registerInput("material")}
              />

              <Heading
                style={{
                  marginBottom: "15px",
                  marginTop: "50px",
                }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Colors
              </Heading>
              <div>
                <Colors
                  colors={colors}
                  onDelete={onDeleteColor}
                  onPlusClick={() => setPickerVisible(true)}
                />
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Select
                  style={{ float: "right", transform: 'translateY(-10%)' }}
                  suffixIcon={<DownArrowIcon />}
                  defaultValue={"UK sizes"}
                  onChange={v => console.log(v)}>
                  <Option key='1'>Choose</Option>
                  <Option key='2'>Shirt</Option>
                  <Option key='3'>Pant</Option>
                </Select>
                <Heading
                  style={{
                    marginBottom: "15px",
                    display: 'inline-block'
                  }}
                  size='24px'
                  weight={theme.font.weight.semiBold}>
                  Sizes
                </Heading>
              </div>
              <br />
              <div>
                <Sizes onChange={set.sizes} />
              </div>
            </Col>
          </Row>

          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Origin
              </Heading>
              <Input
                type='primary'
                placeholder='Lorem Ipsum'
                {...set.registerInput("origin")}
              />
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Cost
              </Heading>
              <Input
                type='primary'
                placeholder='QAR'
                {...set.registerInput("brand")}
              />
            </Col>
          </Row>
          {/* <Row
                        gutter={20}
                        style={{ maxWidth: "1092px", marginBottom: "70px" }}>
                        <Col span={12}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <Heading
                                    style={{ marginRight: "35px" }}
                                    size='24px'
                                    weight={theme.font.weight.semiBold}>
                                    Product Design:
                                </Heading>
                                <Select
                                    suffixIcon={<DownArrowIcon />}
                                    defaultValue={"Athlete"}
                                    onChange={v => console.log(v)}>
                                    <Option key='1'>Athlete</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col span={12}></Col>
                    </Row> */}
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "30px" }}>
            <Col span={12}>
              <Row gutter={20}>
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
                    placeholder='QAR'
                    {...set.registerInput("price", {
                      validator: validateFloatInput,
                    })}
                  />
                </Col>
                <Col span={12}>
                  <Heading
                    style={{ marginBottom: "15px" }}
                    size='24px'
                    weight={theme.font.weight.semiBold}>
                    Stock
                  </Heading>
                  <Input
                    type='primary'
                    placeholder='Quantity'
                    {...set.registerInput("stock", {
                      validator: validateNumberInput,
                    })}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Availability
              </Heading>
              <DatePicker
                placeholder='Select Date'
                onChange={(date, dateString) =>
                  set.registerInput("availability").onChange({
                    target: {
                      value: dateString,
                    },
                  })
                }
              />
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "30px" }}>
            <div className="d-flex align-items-center justify-content-center">
              <Heading
                style={{
                  marginRight: '30px'
                }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Tax Status
              </Heading>
              <Select
                suffixIcon={<DownArrowIcon />}
                defaultValue={"UK sizes"}
                onChange={v => console.log(v)}>
                <Option key='1'>Choose</Option>
                <Option key='2'>Shirt</Option>
                <Option key='3'>Pant</Option>
              </Select>
            </div>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Options
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Checkbox
                  onChange={e =>
                    set.options(["free_delivery", e.target.checked])
                  }
                  defaultChecked={get
                    ?.data()
                    ?.options.includes("free_delivery")}>
                  Free Delivery
                </Checkbox>
                <Checkbox
                  onChange={e =>
                    set.options(["express_delivery", e.target.checked])
                  }
                  style={{
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                  defaultChecked={get
                    ?.data()
                    ?.options.includes("express_delivery")}>
                  Express Delivery
                </Checkbox>
                <Checkbox
                  onChange={e => set.options(["charges", e.target.checked])}
                  defaultChecked={get
                    ?.data()
                    ?.options.includes("express_delivery")}>
                  Delivery Charges
                </Checkbox>
              </div>
            </Col>
            <Col span={12}>
              <Heading
                style={{ marginBottom: "15px" }}
                size='24px'
                weight={theme.font.weight.semiBold}>
                Delivery Terms
              </Heading>
              <Input
                type='primary'
                placeholder='Lorem Ipsum'
                {...set.registerInput("deliveryTerms")}
              />
            </Col>
          </Row>
          <Row gutter={20} style={{ maxWidth: "1092px" }}>
            <Col span={12}>
              <Row style={{ marginBottom: "40px" }}>
                <Col span={12}>
                  <Button
                    loading={isButtonLoading}
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
        </div>
        {
          () => {
            if (UserRole !== 'admin') {
              return (
                <div>
                  <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
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
                  <CalculateWidget>
                    <div className="row w-100 p-3" style={{ backgroundColor: '#222225', borderRadius: '5px' }}>
                      <h1 className="heading">
                        Calculate
                      </h1>
                      <table className="table-one" border="0" style={{ border: 'none' }}>
                        <tr>
                          <th>
                            N/A
                          </th>
                          <td>
                            Cost
                          </td>
                        </tr>
                        <tr>
                          <th>
                            N/A
                          </th>
                          <td>
                            Price
                          </td>
                        </tr>
                        <tr>
                          <th>
                            N/A
                          </th>
                          <td>
                            Tax
                          </td>
                        </tr>
                        <tr>
                          <th>
                            N/A
                          </th>
                          <td>
                            Delivery Charge
                          </td>
                        </tr>
                      </table>
                      <div style={{ border: '1.2px solid #3F3F46', marginTop: '10px', marginBottom: '10px' }} />
                      <table className="table-second" border="0" style={{ border: 'none' }}>
                        <tr>
                          <th className="active" style={{ fontSize: '16px' }}>
                            QAR N/A
                          </th>
                          <td className="active" style={{ textAlign: 'right' }}>
                            Cost
                          </td>
                        </tr>
                        <tr>
                          <th>
                            N/A
                          </th>
                          <td>
                            Delivery Charge
                          </td>
                        </tr>
                      </table>
                    </div>
                  </CalculateWidget>
                </div>
              )

            }
          }
        }
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