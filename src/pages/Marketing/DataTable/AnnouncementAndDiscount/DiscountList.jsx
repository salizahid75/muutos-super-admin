import styled from "styled-components"
import { ColorSvg } from "ant"
import { useState, useEffect } from "react"
import { ReactComponent as PercentIcon } from "assets/icons/Percent.svg"

import { ReactComponent as DownIcon } from "assets/icons/Chevron/DownArrow.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import { ReactComponent as CheckMarkIcon } from "assets/icons/Checkmark/Checkmark.svg"
import axios from "axios"

export default function DiscountList() {
    const [hide, setHide] = useState(false)
    const [data, setData] = useState([]);
    const [today, setToday] = useState();
    useEffect(() => {
        async function getDiscounts(){
            const res = await axios.get('http://localhost:8080/api/allDiscounts');
            if(res){
                setData(res.data.data);
                const tody  = new Date();
                // const to =  tody.getDate()+'-'+(tody.getMonth()+1)+'-'+tody.getFullYear();
                console.log(tody)
                setToday(tody)
            }
        }
        getDiscounts();
    }, []);
    // const data = [
    //     {
    //         name: "Ramzan Discount",
    //         date: "16 Aug 2021  to  16 Aug 2021",
    //         expireDays: "14 Days",
    //         sale: "FAIZ-COUPONCODE",
    //         announced:
    //             "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
    //     },
    //     {
    //         name: "Ramzan Discount",
    //         date: "16 Aug 2021  to  16 Aug 2021",
    //         expireDays: "14 Days",
    //         sale: "FAIZ-COUPONCODE",
    //         announced:
    //             "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
    //     },
    //     {
    //         name: "Ramzan Discount",
    //         date: "16 Aug 2021  to  16 Aug 2021",
    //         expireDays: "14 Days",
    //         sale: "FAIZ-COUPONCODE",
    //         announced:
    //             "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
    //     },
    //     {
    //         name: "Ramzan Discount",
    //         date: "16 Aug 2021  to  16 Aug 2021",
    //         expireDays: "14 Days",
    //         sale: "FAIZ-COUPONCODE",
    //         announced:
    //             "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
    //     },
    //     {
    //         name: "Ramzan Discount",
    //         date: "16 Aug 2021  to  16 Aug 2021",
    //         expireDays: "14 Days",
    //         sale: "FAIZ-COUPONCODE ",
    //         announced:
    //             "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
    //     },
    // ]
    return (
        <>
            {data.map((value, index) => (
                <MainWrapper>
                    {" "}
                    <Wrapper style={{ marginBottom: "18px" }}>
                        <SubFlex>
                            <Flag>
                                <ColorSvg color='primary'>
                                    <PercentIcon style={{ margin: "20px" }} />
                                </ColorSvg>
                            </Flag>
                            <Content>
                                <h1>{value.title}</h1>
                                <p>{value.startingFrom} to {value.endingAt}</p>
                            </Content>
                        </SubFlex>
                        <SubFlex>
                            <SubFlex
                                style={{
                                    marginRight: "100px",
                                }}>
                                <Content>
                                    <h1
                                        style={{
                                            width: "max-content",
                                        }}>
                                        Expires In
                                    </h1>
                                    <p>{Math.ceil(Math.abs(new Date(value.endingAt) - today) / (1000 * 60 * 60 * 24))} Days</p>
                                </Content>
                            </SubFlex>
                            <SubFlex>
                                <Content>
                                    <h1
                                        style={{
                                            color: "#34D399",

                                            width: "max-content",
                                        }}>
                                        {value.coupon}
                                    </h1>
                                </Content>
                            </SubFlex>
                        </SubFlex>

                        <SubFlex style={{ justifyContent: "flex-end" }}>
                            <ColorSvg color='gray100'>
                                <DownIcon
                                    onClick={() => {
                                        if (hide !== index) {
                                            setHide(index)
                                        } else {
                                            setHide(false)
                                        }
                                    }}
                                    style={{
                                        marginLeft: "16px",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                    }}
                                />
                            </ColorSvg>
                            {/* <ColorSvg color='gray100'>
                                <EditIcon
                                    style={{
                                        marginLeft: "34px",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setHide(true)
                                    }}
                                />
                            </ColorSvg> */}
                            <ColorSvg color='gray100'>
                                <DeleteIcon
                                    style={{
                                        marginLeft: "31px",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                    }}
                                    onClick={()=>{
                                        async function deleteDiscountById(){
                                            const res = await axios.post('http://localhost:8080/api/deleteDiscountById', {id: value.id});
                                            if(res){
                                                window.location.reload();
                                            }
                                        }
                                        deleteDiscountById();
                                    }}
                                />
                            </ColorSvg>
                        </SubFlex>
                    </Wrapper>
                    {hide === index ? (
                        <Wrapper
                            style={{
                                width: "55%",
                                justifyContent: "space-between",
                            }}>
                            <div>
                                <Content
                                    style={{
                                        marginLeft: "85px",
                                    }}>
                                    <h1
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                            color: "#FFFFFF",
                                        }}>
                                        On products
                                    </h1>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.products.includes('Shoes')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Shoes{" "}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.products.includes('Top')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Top{" "}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.products.includes('Bottom')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Bottom{" "}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.products.includes('Accessories')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Accessories{" "}
                                        </p>
                                    </div>
                                </Content>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",

                                    alignItems: "left",
                                }}>
                                <Content>
                                    <h1
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                            color: "#FFFFFF",
                                        }}>
                                        On services
                                    </h1>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.services.includes('Gym')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Gym{" "}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.services.includes('Spa & Saloon')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            {"Spa & Salon"}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.services.includes('Dental')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Dental{" "}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                        <ColorSvg color={value.services.includes('Recreation')?'primary':'gray700'}>
                                            <CheckMarkIcon
                                                style={{
                                                    marginBottom: "5px",
                                                    marginRight: "16px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </ColorSvg>
                                        <p
                                            style={{
                                                fontSize: "14px",

                                                color: "#FFFFFF",
                                            }}>
                                            {" "}
                                            Recreation{" "}
                                        </p>
                                    </div>
                                </Content>
                            </div>
                        </Wrapper>
                    ) : null}
                </MainWrapper>
            ))}
        </>
    )
}
const CheckItems = styled.p`
    font-size: 14px;

    color: ${p => p.theme.colors.gray300};
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
        font-size: 20px;

        color: #ffffff;
    }
    p {
        font-size: 14px;

        color: ${p => p.theme.colors.gray400};
    }
`
const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-item: center;
`
const SubFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Flag = styled.div`
    width: 64px;
    height: 64px;
    background: ${p => p.theme.colors.gray800};
    border-radius: 12px;
`
