import { Heading, Button } from "ant"
import { ReactComponent as VectorIcon } from "assets/icons/Vector.svg"
import { ReactComponent as DownArrowIcon } from "assets/icons/Chevron/DownArrow.svg"
import Container from "components/Container"
import styled from "styled-components"
import AdminCharges from "../Widgets/AdminCharges"
import { BLOCK_SCOPED_SYMBOL } from "@babel/types"
import CircularBar from "../../../components/CircularBar"
import "react-circular-progressbar/dist/styles.css"
import { buildStyles } from "react-circular-progressbar"
import FinanceCalendar from "../Widgets/FinanceCalendar"

export default function DataTable({ setActiveComp }) {
    const background = "#3F3F46"
    const colors = ["#ABEDE6", "#F2C0E9", "#FAF7B8", "#75A6D7"]
    return (
        <Container>
            <div>
                <Heading>Finance</Heading>
                <Button
               
                    type='secondary'
                    onClick={() => setActiveComp("payback")}
                    style={{ marginLeft: "auto", width: "195px" }}>
                    Orders Payback
                </Button>
                <br />
                <Grid>
                    <div className='finance-grid__order_contents'>
                        <Graph>
                            <div>
                                <h3>Sales</h3>
                                <p>Total Sales Today</p>
                                <h1>QAR 4822</h1>
                            </div>
                            <CircularBar
                                value={65}
                                text={"65%"}
                                styles={buildStyles({
                                    rotation: 0.25,

                                    strokeLinecap: "round",

                                    textSize: "12px",

                                    pathColor: colors[0],
                                    textColor: colors[0],
                                    trailColor: background,
                                })}
                            />
                        </Graph>
                    </div>
                    <div className='finance-grid__order_contents'>
                        <Graph>
                            <div>
                                {" "}
                                <h3>Profit</h3>
                                <p>Per Day Ratio</p>
                                <h1>QAR 650</h1>
                            </div>{" "}
                            <CircularBar
                                value={30}
                                text={"30%"}
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
                    </div>

                    <div className='finance-grid__order_contents'>
                        <Graph>
                            <div>
                                {" "}
                                <h3>Orders</h3>
                                <p>Total Order Today</p>
                                <h1>QAR 2600</h1>
                            </div>{" "}
                            <CircularBar
                                value={45}
                                text={"45%"}
                                styles={buildStyles({
                                    rotation: 0.25,

                                    strokeLinecap: "round",

                                    textSize: "12px",
                                    borderRadius: "3px",
                                    pathColor: colors[2],
                                    textColor: colors[2],

                                    trailColor: background,
                                })}
                            />
                        </Graph>
                    </div>
                    <div className='finance-grid__order_contents'>
                        <Graph>
                            <div>
                                {" "}
                                <h3>Visits</h3>
                                <p>Total Visits Today</p>
                                <h1>QAR 2400</h1>
                            </div>{" "}
                            <CircularBar
                                value={80}
                                text={"80%"}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: "round",

                                    textSize: "12px",

                                    pathColor: colors[3],
                                    textColor: colors[3],

                                    trailColor: background,
                                })}
                            />
                        </Graph>
                    </div>
                </Grid>
                <Grid2>
                    <div className='finance-grid2__order_contents'>
                        <h3>Pending Transaction</h3>
                        <MainFlex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                            </Flex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                            </Flex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>

                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                            </Flex>
                        </MainFlex>
                        <ViewMore>
                            <p>View More</p>
                            <DownArrowIcon style={{ marginTop: "10px" }} />
                        </ViewMore>
                    </div>
                    <div className='finance-grid2__order_contents'>
                        <h3>Payments History</h3>
                        <MainFlex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Complete>Completed</Complete>
                            </Flex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Complete>Completed</Complete>
                            </Flex>
                            <Flex>
                                <VectorIcon />
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>

                                <Complete>Completed</Complete>
                            </Flex>
                        </MainFlex>
                        <ViewMore>
                            <p>View More</p>
                            <DownArrowIcon style={{ marginTop: "10px" }} />
                        </ViewMore>
                    </div>
                </Grid2>
                <Grid3>
                    <div className='finance-grid3__order_contents'>
                        <h3>Staff Expenses</h3>
                        <h1>
                            QAR 4000 <span className='totalSign'>(Total)</span>
                        </h1>
                        <MainFlex>
                            <Flex style={{ marginTop: "32px" }}>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                            </Flex>
                            <Flex style={{ marginTop: "32px" }}>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                            </Flex>
                            <Flex
                                style={{
                                    marginTop: "32px",
                                    marginBottom: "24px",
                                }}>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>

                                <Button
                                    type='secondary'
                                    style={{
                                        width: "99px",
                                    }}>
                                    Paid
                                </Button>
                                <ImageWrapper>
                                    <img src='https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg' />
                                </ImageWrapper>
                                <SubFLex>
                                    <span>Google Ads</span>{" "}
                                    <Date>22 Aug 2021</Date>
                                </SubFLex>
                                <Price>QAR 500</Price>

                                <Complete>Completed</Complete>
                            </Flex>
                        </MainFlex>
                        <ViewMore>
                            <p>View More</p>
                            <DownArrowIcon style={{ marginTop: "10px" }} />
                        </ViewMore>
                    </div>
                </Grid3>
            </div>
            <div>
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                <AdminCharges />
                <FinanceCalendar />
            </div>
        </Container>
    )
}
const Graph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ImageWrapper = styled.div`
    width: 64px;
    height: 64px;
    img {
        width: 100%;
        border-radius: 16px;
    }
`
const ViewMore = styled.div`
    display: flex;
    flex-direction: row;

    margin: auto;
    p {
        font-weight: normal;
        font-size: 16px;
        color: ${p => p.theme.colors.gray600};
        margin-right: 19px;
    }
`
const Complete = styled.p`
    margin-top: 20px;
    font-weight: normal;
    font-size: 16px;
    color: ${p => p.theme.colors.gray500} !important;
    text-align: center;
`

const MainFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Price = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${p => p.theme.colors.gray100} !important;
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const SubFLex = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-weight: 600;
        font-size: 20px;
        color: ${p => p.theme.colors.gray100};
    }
`

const Date = styled.p`
    font-weight: normal;
    font-size: 14px;
    color: ${p => p.theme.colors.gray500};
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.colors.gray300};
    }
    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 32px;
        color: #ffffff;
    }
    p {
        font-size: 14px;
        color: ${p => p.theme.colors.gray600};
    }
    .finance-grid__order_contents {
        padding: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 154px;
        background: ${p => p.theme.colors.gray800};
        border-radius: 8px;
    }

    margin-bottom: 40px;
`
const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.colors.gray300};
        margin-bottom: 32px;
    }
    .finance-grid2__order_contents {
        padding: 22px;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;

        width: 100%;

        background: ${p => p.theme.colors.gray800};
        border-radius: 8px;
    }
    margin-bottom: 20px;
`
const SubGrid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Grid3 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        color: ${p => p.theme.colors.gray300};
        margin-bottom: 32px;
    }
    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 32px;
        color: #ffffff;
    }

    .finance-grid3__order_contents {
        padding: 22px;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;

        width: 100%;

        background: ${p => p.theme.colors.gray800};
        border-radius: 8px;
    }
    .totalSign {
        font-size: 14px;
        color: ${p => p.theme.colors.gray500};
    }
    margin-bottom: 20px;
`
