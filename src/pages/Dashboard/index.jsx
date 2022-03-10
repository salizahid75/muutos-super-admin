import { Select } from "ant"
import usePage from "hooks/usePage"
import Container from "components/Container"
import TopBar from "components/TopBar"
import Heading from "ant/Heading"
import ProductSold from "./Widgets/ProductSold"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { useState } from "react"
import { ReactComponent as ArrowUpIcon } from "assets/icons/Arrow/Arrow 2/Up.svg"
import { ReactComponent as DollarIcon } from "assets/icons/Dollar.svg"
import ColorSvg from "ant/ColorSvg"
import Calendar from "./Widgets/Calendar"
import Appointments from "./Widgets/Appointments"
import BestService from "./Widgets/BestService"
import WorstService from "./Widgets/WorstService"
import styled from "styled-components"
import BestProducts from "./Widgets/BestProduct"
import WorstProducts from "./Widgets/WorstProduct"
import BarChartWidget from "./Widgets/BarChartWidget"
import LineChartWideget from "./Widgets/LineChartWidget"
import LineChartWidegetAdmin from "./Widgets/LineChartWidgetAdmin"
import DemandWidget from "./Widgets/DemandWidget"
import { useEffect } from "react"
import { ReactComponent as PercentIcon } from "assets/icons/Percent.svg"
import { ReactComponent as DownIcon } from "assets/icons/Chevron/DownArrow.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import { ReactComponent as CheckMarkIcon } from "assets/icons/Checkmark/Checkmark.svg"
import axios from "axios"
const { Option } = Select

