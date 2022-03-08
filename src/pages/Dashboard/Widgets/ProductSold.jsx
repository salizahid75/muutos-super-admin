import { Pie, Cell } from "recharts"

import WidgetBox from "components/WidgetBox"
import ProductSoldPieChart from "../../../components/ProductSoldPieChart"
import styled from "styled-components"
import { Label } from "ant"

export default function SoldProducts() {
    const data = [
        { name: "Group A", value: 10 },
        { name: "Group B", value: 120 },
        { name: "Group C", value: 25 },
        { name: "Group D", value: 150 },
        { name: "Group E", value: 150 },
    ]
    const COLORS = ["#75A6D7", "#ABEDE6", "#E0766C", "#F2C0E9", "#3F3F46"]
    const categories = { shoes: 40, tops: 20, bottoms: 5, accessories: 5 }
    const colors = ["pink", "yellow", "red", "blue"]

    return (
        <WidgetBox heading='Products Sold'>
            <LabelsWrapper>
                {Object.keys(categories).map((c, index) => (
                    <Label color={colors[index]}>
                        {c[0].toUpperCase() + c.slice(1)}
                    </Label>
                ))}
            </LabelsWrapper>
            {/* <SoldPercentWrapper>
            <div className="SoldProducts-percent">
                <h3>70%</h3>
                <p>Sold</p>
            </div>
            </SoldPercentWrapper> */}
            <ChartWrapper>
                <ProductSoldPieChart width={300} height={200}>
                    <Pie
                        stroke='none'
                        data={data}
                        cx={150}
                        cy={100}
                        innerRadius={60}
                        cornerRadius={3}
                        border={0}
                        outerRadius={85}
                        fill='#8884d8'
                        paddingAngle={2}
                        dataKey='value'>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </ProductSoldPieChart>
                <Text>
                    <h3>70%</h3>
                    <h4>Sold</h4>
                </Text>
            </ChartWrapper>
            <PercentWrapper>
                {Object.entries(categories).map(([cat, value]) => {
                    return (
                        <Percent>
                            <h1>{value}%</h1>
                            <p>{cat}</p>
                        </Percent>
                    )
                })}
            </PercentWrapper>
        </WidgetBox>
    )
}
const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.colors.gray50};
    }
    h4 {
        margin: 0;
        font-size: 16px;
        color: ${p => p.theme.colors.gray600};
    }
`
const ChartWrapper = styled.div`
    position: relative;
`
const LabelsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & > * {
        margin-right: 20px;
        margin-bottom: 12px;
    }
`
const SoldPercentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    h3 {
        color: ${p => p.theme.colors.gray50};
        font-weight: 600;
        font-size: 24px;
    }
    p {
        color: ${p => p.theme.colors.gray600};
        font-size: 16px;
    }
`
const PercentWrapper = styled.div`
    margin-left: 18px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const Percent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    margin-right: 60px;
    margin-bottom: 15px;

    h1 {
        font-size: 30px;
        color: ${p => p.theme.colors.gray200};
        cont-weight: ${p => p.theme.colors.semiBold};
        margin: 0 !important;
    }

    p {
        text-transform: capitalize;
        font-size: 14px;
        color: ${p => p.theme.colors.gray600};
    }
`
