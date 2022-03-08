import WidgetBox from "components/WidgetBox"

import { useState } from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import { DragButton } from "ant"
import { utils } from "react-modern-calendar-datepicker"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import theme from "styles/Theme"
import Heading from "ant/Heading"
import { ReactComponent as Cross } from "assets/icons/Close/Close-1.svg"

import CalendarComp from "../../../components/Calendar"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
export default function MarketingCalendar({ firstDay, onHide }) {
    const background = "#3F3F46"
    const colors = ["#F2C0E9", "#ABEDE6", "#FAF7B8"]
    const [discount, setDiscount] = useState("")
    const [coupen, setCoupen] = useState("")
    const [selectedDay, setSelectedDay] = useState(null)
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
        <Wrapper>
            <HeadingWrapper>
                <h1>Calendar</h1>
            </HeadingWrapper>
            <Wrapper2>
                <CalendarComp
                    colorPrimary='none'
                    value={selectedDay}
                    onChange={setSelectedDay}
                    calendarRangeBetweenClassName='-selected'
                    customDaysClassName={[
                        {
                            year: 2021,
                            month: 10,
                            day: 9,
                            className: "-selected",
                        },
                        {
                            year: 2021,
                            month: 10,
                            day: 20,
                            className: "-selected",
                        },
                        {
                            year: 2021,
                            month: 10,
                            day: 25,
                            className: "-selected",
                        },
                        {
                            year: 2021,
                            month: 10,
                            day: 30,
                            className: "-selected",
                        },
                    ]}
                />
                {/* <MultiDateCalendar
                    minimumDate={utils().getToday()}
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    colorPrimary='#34D399'
                    calendarRangeBetweenClassName='-selectedBetween -selected'
                /> */}

                <hr />
                <ShowDate>
                    {/* {selectedDayRange.from ? (
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
                    )} */}
                </ShowDate>
                <Content>
                    <p
                        style={{
                            fontSize: "16px",

                            color: "#F4F4F5",
                        }}>
                        Status:
                        <span
                            style={{
                                fontSize: "16px",
                                color: "#34D399",
                                marginLeft: "16px",
                            }}>
                            -
                        </span>{" "}
                    </p>

                    <Input
                        type='text'
                        placeHolder={" Place Bid  "}
                        style={{
                            border: "1px solid #3F3F46",
                            borderRadius: "12px",

                            color: "#D4D4D8",
                        }}></Input>
                </Content>

                <Col span={12}></Col>
            </Wrapper2>
        </Wrapper>
    )
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputBar = styled.div`
    width: 372px;
    border: 1px solid #3f3f46;
    margin-bottom: 16px;
    border-radius: 12px;
`
const Move = styled.div`
    margin-left: 38px;
`
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
const MainFlex = styled.div`
    margin-left: 13px;
`
const Graph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
const ShowDate = styled.div`
    margin-top: 22px;
    margin-bottom: 22px;
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

const ChildrenWrapper = styled.div``
