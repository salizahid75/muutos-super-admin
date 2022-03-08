import { useState } from "react"

import Container from "components/Container"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"

import { Row, Col } from "antd"

import Heading from "ant/Heading"
import { TextArea } from "ant/Input"
import { categories } from "./data"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import theme from "styles/Theme"
import UploadImages from "components/UploadImages"
import MarkDownEditor from "components/MarkDownEditor"
const { Option } = Select

export default function UploadProducts({ setActiveComp }) {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState(null)
    const [subTitle, setSubTitle] = useState("")
    const [errors, setErrors] = useState([])
    const [images, setImages] = useState([])
    const [category, setCategory] = useState(categories[0])
    const onSubmit = () => {
        setErrors([])

        const inputErrors = []
        if (title == "") {
            inputErrors.push("Title cannot be Empty")
        }
        if (inputErrors.length) {
            setErrors(inputErrors)
            window.scrollTo(0, 0)

            return
        }
    }
    usePage("Add Article")
    return (
        <>
            <Container>
                <div>
                    <TopBar
                        breadcrumb={{
                            Articles: () => setActiveComp("articles"),
                            "Add Article": () => {},
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
                                Select Category:
                            </Heading>
                            <Select
                                suffixIcon={<DownArrowIcon />}
                                defaultValue={categories[0]}
                                onChange={v => setCategory(v)}>
                                {categories.map((c, index) => (
                                    <Option key={index} value={c}>
                                        <span
                                            style={{
                                                textTransform: "capitalize",
                                            }}>
                                            {c}
                                        </span>
                                    </Option>
                                ))}
                            </Select>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    <Row
                        gutter={20}
                        style={{ maxWidth: "1092px", marginBottom: "60px" }}>
                        <Col span={12}>
                            <Heading
                                style={{ marginBottom: "15px" }}
                                size='24px'
                                weight={theme.font.weight.semiBold}>
                                Title
                            </Heading>
                            <Input
                                type='primary'
                                placeholder="Article's Title"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Col>
                        <Col span={12}>
                            <Heading
                                style={{ marginBottom: "15px" }}
                                size='24px'
                                weight={theme.font.weight.semiBold}>
                                Sub Title
                            </Heading>
                            <Input
                                type='primary'
                                placeholder='Not compulsory'
                                onChange={e => setSubTitle(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <div style={{ marginBottom: "60px" }}>
                        <UploadImages images={images} setImages={setImages} />
                    </div>
                    <div style={{ marginBottom: "60px" }}>
                        <MarkDownEditor
                            placeholder='Type or Add here'
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    <Row gutter={20} style={{ maxWidth: "1092px" }}>
                        <Col span={12}>
                            <Row style={{ marginBottom: "40px" }}>
                                <Col span={12}>
                                    <Button onClick={onSubmit} type='primary'>
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
                    {errors.map((error, index) => (
                        <Alert
                            key={index}
                            message={error}
                            type='error'
                            showIcon
                            icon={
                                <ColorSvg
                                    style={{ alignSelf: "start" }}
                                    color='assetRed'>
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
