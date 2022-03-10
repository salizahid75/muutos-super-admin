import { useState, useEffect } from "react"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, Button, ColorSvg } from "ant"
import Heading from "ant/Heading"

import { columns, data } from "./data"

import { DataTable } from "./styles"
import { DragButton } from "ant"
import { Row, Col } from "antd"
import { Select, Input, Checkbox, Alert, } from "ant"
import { ReactComponent as TextIcon } from "assets/icons/File/Text.svg"
import ArticleCalendar from "../Widgets/ArticleCalendar"
import styled from 'styled-components'
import { TextArea } from "../../../ant/Input"
import { ReactComponent as Cross } from "assets/icons/Close/Close-1.svg"
import axios from "axios"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import theme from "styles/Theme"
import { Formik } from "formik"
import { useRef } from "react"
const { Option } = Select
export default function DT({ setActiveComp, onHide = null }) {
    const [active, setActive] = useState(0)
    const submitButtonRef = useRef()
    const onSubmit = () => {
        submitButtonRef.current.click()
    }



    const [Operations, setOperations] = useState({});
    const [Article, setArticle] = useState({});

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

    const onEdit = (id) => {
        async function getArticleById() {
            const getArticle = await axios.post(`http://localhost:8080/api/articleById`, { id:id});
            if (getArticle) {
                console.log(getArticle.data.data)
                setArticle(getArticle.data.data);
            }
        }
        getArticleById();
        document.getElementsByClassName('edit-article-container')[0].classList.remove('d-none');
    }

    usePage("Articles")
    return (
        <Container>
            <div>
                <TopBar
                    activeItem={active}
                    heading='05 AUG 2021'
                    menus={[
                        {
                            title: "Day",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Week",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Month",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Year",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "All Time",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                    ]}
                />
                <FiltersBar
                    onSearchChange={s => console.log(s)}
                    sortBy={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["All", "New", "Old"],
                    }}
                    otherFilters={
                        <Button
                            type='secondary'
                            onClick={() => setActiveComp("upload")}
                            style={{
                                height: "54px",
                                display: "inline-flex",
                                transform: "translateY(4px)",
                            }}
                            icon={
                                <ColorSvg color='primary'>
                                    <TextIcon
                                        style={{
                                            marginRight: "6px",
                                            transform: "translateY(2px)",
                                        }}
                                    />
                                </ColorSvg>
                            }>
                            Add Article
                        </Button>
                    }
                />

                <DataTable>
                    <Table
                        pagination={{
                            pageSize: data.length + 1,
                            hideOnSinglePage: true,
                        }}
                        columns={columns(onEdit)}
                        dataSource={data}
                    />
                </DataTable>
            </div>
            <div className="edit-article-container d-none">
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                <Wrapper>
                    <HeadingWrapper>
                        <h1>Add Announcement</h1>
                        <DragButton onClick={onHide} icon={<Cross />} />
                    </HeadingWrapper>
                    <Wrapper2>
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
                                        <Row gutter={20} style={{ maxWidth: "1092px", }}>
                                            <Col span={24}>
                                                <Heading
                                                    style={{ marginBottom: "15px" }}
                                                    size='24px'
                                                    weight={theme.font.weight.semiBold}>
                                                    Title
                                                </Heading>
                                                <InputMuutos>
                                                    <input type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="Title"
                                                        defaultValue={Operations.address}
                                                        style={{ marginBottom: "50px" }}
                                                        className="input-styled"
                                                    />
                                                </InputMuutos>
                                            </Col>
                                        </Row>
                                        <Row gutter={20} style={{ maxWidth: "1092px" }}>
                                            <Col span={24}>
                                                <Heading
                                                    style={{ marginBottom: "15px" }}
                                                    size='24px'
                                                    weight={theme.font.weight.semiBold}>
                                                    Subtitle
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
                                                    <Col span={12}></Col>
                                                </Row>
                                            </Col>

                                            <Col span={12}></Col>
                                        </Row>
                                    </form>
                                </>
                            )}
                        </Formik>
                    </Wrapper2>
                </Wrapper>
            </div>
        </Container>
    )
}


const Wrapper2 = styled.div`
    h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.colors.gray300};
    }
    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
    }
    p {
        font-size: 14px;
        color: ${p => p.theme.colors.gray600};
    }
    hr {
        border: 2px solid ${p => p.theme.colors.gray700};
        opacity: 0.5;
        height: 0;
    }
`

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background: ${p => p.theme.colors.gray800};
    margin-bottom: 30px;
`

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;

    & > div {
        margin-left: auto;
    }

    & > h1 {
        margin: 0;
        font-size: 24px;
        font-weight: ${p => p.theme.font.weight.semiBold};
        color: ${p => p.theme.colors.gray300};
    }
`

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
    background-color: #18181B; 
    background-image: none; 
    border: 1px solid #18181B; 
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
    background-color: #18181B; 
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