export default function Dashboard() {

    const userRole = localStorage.getItem('muutos-u-role');
    const [UserRole, setUserRole] = useState('');
    useEffect(() => {
        if (userRole == 'admin') {
            setUserRole('admin');
        }
    }, []);
    const [hide, setHide] = useState(false)
    const [data, setData] = useState([]);
    const [today, setToday] = useState();
    useEffect(() => {
        async function getDiscounts() {
            const res = await axios.get('http://localhost:8080/api/allDiscounts');
            if (res) {
                setData(res.data.data);
                const tody = new Date();
                // const to =  tody.getDate()+'-'+(tody.getMonth()+1)+'-'+tody.getFullYear();
                console.log(tody)
                setToday(tody)
            }
        }
        getDiscounts();
    }, []);
    const [active, setActive] = useState(0)

    usePage("Dashboard")

    return (
        <>
            <Container>
                <>
                    <div>
                        <Grid>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content>
                                        {" "}
                                        <Head>Paid Revenue</Head>
                                        <Price>QAR 2700</Price>
                                        <IconWrapper>
                                            <ColorSvg color='assetTeal'>
                                                <ArrowUpIcon />{" "}
                                            </ColorSvg>
                                            <p style={{ marginRight: "30px" }}>
                                                <span>2.1%</span> vs Last Day
                                            </p>{" "}
                                        </IconWrapper>
                                    </Content>
                                </Graph>
                            </div>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content>
                                        {" "}
                                        <Head>Outstanding Revenue </Head>
                                        <Price>QAR 405</Price>
                                        <IconWrapper>
                                            <ColorSvg color='assetTeal'>
                                                <ArrowUpIcon />{" "}
                                            </ColorSvg>
                                            <p style={{ marginRight: "30px" }}>
                                                <span>3.1%</span> vs Last Day
                                            </p>{" "}
                                        </IconWrapper>
                                    </Content>
                                </Graph>
                            </div>
                            {/* <div className='dashboard-grid__order_contents'>
                                <DemandWidget />
                            </div> */}
                        </Grid>
                        <Services>
                            <BestProducts />
                            <p style={{ marginRight: "20px" }}></p> <BestService />
                        </Services>

                        <BarChartWidget />

                        <Services>
                            <WorstProducts />
                            <p style={{ marginRight: "20px" }}></p> <WorstService />
                        </Services>

                        <LineChartWidegetAdmin />
                        <div className="row" style={{ background: '#222225', margin: '0px', borderRadius: '10px', padding: '15px' }}>
                            <p
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    color: '#D4D4D8',
                                }}
                            >
                                Current Discount Campaign
                            </p>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                            <div className="col-md-6 p-1 d-flex">
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}
                                >
                                    <Flag>
                                        <ColorSvg color='primary'>
                                            <PercentIcon style={{ margin: "12px" }} />
                                        </ColorSvg>
                                    </Flag>
                                    <Content>
                                        {/* <h1>{value.title}</h1> */}
                                        <h1>Discount Title</h1>
                                        {/* <p>{value.startingFrom} to {value.endingAt}</p> */}
                                        <p>20 Aug 2021 to 5 Sept 2021</p>
                                    </Content>
                                </SubFlex>
                                <SubFlex
                                    style={{
                                        marginRight: "20px",
                                    }}>
                                    <Content>
                                        <h1
                                            style={{
                                                width: "max-content",
                                            }}>
                                            Expires In
                                        </h1>
                                        {/* <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p> */}
                                        <p>15 Days</p>
                                    </Content>
                                </SubFlex>
                            </div>
                        </div>
                        <br />
                        
                    </div>

                    <div>
                        <Heading
                            size='32px'
                            style={{ marginTop: "10px", marginBottom: "37px" }}>
                            Activity Widgets
                        </Heading>
                        <ProductSold />
                        <Grid style={{ display: 'block', width: '100%'}}>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content1>
                                        {" "}
                                        <Head>Approved Products</Head>
                                        <Price>650</Price>s
                                    </Content1>{" "}
                                </Graph>
                            </div>
                        </Grid>
                        <Grid style={{ display: 'block', width: '100%'}}>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content1>
                                        {" "}
                                        <Head>Pending Products</Head>
                                        <Price>652</Price>
                                    </Content1>{" "}
                                </Graph>
                            </div>
                        </Grid>
                        <Grid style={{ display: 'block', width: '100%'}}>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content1>
                                        {" "}
                                        <Head>Approved Services</Head>
                                        <Price>650</Price>
                                    </Content1>{" "}
                                </Graph>
                            </div>
                        </Grid>
                        <Grid style={{ display: 'block', width: '100%'}}>
                            <div className='dashboard-grid__order_contents'>
                                <Graph>
                                    <Content1>
                                        {" "}
                                        <Head>Pending Services</Head>
                                        <Price>652</Price>
                                    </Content1>{" "}
                                </Graph>
                            </div>
                        </Grid>
                    </div>
                </>
            </Container>
        </>
    )
}
const Stats = styled.div``
const Content1 = styled.div`
    margin-left: 24px;

    h1 {
        font-size: 40px;
    }
`
const Head = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${p => p.theme.colors.gray300};
`
const Price = styled.div`
    font-size: 40px;
    color: #ffffff;
`
const ArrowUp = styled(ArrowUpIcon)`
    svg > path {
        fill: "white";
    }
`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;

    p {
        margin-left: 10px;
    }
`
const Services = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Graph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h3 {
        font-size: 24px;
    }
    h1 {
        font-size: 32px;
    }
    span {
        font-size: 16px;
        color: ${p => p.theme.colors.assetTeal};
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    p {
        font-size: 14px;
        color: ${p => p.theme.colors.gray600};
    }
    .dashboard-grid__order_contents {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 154px;
        background: ${p => p.theme.colors.gray800};
        border-radius: 8px;
    }

    margin-bottom: 20px;
`


const Content = styled.div`
    margin-top: 7px;
    margin-left: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
        width: 100%;
        margin: 0;

        font-weight: 600;
        font-size: 16px;

        color: #ffffff;
    }
    p {
        font-size: 12px;

        color: ${p => p.theme.colors.gray400};
    }
`
const MainWrapper = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
`
const SubFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Flag = styled.div`
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,0.03);
    // opacity: 0.03;
    border-radius: 12px;
`
