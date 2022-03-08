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

import "react-circular-progressbar/dist/styles.css"
import { buildStyles } from "react-circular-progressbar"
import CircularBar from "../../../components/CircularBar"
export default function FinanceCalendar({ firstDay }) {
    const background = "#3F3F46"
    const colors = ["#F2C0E9", "#ABEDE6", "#FAF7B8"]
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

                <Graph style={{ marginTop: "50px", marginBottom: "32px" }}>
                    <div>
                        <h3>Revenue</h3>
                        <p>Total Generated</p>
                        <h1>QAR 2600</h1>
                    </div>

                    <CircularBar
                        value={75}
                        text={"75%"}
                        styles={buildStyles({
                            rotation: 0.25,
                            marginBottom: "32px",
                            strokeLinecap: "round",

                            textSize: "12px",

                            pathColor: colors[0],
                            textColor: colors[0],
                            trailColor: background,
                        })}
                    />
                </Graph>
                <Graph style={{ marginBottom: "32px" }}>
                    <div>
                        <h3>Cost</h3>
                        <p>Total Spend</p>
                        <h1>QAR 1650</h1>
                    </div>

                    <CircularBar
                        value={35}
                        text={"35%"}
                        styles={buildStyles({
                            rotation: 0.25,

                            strokeLinecap: "round",

                            textSize: "12px",

                            pathColor: colors[1],
                            textColor: colors[1],
                            trailColor: background,
                        })}
                    />
                </Graph>
                <Graph style={{ marginBottom: "28px" }}>
                    <div>
                        <h3>Products</h3>
                        <p>Total Sold</p>
                        <h1>1385</h1>
                    </div>

                    <CircularBar
                        value={55}
                        text={"55%"}
                        styles={buildStyles({
                            rotation: 0.25,

                            strokeLinecap: "round",

                            textSize: "12px",

                            pathColor: colors[2],
                            textColor: colors[2],
                            trailColor: background,
                        })}
                    />
                </Graph>
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
