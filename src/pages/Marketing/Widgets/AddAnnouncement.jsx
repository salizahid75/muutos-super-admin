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
import { ReactComponent as Cross } from "assets/icons/Close/Close-1.svg"
import "react-circular-progressbar/dist/styles.css"
import { TextArea } from "../../../ant/Input"
import axios from "axios"

export default function AddAnnoucement({ onHide = null }) {
    return (
        <Wrapper>
            <HeadingWrapper>
                <h1>Add Announcement</h1>
                <DragButton onClick={onHide} icon={<Cross />} />
            </HeadingWrapper>
            <Wrapper2>
                <Input
                    type='text'
                    placeholder={"Title"}
                    id="title"
                    style={{
                        border: "1px solid #3F3F46",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        color: "#D4D4D8",
                    }}
                />

                <TextArea
                    id="description"
                    placeholder={"Maximum 400 Word Count Limit"}
                    style={{
                        border: "1px solid #3F3F46",
                        borderRadius: "12px",
                        color: "#F4F4F5",
                        marginBottom: "32px",
                        minHeight: "240px",
                    }}
                />

                <Row style={{ maxWidth: "1092px" }}>
                    <Button type='primary'
                        onClick={()=>{
                            var title = document.getElementById('title').value;
                            var description = document.getElementById('description').value;
                            var data = {
                                vendorId:localStorage.getItem('uid'),
                                title:title,
                                description:description
                            }
                            async function addAnnouncement(){
                                const createAnnouncement = await axios.post(`http://localhost:8080/api/announcement`, data);
                                if(createAnnouncement){
                                    window.location.reload()
                                }
                            }
                            addAnnouncement();
                        }}
                    >Add Announcement</Button>
                    <Col span={12}></Col>
                </Row>
            </Wrapper2>
        </Wrapper>
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

const ChildrenWrapper = styled.div``
