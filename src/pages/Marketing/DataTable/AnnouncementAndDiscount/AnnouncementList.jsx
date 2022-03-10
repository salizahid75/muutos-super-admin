import styled from "styled-components"
import { ColorSvg } from "ant"
import { useState, useEffect } from "react"
import { ReactComponent as FlagIcon } from "assets/icons/Flag.svg"
import { ReactComponent as DownIcon } from "assets/icons/Chevron/DownArrow.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import axios from "axios"
export default function AnnouncementList() {


    const [hide, setHide] = useState(false)

    const [data, setData] = useState([]);
    const [today, setToday] = useState();
    useEffect(() => {
        async function getAnnouncements(){
            const res = await axios.post('http://localhost:8080/api/getAllAnnouncementsByVendor', {vendorId: localStorage.getItem('uid')});
            if(res){
                setData(res.data.data);
                const tody  = new Date();
                // const to =  tody.getDate()+'-'+(tody.getMonth()+1)+'-'+tody.getFullYear();
                console.log(res.data.data)
                setToday(tody)
            }
        }
        getAnnouncements();
    }, []);
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
                                <h1>{value.title}</h1>
                                {/* <p>{Math.ceil(Math.abs(new Date(value.addedOn) - today) / (1000 * 60 * 60 * 24))}</p> */}
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
                            {/* <ColorSvg color='gray100'>
                                <EditIcon
                                    style={{
                                        marginLeft: "34px",
                                        marginTop: "22px",
                                        cursor: "pointer",
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
                                        async function deleteAnnouncements(){
                                            const res = await axios.post('http://localhost:8080/api/deleteAnnouncementById', {id: value.id});
                                            if(res){
                                                window.location.reload();
                                            }
                                        }
                                        deleteAnnouncements();
                                    }}
                                />
                            </ColorSvg>
                        </SubFlex>
                    </Wrapper>
                    <Wrapper>
                        {hide === index ? (
                            <Announcement>{value.description}</Announcement>
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
