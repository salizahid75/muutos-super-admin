import WidgetBox from "components/WidgetBox"
import MultiDateCalendar from "../../../components/MultiDateCalendar"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { useState } from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import { utils } from "react-modern-calendar-datepicker"

import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import theme from "styles/Theme"
import Heading from "ant/Heading"

export default function DiscountCalendar({ firstDay }) {
    const [discount, setDiscount] = useState("")
    const [coupen, setCoupen] = useState("")
    const defaultFrom = {
        year: 2021,
        month: 10,
        day: 6,
    }
    const defaultTo = {
        year: 2021,
        month: 10,
        day: 10,
    }
    const defaultValue = {
        from: defaultFrom,
        to: defaultTo,
    }

    const [selectedDayRange, setSelectedDayRange] = useState(defaultValue)

    console.log(selectedDayRange)

    return (
        <WidgetBox heading={"Calendar"}>
            <Wrapper>
                <MultiDateCalendar
                    minimumDate={utils().getToday()}
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    colorPrimary='#34D399'
                    calendarRangeBetweenClassName='-selectedBetween -selected'
                />

                <hr />
                <ShowDate>
                    {selectedDayRange.from ? (
                        <p>
                            {selectedDayRange.from.day}th{" "}
                            {selectedDayRange.from.month}{" "}
                            {selectedDayRange.from.year}
                        </p>
                    ) : (
                        <p>-</p>
                    )}
                    <span>To</span>
                    {selectedDayRange.to ? (
                        <p>
                            {selectedDayRange.to.day}th{" "}
                            {selectedDayRange.to.month}{" "}
                            {selectedDayRange.to.year}
                        </p>
                    ) : (
                        <p>-</p>
                    )}
                </ShowDate>
                <Col span={12}>
                    <InputBar>
                        <Input
                            type='primary'
                            placeholder='Discount'
                            onChange={e => setDiscount(e.target.value)}
                        />
                    </InputBar>
                    <InputBar>
                        <Input
                            type='primary'
                            placeholder='Coupon Code'
                            onChange={e => setCoupen(e.target.value)}
                        />
                    </InputBar>
                </Col>
                <Row
                    gutter={20}
                    style={{ maxWidth: "1092px", marginBottom: "60px" }}>
                    <Row span={12}>
                        <MainFlex>
                            <Heading
                                style={{ marginBottom: "30px" }}
                                size='24px'
                                weight={theme.font.weight.semiBold}>
                                Products
                            </Heading>

                            <Flex
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "Wrap",
                                }}>
                                <Checkbox
                                    style={{ marginBottom: "20px" }}
                                    // onChange={e =>
                                    //     set.workingHours(["sat", e.target.checked])
                                    // }
                                >
                                    Shoes
                                </Checkbox>
                                <Move>
                                    <Checkbox
                                        style={{
                                            marginBottom: "20px",
                                        }}>
                                        Top
                                    </Checkbox>
                                </Move>
                            </Flex>
                            <Flex>
                                <Checkbox>Bottom</Checkbox>
                                <Move>
                                    <Checkbox>Accessories</Checkbox>
                                </Move>
                            </Flex>
                        </MainFlex>
                    </Row>
                    <Col span={12}></Col>
                </Row>
                <Row
                    gutter={20}
                    style={{ maxWidth: "1092px", marginBottom: "60px" }}>
                    <Col span={12}>
                        <Heading
                            style={{ marginBottom: "30px" }}
                            size='24px'
                            weight={theme.font.weight.semiBold}>
                            Services
                        </Heading>

                        <Checkbox style={{ marginBottom: "20px" }}>
                            Gym
                        </Checkbox>

                        <Checkbox
                            style={{
                                marginBottom: "20px",
                            }}>
                            {" Salon & Spa"}
                        </Checkbox>

                        <Checkbox style={{ marginBottom: "20px" }}>
                            Dental
                        </Checkbox>

                        <Checkbox>Recreation</Checkbox>
                    </Col>
                </Row>
                <Button type='primary'>Add Discount</Button>
            </Wrapper>
        </WidgetBox>
    )
}
const InputBar = styled.div`
    width: 372px;
    border: 1px solid #3f3f46;
    margin-bottom: 16px;
    border-radius: 12px;
`
const Move = styled.div`
    margin-left: 38px;
`
const Wrapper = styled.div`
    hr {
        border: 2px solid ${p => p.theme.colors.gray700};
        opacity: 0.5;
        height: 0;
    }
`
const MainFlex = styled.div`
    margin-left: 13px;
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
const ShowDate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
        margin-top: none;
        font-size: 16px;
        color: ${p => p.theme.colors.gray100};
    }
    span {
        margin-bottom: 10px;
        font-size: 16px;
        text-align: center;
        color: ${p => p.theme.colors.primary};
    }
`
