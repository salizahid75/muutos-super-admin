import { useState, useEffect } from "react"
import { Row, Col } from "antd"
import { Button, Select } from "ant"
import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"

import theme from "styles/Theme"
import ColorSvg from "ant/ColorSvg"
import { ReactComponent as LeftArrow } from "assets/icons/Arrow/Chevron/Left.svg"
import { ReactComponent as PlusIcon } from "assets/icons/Plus/Plus.svg"
import styled from "styled-components"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import Heading from "ant/Heading"
import MarketingCalendar from "./Calendar"
import PlusButton from "../../../ant/PlusButton"
import BookProduct from "../../../components/BookProduct"
import axios from "axios"

const { Option } = Select
export default function Feature({ setActiveComp }) {
    const [selectedDay, setSelectedDay] = useState(null)


    const [products, setProducts]  = useState([]);

    const handleChange = async (event) => {

        const value = event.target.value;
        const res = await axios.get('http://localhost:8080/api/products?search='+value);
        if(res){
            setProducts(res.data.data)
        }

    }

    usePage("Feature Product")
    return (
        <Container>
            <div>
                <TopBar
                    breadcrumb={{
                        Marketing: () => setActiveComp("marketing"),
                        "Feature Product": () => {},
                    }}
                />

                <Row
                    style={{
                        minWidth: "1092px",
                        marginTop: "50px",
                        marginBottom: "60px",
                    }}>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                        span={10}>
                        <Button
                            icon={
                                <LeftArrow
                                    style={{
                                        marginRight: "5px",
                                    }}
                                    stroke='#D4D4D8'
                                />
                            }
                            type='secondary'
                            onClick={() => setActiveComp("marketing")}
                            style={{
                                fontSize: "16px",
                                width: "87px",
                                height: "56px",
                                color: "#E4E4E7",
                            }}>
                            Back
                        </Button>
                    </Col>
                    <Col
                        style={{
                            marginLeft: "20px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        span={12}>
                        <Heading
                            style={{ marginRight: "35px" }}
                            size='24px'
                            weight={theme.font.weight.semiBold}>
                            Select Location:
                        </Heading>
                        <Select
                            defaultValue={"lorem ipsum"}
                            suffixIcon={<DownArrowIcon />}>
                            <Option>zain</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            marginBottom: "20px",
                        }}
                        span={10}>
                        <MarketingCalendar />
                    </Col>
                    <Col style={{ marginLeft: "20px" }}>
                        <FiltersBar
                            placeHolder='Search Product For Feature'
                            Width='536px'
                            onSearchChange={handleChange}
                        />
                        {products?products.map(function(p){
                            return (
                                <>
                                    <BookProduct id={p.id} image={p.images?p.images[0]:''} name={p.name?p.name:''} price={p.price?p.price:''}/>
                                </>
                            )
                        }):'null'}
                    </Col>
                </Row>
                <Row
                    style={{
                        marginBottom: "30px",
                    }}>
                    <Col span={24}>
                        <Button
                            icon={
                                <ColorSvg color='primary'>
                                    <PlusIcon
                                        style={{
                                            marginRight: "18px",
                                        }}
                                    />
                                </ColorSvg>
                            }
                            type='secondary'>
                            Feature Another Product
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginBottom: "60px",
                    }}>
                    <Col span={6}>
                        <Button type='primary'>Save</Button>
                    </Col>
                </Row>
            </div>
            <div></div>
        </Container>
    )
}
const P = styled.p`
    font-size: 16px;

    color: #34d399;
`
