import styled from "styled-components"
import { Line, ResponsiveContainer } from "recharts"
import LineChartComp from "../../../components/LineChart"

export default function DemandWidget() {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]

    return (
        <Wrapper>
            <HeadingWrapper>
                <h1>Demand</h1>
                <Content>
                    <Content>
                        <Box
                            boxColor={"assetPink"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <P>Products</P>
                    </Content>

                    <Content>
                        <Box
                            boxColor={"assetBlue"}
                            style={{
                                marginRight: "16px",
                                marginTop: "5px",
                            }}></Box>

                        <P>Services</P>
                    </Content>
                </Content>
            </HeadingWrapper>
            <ChildrenWrapper>
                <ResponsiveContainer width='95%' height={80}>
                    <LineChartComp width='100%' height={100} data={data}>
                        <Line dot={null} dataKey='pv' stroke='#75A6D7' />

                        <Line dot={null} dataKey='uv' stroke='#F2C0E9' />
                    </LineChartComp>
                </ResponsiveContainer>
            </ChildrenWrapper>
        </Wrapper>
    )
}
const P =styled.div`
 margin-right: 20px;
font-size: 14px;
color: ${p => p.theme.colors.gray50};`;
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
    
`
const Wrapper = styled.div`
    width: 100%;

    border-radius: 10px;
    background: ${p => p.theme.colors.gray800};
`

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    & > div {
        margin-left: auto;
    }

    > h1 {
        margin: 0;
        font-size: 24px;
        margin-left:24px;
        font-weight: ${p => p.theme.font.weight.semiBold};
        color: ${p => p.theme.colors.gray300};
    }
`

const ChildrenWrapper = styled.div`
margin-left:24px;`
