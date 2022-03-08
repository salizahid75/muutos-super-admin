import { Button } from "ant"
import { useState } from "react"
import styled from "styled-components"
import { ColorSvg } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"

export default function Details({ data }) {
    const [show, setShow] = useState(false)
    return (
        // <Content>Name</Content>

        // <Content>Price</Content>
        // <Content>Date of Cancellation</Content>

        // <Content>Action</Content>
        // <Content>Reason</Content>
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
                            {index === 0 ? <Head>Price</Head> : null}
                            <Content>{value.price}</Content>
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? (
                                <Head>Date of Cancellation</Head>
                            ) : null}
                            <Content>{value.dateOfCencelation}</Content>
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? <Head>Action</Head> : null}
                            <Button
                                type='secondary'
                                style={{
                                    width: "87px",
                                    height: "56px",
                                    color: "#34D399",

                                    marginBottom: "56px",
                                }}>
                                Paid
                            </Button>
                        </SubFlex>
                        <SubFlex>
                            {index === 0 ? <Head>Reason</Head> : null}
                            <ColorSvg
                                type='secondary'
                                style={{
                                    marginBottom: "40px",
                                    marginTop: "15px",
                                }}>
                                <DownArrowIcon
                                    onClick={() => {
                                        if (show === index) {
                                            setShow(false)
                                        } else {
                                            setShow(index)
                                        }
                                    }}
                                />
                            </ColorSvg>
                        </SubFlex>
                    </Flex>

                    {show === index ? (
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
                    {show === index ? (
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
const Head = styled.p`
    font-weight: 600;
    font-size: 16px;
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
    display: flex;
    flex-direction: row;
    items-align: left;
    > h1 {
        margin: 0;
        color: white;
    }
    color: white;
`
