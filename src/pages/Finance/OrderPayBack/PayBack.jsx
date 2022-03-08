import usePage from "hooks/usePage"
import Container from "components/Container"
import { useState } from "react"

import FiltersBar from "components/FiltersBar"

import TopBar from "components/TopBar"
import ColorPicker from "components/ColorPicker"
import { validateFloatInput, validateNumberInput } from "utils"

import { Row, Col, AutoComplete } from "antd"
import Heading from "ant/Heading"
import { TextArea } from "ant/Input"
import theme from "styles/Theme"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import styled from "styled-components"

import Details from "components/Details"
export default function PayBack({ setActiveComp }) {
    usePage("Orders Payback")
    const [active, setActive] = useState(0)
    const data = [
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name  Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name  Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            dateOfCencelation: "23 Aug 2021",
            hours: "9AM to 9PM",
            workingStatus: 1,
            price: "QAR 1500",
            edit: 1,
        },
    ]

    return (
        <Container>
            <div>
                <TopBar
                    breadcrumb={{
                        Finance: () => setActiveComp("finance"),
                        "Orders PayBack": () => {},
                    }}
                    activeItem={active}
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
                <Row
                    style={{
                        marginTop: "50px",
                        marginBottom: "60px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Button
                        type='secondary'
                        onClick={() => setActiveComp("finance")}
                        style={{
                            width: "87px",
                            height: "56px",
                            color: "#E4E4E7",
                        }}>
                        Back
                    </Button>

                    <FiltersBar
                        sortBy={{
                            defaultValue: "All",
                            onChange: f => console.log(f),
                            filters: ["All", "New", "Old"],
                        }}
                    />
                </Row>

                <Row
                    style={{
                        marginTop: "50px",
                    }}>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                        span={12}></Col>
                </Row>

                {/* <OrderDetails/>
                       
                       */}

                <Col
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                    span={12}></Col>

                <Details data={data} />
            </div>
            <div></div>
        </Container>
    )
}
const SubFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-direction: space-between;
`
const Content = styled.p`
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;

    color: ${p => p.theme.colors.gray300};
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
