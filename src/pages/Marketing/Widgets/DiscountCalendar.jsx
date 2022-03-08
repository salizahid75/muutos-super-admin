import WidgetBox from "components/WidgetBox"
import MultiDateCalendar from "../../../components/MultiDateCalendar"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { useState } from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import { DragButton } from "ant"
import { utils } from "react-modern-calendar-datepicker"
import { Button, Select, Input, Checkbox, Alert, ColorSvg } from "ant"
import theme from "styles/Theme"
import Heading from "ant/Heading"
import {Calendar} from "react-modern-calendar-datepicker"
import { ReactComponent as Cross } from "assets/icons/Close/Close-1.svg"
import "react-circular-progressbar/dist/styles.css"
import { buildStyles } from "react-circular-progressbar"
import CircularBar from "../../../components/CircularBar"
import axios from "axios"
export default function DiscountCalendar({ firstDay, onHide }) {
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

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });
    console.log(selectedDayRange)

      const handleSubmit = async (event) =>{

          let title = document.getElementById('discount-event').value;
          let coupon = document.getElementById('discount-coupon').value;
          let products = [].filter.call(document.getElementsByName('products[]'), (c) => c.checked).map(c => c.value);
          let services = [].filter.call(document.getElementsByName('services[]'), (c) => c.checked).map(c => c.value);
          let startingFrom = selectedDayRange.from.month+'/'+selectedDayRange.from.day+'/'+selectedDayRange.from.year;
          let endingAt = selectedDayRange.to.month+'/'+selectedDayRange.to.day+'/'+selectedDayRange.to.year;

          const data = {
            title:title,
            coupon:coupon,
            products:products,
            services:services,
            startingFrom:startingFrom,
            endingAt:endingAt,
            discountPercentage:10
          }
          const formData = new FormData()
          for (const prop in data) {
            formData.append(prop, data[prop])
          }
          const res = await axios.post('http://localhost:8080/api/discount', formData);
          if(res){
              window.location.reload()
          }
      }
    return (
        <Wrapper>
            <HeadingWrapper>
                <h1>Add Discount</h1>
                <DragButton onClick={onHide} icon={<Cross />} />
            </HeadingWrapper>
            <Wrapper2>
                <Calendar
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    // shouldHighlightWeekends
                />
                <hr />
                <ShowDate>
                </ShowDate>
                <Input
                    type='text'
                    placeHolder={"Enter Event Name"}
                    style={{
                        border: "1px solid #3F3F46",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        color: "#D4D4D8",
                    }}
                    id="discount-event"
                />
                <Input
                    placeHolder={"Coupon Code"}
                    style={{
                        border: "1px solid #3F3F46",
                        borderRadius: "12px",
                        color: "#F4F4F5",
                        marginBottom: "32px",
                    }}
                    id="discount-coupon"
                />

                <Row style={{ maxWidth: "1092px" }}>
                    <Heading
                        size='24px'
                        weight={theme.font.weight.semiBold}
                        style={{
                            width: "100%",
                            marginBottom: "15px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        Products
                        <Checkbox></Checkbox>
                    </Heading>
                    <Row gutter={38}>
                        <Col
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <Checkbox name="products[]" value="Shoes"
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}>
                                Shoes
                            </Checkbox>
                            <Checkbox name="products[]" value="Top"
                                style={{
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}>
                                Top
                            </Checkbox>
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <Checkbox name="products[]" value="Bottom"
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}>
                                Bottom
                            </Checkbox>
                            <Checkbox name="products[]" value="Accessories"
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}>
                                Accessories
                            </Checkbox>
                        </Col>
                    </Row>
                    <Col span={12}></Col>
                </Row>
                <Row style={{ maxWidth: "1092px" }}>
                    <Heading
                        size='24px'
                        weight={theme.font.weight.semiBold}
                        style={{
                            width: "100%",
                            marginBottom: "15px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        Services
                        <Checkbox></Checkbox>
                    </Heading>
                    <Col span={12}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <Checkbox name="services[]" value="Gym"
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}
                                // onChange={e =>
                                //     set.workingHours([
                                //         "work-sat",
                                //         e.target.checked,
                                //     ])
                                // }
                                // >
                            >
                                Gym
                            </Checkbox>
                            <Checkbox name="services[]" value={"Spa & Saloon"}
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}
                                // onChange={e =>
                                //     set.workingHours([
                                //         "work-sun",
                                //         e.target.checked,
                                //     ])
                                // }
                            >
                                {"Salon & Spa"}
                            </Checkbox>
                            <Checkbox name="services" value="Dental"
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}>
                                Dental
                            </Checkbox>
                            <Checkbox name="services" value="Recreation"
                                style={{
                                    marginBottom: "25px",
                                    fontSize: "16px",
                                    color: "#D4D4D8",
                                }}
                                // onChange={e =>
                                //     set.workingHours([
                                //         "work-tue",
                                //         e.target.checked,
                                //     ])
                                // }
                            >
                                Recreation
                            </Checkbox>
                        </div>
                    </Col>
                    <Button type='primary' onClick={handleSubmit}>Add Discount</Button>
                    <Col span={12}></Col>
                </Row>
            </Wrapper2>
        </Wrapper>
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
