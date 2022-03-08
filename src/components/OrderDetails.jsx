import { Button } from "ant"
import { useState } from "react"
import styled from "styled-components"
import { ColorSvg } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"

export default function OrderDetails({ data }) {
    const [show, setShow] = useState(false)
    const [pending, setPending] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [deliver, setDeliver] = useState(false)

    return (
        <div>
            {data.map((value, index) => (
                <MainFlex>
                    <Flex>
                        <SubFlex>
                            <ImageWrapper>
                                {index === 0 ? <Head>Image</Head> : null}
                                <img src={value.image} />
                            </ImageWrapper>
                        </SubFlex>

                        <SubFlex>
                            {index === 0 ? <Head>Name</Head> : null}
                            <Content>{value.name}</Content>
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? <Head>Coupon</Head> : null}
                            {value.Coupon === null ? (
                                <Content style={{ color: "#71717A" }}>
                                    No
                                </Content>
                            ) : (
                                <Content>{value.Coupon}</Content>
                            )}
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? <Head>Action</Head> : null}
                            {value.Action === "Pending" ? (
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "87px",
                                        height: "56px",
                                        color: " #FAF7B8",

                                        marginBottom: "56px",
                                    }}>
                                    {value.Action}
                                </Button>
                            ) : null}
                            {value.Action === "Canceled" ? (
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "87px",
                                        height: "56px",
                                        color: "#E0766C",

                                        marginBottom: "56px",
                                    }}>
                                    {value.Action}
                                </Button>
                            ) : null}

                            {value.Action === "Delivered" ? (
                                <Button
                                    type='secondary'
                                    style={{
                                        width: "87px",
                                        height: "56px",
                                        color: "#ABEDE6",

                                        marginBottom: "56px",
                                    }}>
                                    {value.Action}
                                </Button>
                            ) : null}
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? <Head>Price</Head> : null}
                            <Content>{value.price}</Content>
                        </SubFlex>

                        <SubFlex>
                            {index === 0 ? <Head>Edit Status</Head> : null}
                            <ColorSvg
                                type='secondary'
                                style={{
                                    marginBottom: "40px",
                                    marginTop: "15px",
                                }}>
                                <DownArrowIcon
                                    onClick={() => {
                                        if (
                                            show != index + 1 &&
                                            value.Action === "Pending"
                                        ) {
                                            setShow(index + 1)
                                            setPending(index + 1)
                                        } else if (
                                            show != index + 1 &&
                                            value.Action === "Canceled"
                                        ) {
                                            setShow(index + 1)
                                            setCancel(index + 1)
                                        } else if (
                                            show != index + 1 &&
                                            value.Action === "Delivered"
                                        ) {
                                            setShow(index + 1)
                                            setDeliver(index + 1)
                                        } else {
                                            setShow(false)
                                            setPending(false)
                                            setCancel(false)
                                            setDeliver(false)
                                        }
                                    }}
                                />
                            </ColorSvg>
                        </SubFlex>
                    </Flex>
                    {/* for pending bar */}

                    {show === index + 1 && pending === index + 1 ? (
                        <Flex2>
                            <Flex3>
                                <Box boxColor='assetSun'>
                                    <Text
                                        style={{
                                            width: "114px",
                                            color: " #FAF7B8",
                                        }}>
                                        Shipping Soon
                                    </Text>
                                </Box>

                                <HR2
                                    style={{
                                        width: "95%",
                                        background: "#FAF7B8",
                                        border: "2px solid #FAF7B8",
                                    }}>
                                    {" "}
                                </HR2>
                                <Box boxColor='assetSun'>
                                    {" "}
                                    <Text style={{ color: " #FAF7B8" }}>
                                        Shipped
                                    </Text>
                                </Box>
                            </Flex3>

                            <HR2>
                                <p
                                    style={{
                                        textAlign: "center",
                                        marginTop: "30px",
                                        color: "#A1A1AA",
                                    }}>
                                    on the way
                                </p>
                            </HR2>
                            <Flex3 style={{ position: "relative" }}>
                                {" "}
                                <Box boxColor='gray700' x>
                                    <Text style={{ width: "114px" }}>
                                        Our of delivery
                                    </Text>
                                </Box>
                                <HR2 style={{ width: "95%" }}> </HR2>
                                <Box boxColor='gray700' x>
                                    <Text>Delivered</Text>
                                </Box>
                            </Flex3>
                            {/* <Flex4 style={{ position: "fixed", marginLeft: "42%" }}>
                             <Text>on the Way</Text>
                         </Flex4> */}
                        </Flex2>
                    ) : null}
                    {}

                    {show === index + 1 && pending === index + 1 ? (
                        <Flex2
                            style={{ marginBottom: "20px", marginTop: "32px" }}>
                            <H>Expected Delivery:</H>
                            <OrderPending styled={{ color: "assetSun" }}>
                                17 Aug 2021
                            </OrderPending>
                        </Flex2>
                    ) : null}
                    {}
                    {}
                    {show === index + 1 && pending === index + 1 ? (
                        <Flex2>
                            <HR></HR>
                        </Flex2>
                    ) : null}
                    {}
                    {/* cancellation */}
                    {}
                    {show === index + 1 && cancel === index + 1 ? (
                        <Flex2>
                            <Flex3>
                                <Box boxColor='assetRed'>
                                    <Text
                                        style={{
                                            width: "114px",
                                            color: "#FFFFFF",
                                        }}>
                                        Shipping Soon
                                    </Text>
                                </Box>

                                <HR2
                                    style={{
                                        width: "95%",
                                        background: " #E0766C",
                                        border: "2px solid  #E0766C",
                                    }}>
                                    {" "}
                                </HR2>
                                <Box boxColor='assetRed'>
                                    {" "}
                                    <Text style={{ color: " #FFFFFF" }}>
                                        Shipped
                                    </Text>
                                </Box>
                            </Flex3>

                            <HR2
                                style={{
                                    width: "38%",
                                    color: "#E0766C",
                                    background: "#E0766C",
                                    border: "3px solid #E0766C",
                                }}>
                                <p
                                    style={{
                                        textAlign: "right",
                                        marginTop: "30px",
                                        color: "#FFFFFF",
                                    }}>
                                    on the way
                                </p>
                            </HR2>

                            <HR2 style={{ width: "30%" }}></HR2>
                            <Flex3 style={{ position: "relative" }}>
                                {" "}
                                <Box boxColor='gray700' x>
                                    <Text
                                        style={{
                                            width: "114px",
                                            color: "#FFFFFF",
                                        }}>
                                        Our of delivery
                                    </Text>
                                </Box>
                                <HR2 style={{ width: "95%" }}> </HR2>
                                <Box boxColor='gray700' x>
                                    {" "}
                                    <Text style={{ color: "#FFFFFF" }}>
                                        Delivered
                                    </Text>
                                </Box>
                            </Flex3>
                            {/* <Flex4 style={{ position: "fixed", marginLeft: "42%" }}>
             <Text>on the Way</Text>
         </Flex4> */}
                        </Flex2>
                    ) : null}
                    {}

                    {show === index + 1 && cancel === index + 1 ? (
                        <Flex2
                            style={{ marginBottom: "20px", marginTop: "32px" }}>
                            <H>Delivery Cancelled:</H>
                            <Cancel styled={{ color: "assetRed" }}>
                                17 Aug 2021
                            </Cancel>
                        </Flex2>
                    ) : null}
                    {}
                    {}

                    {show === index + 1 && cancel === index + 1 ? (
                        <Flex2>
                            <H>Reasone:</H>
                            <P>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error eveniet perferendis
                                ipsam architecto, aut repellendus, repellat,
                                dolores suscipit molestiae hic amet distinctio
                                voluptatibus placeat nulla ad dignissimos?
                                Debitis, quam sunt.
                            </P>
                        </Flex2>
                    ) : null}
                    {}
                    {show === index + 1 && cancel === index + 1 ? (
                        <Flex2>
                            <HR></HR>
                        </Flex2>
                    ) : null}
                    {}
                    {/* delivered */}

                    {}
                    {show === index + 1 && deliver === index + 1 ? (
                        <Flex2>
                            <Flex3>
                                <Box boxColor='assetTeal'>
                                    <Text
                                        style={{
                                            width: "114px",
                                            color: " #ABEDE6",
                                        }}>
                                        Shipping Soon
                                    </Text>
                                </Box>

                                <HR2
                                    style={{
                                        width: "95%",
                                        background: "#ABEDE6",
                                        border: "2px solid #ABEDE6",
                                    }}>
                                    {" "}
                                </HR2>
                                <Box boxColor='assetTeal'>
                                    {" "}
                                    <Text style={{ color: "#ABEDE6" }}>
                                        Shipped
                                    </Text>
                                </Box>
                            </Flex3>

                            <HR2
                                style={{
                                    color: "#ABEDE6",
                                    background: "#ABEDE6",
                                    border: "3px solid #ABEDE6",
                                }}>
                                <p
                                    style={{
                                        textAlign: "center",
                                        marginTop: "30px",
                                        color: "#ABEDE6",
                                    }}>
                                    on the way
                                </p>
                            </HR2>
                            <Flex3 style={{ position: "relative" }}>
                                {" "}
                                <Box boxColor='assetTeal' x>
                                    <Text style={{ width: "114px" }}>
                                        Our of delivery
                                    </Text>
                                </Box>
                                <HR2
                                    style={{
                                        width: "95%",
                                        color: "#ABEDE6",
                                        background: "#ABEDE6",
                                        border: "3px solid #ABEDE6",
                                    }}>
                                    {" "}
                                </HR2>
                                <Box boxColor='assetTeal' x>
                                    {" "}
                                    <Text>Delivered</Text>
                                </Box>
                            </Flex3>
                            {/* <Flex4 style={{ position: "fixed", marginLeft: "42%" }}>
             <Text>on the Way</Text>
         </Flex4> */}
                        </Flex2>
                    ) : null}
                    {}
                    {}

                    {show === index + 1 && deliver === index + 1 ? (
                        <Flex2
                            style={{ marginBottom: "20px", marginTop: "32px" }}>
                            <H>Expected Delivery:</H>
                            <OrderDeliver>17 Aug 2021</OrderDeliver>
                        </Flex2>
                    ) : null}
                    {}
                    {show === index + 1 && deliver === index + 1 ? (
                        <Flex2>
                            <HR></HR>
                        </Flex2>
                    ) : null}
                    {}
                </MainFlex>
            ))}
        </div>
    )
}
const OrderDeliver = styled.div`
    color: ${p => p.theme.colors.assetTeal};
`
const OrderPending = styled.div`
    color: ${p => p.theme.colors.assetSun};
`
const Text = styled.div`
    width: 100%;
    height: 0px;
    margin-top: 40px;
    color: ${p => p.theme.colors.gray400};
    background: #3f3f46;
`
const Box = styled.div`
    z-index: 10;

    margin-top: 30px;
    height: 24px;
    width: 24px;
    background: ${p => p.theme.colors[p.boxColor]};
    border-radius: 4px;
    z-index: 1;
`
const Flex4 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 80%;
`
const Flex3 = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    items-align: right;
`
const Head = styled.p`
    font-weight: 600;
    font-size: 16px;
    margin-top: 58px;
    margin-bottom: 24px;
    color: ${p => p.theme.colors.gray300};
`
const HR = styled.div`
    width: 100%;
    height: 0px;
    margin-top: 40px;
    margin-bottom: 49px;
    background: #222225;
    border: 2px solid #222225;
`
const HR2 = styled.div`
    width: 70%;
    height: 0px;
    margin-top: 40px;
    margin-bottom: 49px;
    background: #3f3f46;
    border: 3px solid #3f3f46;
`
const Cancel = styled.div`
    font-weight: 600;
    font-size: 16px;
    margin-right: 20px;

    color: ${p => p.theme.colors.assetRed};
`
const H = styled.div`
    font-weight: 600;
    font-size: 16px;
    margin-right: 20px;

    color: ${p => p.theme.colors.gray100};
`
const P = styled.div`
    font-size: 16px;

    color: ${p => p.theme.colors.gray400};
`
const ImageWrapper = styled.div`
    width: 64px;
    height: 64px;
    img {
        width: 100%;
        border-radius: 16px;
    }
`

const MainFlex = styled.div`
    display: flex;
    flex-direction: column;
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    items-align: left;
    justify-content: space-between;
`
const Content = styled.p`
    margin-top: 10px;
    font-size: 20px;

    color: ${p => p.theme.colors.gray300};
`
const SubFlex = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 24px;
    color: white;
`
const Flex2 = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;

    > h1 {
        margin: 0;
        color: white;
    }
    color: white;
`
