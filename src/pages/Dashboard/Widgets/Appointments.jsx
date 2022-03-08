import WidgetBox from "components/WidgetBox"
import { useState } from "react"
import { Timeline } from "antd"
import ColorSvg from "ant/ColorSvg"

import { ReactComponent as DownArrowIcon } from "assets/icons/Chevron/DownArrow.svg"
import { ReactComponent as CloseIcon } from "assets/icons/Close/Close-1.svg"
import { ReactComponent as CheckMark } from "assets/icons/Checkmark/Checkmark.svg"
import styled from "styled-components"
export default function Appointments() {
    const [mode, setMode] = useState("left")

    const onChange = e => {
        setMode(e.target.value)
    }
    return (
        <WidgetBox style={{ marginBottom: "0px" }} heading='Appointments'>
            <MainFlex>
                <Flex style={{ marginTop: "4px" }}>
                    <FlexCol>
                        <FlexRow id='#one'>
                            <P id='one' pColor={"gray700"}>
                                12:00
                            </P>

                            <Box boxColor={"gray700"}></Box>
                        </FlexRow>
                        <Hr class='one'></Hr>
                    </FlexCol>
                    <FlexCol>
                        <FlexRow>
                            <P id='one' pColor={"primary"}>
                                13:00
                            </P>

                            <Box boxColor={"primary"}></Box>
                        </FlexRow>
                        <Hr id='two'></Hr>
                    </FlexCol>

                    <FlexCol>
                        <FlexRow>
                            <P id='one' pColor={"gray300"}>
                                14:00
                            </P>

                            <Box boxColor={"gray300"}></Box>
                        </FlexRow>
                        <Hr
                            style={{
                                width: "122px",
                                marginTop: "55px",
                            }}></Hr>
                    </FlexCol>
                </Flex>
                <Flex>
                    <Content style={{ marginTop: "30px" }}>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"gray700"}></Box>

                                <P id='one' pColor={"gray700"}>
                                    12:00
                                </P>
                                <P id='one' pColor={"gray700"}>
                                    Kevin Heart
                                </P>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"gray700"}></Box>

                                <P id='one' pColor={"gray700"}>
                                    12:00
                                </P>
                                <P id='one' pColor={"gray700"}>
                                    Emma Watson
                                </P>
                            </FlexRow>
                        </FlexContent>
                    </Content>

                    <Content style={{ marginTop: "20px" }}>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"primary"}></Box>

                                <P id='one' style={{ color: "#FFFFFF" }}>
                                    13:00
                                </P>
                                <P id='one' style={{ color: "#FFFFFF" }}>
                                    Kevin Heart
                                </P>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"gray700"}></Box>

                                <P id='one' pColor={"gray300"}>
                                    12:00
                                </P>
                                <P id='one' pColor={"gray300"}>
                                    Emma Watson
                                </P>
                            </FlexRow>
                        </FlexContent>
                    </Content>

                    <Content style={{ marginTop: "20px" }}>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"gray700"}></Box>

                                <P id='one' pColor={"gray300"}>
                                    12:00
                                </P>
                                <P id='one' pColor={"gray300"}>
                                    Kevin Heart
                                </P>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <Box
                                    style={{ marginRight: "12px" }}
                                    boxColor={"gray700"}></Box>

                                <P id='one' pColor={"gray300"}>
                                    14:00
                                </P>
                                <P id='one' pColor={"gray300"}>
                                    Emma Watson
                                </P>
                            </FlexRow>
                        </FlexContent>
                    </Content>
                </Flex>
                <Flex style={{ marginLeft: "15px" }}>
                    <Content>
                        <FlexContent style={{ marginTop: "25px" }}>
                            <FlexRow>
                                <ColorSvg color='primary' opacity='0.5'>
                                    <CheckMark
                                        style={{ marginBotttom: "5px" }}
                                    />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <ColorSvg color='assetRed' opacity='0.5'>
                                    <CloseIcon />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                    </Content>

                    <Content style={{ marginLeft: "5px" }}>
                        <FlexContent
                            style={{
                                marginTop: "5px",
                                paddingBottom: "20px",
                            }}>
                            <FlexRow id='#one'>
                                <ColorSvg color='gray300'>
                                    <DownArrowIcon />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <ColorSvg color='gray300'>
                                    <DownArrowIcon />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                    </Content>

                    <Content style={{ marginTop: "5px", marginLeft: "5px" }}>
                        <FlexContent
                            style={{
                                paddingBottom: "20px",
                            }}>
                            <FlexRow id='#one'>
                                <ColorSvg color='gray300'>
                                    <DownArrowIcon />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                        <FlexContent>
                            <FlexRow id='#one'>
                                <ColorSvg color='gray300'>
                                    <DownArrowIcon />
                                </ColorSvg>
                            </FlexRow>
                        </FlexContent>
                    </Content>
                </Flex>
            </MainFlex>
        </WidgetBox>
    )
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: right;
`
const FlexIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
    h1 {
        font-size: 16px;
    }
`
const FlexContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    h1 {
        font-size: 16px;
    }
`
const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
    h1 {
        font-size: 16px;
    }
`
const MainFlex = styled.div`
    display: flex;
    flex-direction: row;
`
const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Hr = styled.hr`
    margin: 0;
    margin-top: 40px;

    width: 120px;
    transform: rotate(90deg);
    opacity: 0.5;
    /* Gray/700 */

    border: 1px solid #3f3f46;
`
const P = styled.div`
    margin: 0;
    font-size: 16px;
    color: ${p => p.theme.colors[p.pColor]};
    margin-right: 16px;
    #one {
    }
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`
const Box = styled.div`
    height: 12px;
    width: 12px;
    background: ${p => p.theme.colors[p.boxColor]};
    border-radius: 4px;
    z-index: 1;
`
