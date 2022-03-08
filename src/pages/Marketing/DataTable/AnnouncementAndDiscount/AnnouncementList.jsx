import styled from "styled-components"
import { ColorSvg } from "ant"
import { useState } from "react"
import { ReactComponent as FlagIcon } from "assets/icons/Flag.svg"
import { ReactComponent as DownIcon } from "assets/icons/Chevron/DownArrow.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"

export default function AnnouncementList() {
    const [hide, setHide] = useState(false)
    const data = [
        {
            name: "Holiday New Products",
            date: "16 Aug 2021",
            announced:
                "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
        },
        {
            name: "Holiday New Products",
            date: "16 Aug 2021",
            announced:
                "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
        },
        {
            name: "Holiday New Products",
            date: "16 Aug 2021",
            announced:
                "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
        },
        {
            name: "Holiday New Products",
            date: "16 Aug 2021",
            announced:
                "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
        },
        {
            name: "Holiday New Products",
            date: "16 Aug 2021",
            announced:
                "  Risus faucibus fames et mollis sit. Aliquam nascetur quis sed blandit quis. Auctor vitae in molestie in. Semper sed nunc eget id pharetra. Leo id orci enim ullamcorper. Elit turpis platea diam quis quisque dui. Molestie tortor vitae dui faucibus viverra viverra consectetur egestas. Tristique lacus ut et hendrerit arcu congue urna, sollicitudin tortor.",
        },
    ]
    return (
        <>
            {data.map((value, index) => (
                <MainWrapper>
                    {" "}
                    <Wrapper style={{ marginBottom: "18px" }}>
                        <SubFlex>
                            <Flag>
                                <ColorSvg color='primary'>
                                    <FlagIcon style={{ margin: "20px" }} />
                                </ColorSvg>
                            </Flag>
                            <Content>
                                <h1>{value.name}</h1>
                                <p>{value.date}</p>
                            </Content>
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
                            <ColorSvg color='gray100'>
                                <EditIcon
                                    style={{
                                        marginLeft: "34px",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                    }}
                                />
                            </ColorSvg>
                            <ColorSvg color='gray100'>
                                <DeleteIcon
                                    style={{
                                        marginLeft: "31px",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                    }}
                                />
                            </ColorSvg>
                        </SubFlex>
                    </Wrapper>
                    <Wrapper>
                        {hide === index ? (
                            <Announcement>{value.announced}</Announcement>
                        ) : null}
                    </Wrapper>
                </MainWrapper>
            ))}
        </>
    )
}
const Announcement = styled.p`
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
