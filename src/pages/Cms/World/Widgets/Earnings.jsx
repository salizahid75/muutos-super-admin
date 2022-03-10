import styled from "styled-components"

import WidgetBox from "components/WidgetBox"

import { LineChart, Line } from "recharts"

export default function Earnings() {
    // https://www.linkedin.com/pulse/create-waterfall-chart-recharts-4minutes-celia-ong will check
    const data = [
        {
            name: "Page A",
            uv: 0,
            pv: 2400,
            amt: 1000,
        },
        {
            name: "Page B",
            uv: 2000,
            pv: -400,
            amt: 1000,
        },
        {
            name: "Page C",
            uv: 1200,
            pv: -400,
            amt: 1000,
        },
        {
            name: "Page D",
            uv: 1500,
            pv: 2000,
            amt: 1000,
        },
        {
            name: "Page E",
            uv: 2000,
            pv: 800,
            amt: 1000,
        },
        {
            name: "Page F",
            uv: 2000,
            pv: 3000,
            amt: 1000,
        },
        {
            name: "Page G",
            uv: 2000,
            pv: 4300,
            amt: 1000,
        },
    ]

    return (
        <WidgetBox heading='Services Earnings'>
            <Wrapper>
                <Content>
                    <PriceWrapper>
                        <h2>$5024 </h2>
                        <p>Overall</p>
                    </PriceWrapper>
                    <Chart>
                        <LineChart width={300} height={100} data={data}>
                            <Line
                                height={100}
                                type='monotone'
                                dataKey='uv'
                                stroke='#FAF7B8'
                                dot={false}
                                strokeWidth={6}
                                strokeLinecap='round'
                            />
                        </LineChart>
                    </Chart>
                </Content>
            </Wrapper>
        </WidgetBox>
    )
}
const Chart = styled.div`
    margin-left: 30px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
`

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        color: #ffffff;
        font-weight: 600;
        font-size: 32px;
        text-align: left;
        margin-bottom: 0;
    }
    p {
        color: ${p => p.theme.colors.gray600};
        font-weight: normal;
        font-size: 14px;
        text-align: left;
    }
`
