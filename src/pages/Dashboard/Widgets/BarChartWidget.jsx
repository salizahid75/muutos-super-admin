import styled from "styled-components"
import { Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

import WidgetBox from "components/WidgetBox"
import BarChartComp from "../../../components/BarChart"

export default function BarChartWidget() {
    const data = [
        {
            name: "Jan",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Feb",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Mar",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Apr",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "May",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Jun",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Jul",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: "Aug",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Sep",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Oct",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Nov",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Dec",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
    ]
    const label = ["2000 QAR", "2000 QAR", "2000 QAR"]
    return (
        <Wrapper>
            <HeadingWrapper style={{ marginBottom: "40px" }}>
                <h1>Orders</h1>
                <Content>
                    <Content>
                        <Box
                            boxColor={"assetTeal"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <p>Products</p>
                    </Content>

                    <Content>
                        <Box
                            boxColor={"assetSun"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <p>Services</p>
                    </Content>
                </Content>
            </HeadingWrapper>
            <ChildrenWrapper>
                <YAXIS>
                    <h3> 1200</h3> <h3> 1000</h3> <h3> 800</h3>{" "}
                    <h3> 400</h3> <h3> 200</h3> <h3> 100</h3>
                </YAXIS>{" "}
                <ResponsiveContainer width='100%' height={500}>
                    <BarChartComp
                        width={1200}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <XAxis dataKey='name' />
                        {/* <YAxis  tickFormatter={
                            (label=0) => ` ${label+200}`}/> */}

                        <Bar
                            dataKey='pv'
                            fill='#ABEDE6'
                            barSize={14}
                            radius={[4, 4, 4, 4]}
                        />
                        <Bar
                            dataKey='uv'
                            fill='#FAF7B8'
                            barSize={14}
                            radius={[4, 4, 4, 4]}
                        />
                    </BarChartComp>
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

        /* Gray/500 */

        color: #71717a;
    }
`
const Box = styled.div`
    height: 12px;
    width: 12px;
    background: ${p => p.theme.colors[p.boxColor]};
    border-radius: 4px;
`

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

const ChildrenWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
