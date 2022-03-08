import LineChartComp from "../../../components/LineChart"
import { Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import styled from "styled-components"
export default function LineChartWideget() {
    const data = [
        {
            name: "Jan",
            uv: 4000,
            uv2: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Feb",
            uv: 3000,
            uv2: 4000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Mar",
            uv: 2000,
            uv2: 3000,

            pv: 9800,
            amt: 2290,
        },
        {
            name: "Apr",
            uv: 2780,
            uv2: 4000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "May",
            uv: 1890,
            uv2: 6000,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Jun",
            uv: 2390,
            pv: 3800,
            uv2: 1200,
            amt: 2500,
        },
        {
            name: "Jul",
            uv: 3490,
            uv2: 5000,
            pv: 4300,
            amt: 2100,
        },
        {
            name: "Aug",
            uv: 4000,
            uv2: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Sep",
            uv: 3000,
            uv2: 4000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Oct",
            uv: 2000,
            uv2: 3000,

            pv: 9800,
            amt: 2290,
        },
        {
            name: "Nov",
            uv: 2780,
            uv2: 4000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Dec",
            uv: 1890,
            uv2: 6000,
            pv: 4800,
            amt: 2181,
        },
    ]
    return (
        <Wrapper>
            <HeadingWrapper>
                {" "}
                <h1>Sales By Genders</h1>
                <Content>
                    <Content>
                        <Box
                            boxColor={"assetBlue"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <p>Men</p>
                    </Content>
                    <Content>
                        <Box
                            boxColor={"assetPink"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <p>Women</p>
                    </Content>
                    <Content>
                        <Box
                            boxColor={"assetSun"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <p>Kid</p>
                    </Content>
                </Content>
            </HeadingWrapper>
            <ChildrenWrapper>
                <YAXIS>
                    <h3>QAR 1200</h3> <h3>QAR 1000</h3> <h3>QAR 800</h3>{" "}
                    <h3>QAR 400</h3> <h3>QAR 200</h3> <h3>QAR 100</h3>
                </YAXIS>{" "}
                <ResponsiveContainer width='100%' height={500}>
                    <LineChartComp
                        data={data}
                        margin={{
                            top: 5,
                            right: 40,
                            left: 20,
                            bottom: 5,
                        }}>
                        <XAxis dataKey='name' />

                        <Line
                            dot={null}
                            type='monotone'
                            dataKey='pv'
                            stroke='#75A6D7'
                        />

                        <Line
                            dot={null}
                            type='monotone'
                            dataKey='uv'
                            stroke='#F2C0E9'
                        />
                        <Line
                            dot={null}
                            type='monotone'
                            dataKey='uv'
                            stroke='#F2C0E9'
                        />
                        <Line
                            dot={null}
                            type='monotone'
                            dataKey='uv2'
                            stroke='#FAF7B8'
                        />
                    </LineChartComp>
                </ResponsiveContainer>
            </ChildrenWrapper>
        </Wrapper>
    )
}
const YAXIS = styled.div`
    h3 {
        margin: 0;
        font-size: 12px;
        width: max-content;
        margin-bottom: 70px;

        color: #71717a;
    }
`
const Box = styled.div`
    height: 12px;
    width: 12px;
    background: ${p => p.theme.colors[p.boxColor]};
    border-radius: 4px;
`

const Row = styled.div``
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
        margin-right: 20px;
        font-size: 14px;
        color: ${p => p.theme.colors.gray50};
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
    justify-content: space-between;
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

const ChildrenWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
