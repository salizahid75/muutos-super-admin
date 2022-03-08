import { Row, Col, Space } from "antd"
import { Button, Input, Select } from "ant"
import Heading from "ant/Heading"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as ProfilePicIcon } from "assets/icons/ProfilePic.svg"
import { ReactComponent as MuutosLogo } from "assets/icons/MuutosLogo.svg"
import styled from "styled-components"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import {ProfilePic} from './styles.js';
import axios from "axios"
const { Option } = Select
export default function Register() {

    const submitProfilePic = async (event) => {

        // console.log(event.target.files[0]);
        const profilePic = document.getElementById('profile-pic').files[0];
        console.log(profilePic);
        var userId = 'oaXqhYeVJnBGOs0lLFF0';
        const form_data = new FormData();
        form_data.append('profile_picture', profilePic);
        const uploadProfilePic = await axios.put(`http://localhost:8080/api/userProfilePic/${userId}`, form_data);
        if(uploadProfilePic){
            alert('uploaded');
        }

    }

    const handleSubmit = async (event) => {
        const [city, country, googleMapAddress, language, storeName, streetAddress, vendorName] = event.target.getElementsByTagName('input');
        const data = {
            city:city.value, 
            country:country.value, 
            googleMapAddress:googleMapAddress.value, 
            language:language.value, 
            storeName:storeName.value, 
            streetAddress:streetAddress.value, 
            vendorName:vendorName.value,
        }
        console.log(data);
        var userId = 'oaXqhYeVJnBGOs0lLFF0';
        const uploadProfilePic = await axios.put(`http://localhost:8080/api/user/${userId}`, data);
        if(uploadProfilePic){
            console.log('profile updated');
            window.open('../dashboard', '_self');
        }
    }

    return (
        <>
            <div
                style={{
                    padding:'20px'
                }}
            >
                <MuutosLogo/>
            </div>
            <Wrapper>
                <Heading
                    style={{
                        fontWeight: " bold",
                        fontSize: " 40px",
                        textAlign: "center",
                        color: "#F8FAFC",
                        marginBottom: "32px",
                        paddingTop: "30px",
                        paddingBottom: "20px",
                    }}>
                    Introduce Your Self
                </Heading>
                    <form action="javascript://" onSubmit={handleSubmit}>
                    <Row gutter={30} style={{ marginBottom: "30px" }}>
                        <div style={{marginLeft:'auto', marginRight:'auto'}}>
                        <Col span={24} style={{width:'536px'}}>
                            <Input
                                name='vendorName'
                                type='text'
                                placeholder='Vendor Name'
                            />
                        </Col>
                        </div>
                    </Row>
                    <Row gutter={30} style={{ marginBottom: "30px" }}>
                        <div style={{marginLeft:'auto', marginRight:'auto'}}>
                        <Col span={24} style={{width:'536px'}}>
                            <Input
                                name='storeName'
                                type='text'
                                placeholder='Store Name'
                            />
                        </Col>
                        </div>
                    </Row>
                    <Row gutter={30} style={{ marginBottom: "30px" }}>
                        <div style={{marginLeft:'auto', marginRight:'auto'}}>
                        <Col span={24} style={{width:'536px'}}>
                            <Input
                                name='streetAddress'
                                type='text'
                                placeholder='Street Address'
                            />
                        </Col>
                        </div>
                    </Row>
                    <Row gutter={20} style={{ marginBottom: "30px" }}>
                        <div style={{display:'flex',marginLeft:'auto', marginRight:'auto'}}>
                        <Col span={12}>
                            <Input name='city' type='text' placeholder='City' />
                        </Col>
                        <Col span={12}>
                            <Input
                                name='country'
                                type='text'
                                placeholder='Country'
                            />
                        </Col>
                        </div>
                    </Row>
                    <Row gutter={20} style={{ marginBottom: "30px" }}>
                        <div style={{display:'flex',marginLeft:'auto', marginRight:'auto'}}>
                            <Col span={12}>
                                <Input name='language' type='text' placeholder='Language' />
                            </Col>
                            <Col span={12}>
                                <Input
                                    name='googleMapAddress'
                                    type='text'
                                    placeholder='Google Map Address'
                                />
                            </Col>
                        </div>
                    </Row>
                    <div style={{border: '2px solid #222225'}}>
                    </div>

                    <ProfilePic>
                        
                        <div className="profile-pic">
                            <label htmlFor="profile-pic">
                                <ProfilePicIcon />
                            </label>
                            <Input
                                onChange={submitProfilePic}
                                name='profilePic'
                                type='file'
                                style={{
                                    display:'none'
                                }}
                                id="profile-pic"
                            />
                        </div>
                        <div style={{width:'300px', padding:'0px 20px'}}>
                            <Input type='submit' style={{color:'#10B981'}}value='Add Profile' />
                        </div>
                    </ProfilePic>

                    <Row
                        style={{
                            paddingTop: "40px",
                        }}>
                        <div style={{display:'flex',marginLeft:'auto', marginRight:'auto'}}>
                            <Col span={6}>
                                <Button style={{width:'536px'}} type='primary'>Start Vendor</Button>
                            </Col>
                        </div>
                    </Row>
                    </form>
            </Wrapper>
            <br />
        </>
    )
}
const Wrapper = styled.div`
    width: 90%;
    max-width: 1092px;
    margin: auto;
`

const LoginAccount = styled.p`
    font-size: 16px;
    color: ${p => p.theme.colors.gray500};
    margin-top: 24px;

    button {
        display: inline-block;
        margin-left: -10px;
    }
`

const PasswordInput = styled(Input.Password)`
    .ant-input {
        background-color: ${p => p.theme.colors.gray800};
        color: ${p => p.theme.colors.gray50} !important;
    }

    .anticon {
        color: ${p => p.theme.colors.gray50} !important;
    }

    background-color: ${p => p.theme.colors.gray800};
    font-size: 16px;
    font-weight: ${p => p.theme.font.weight.regular};
    padding: 16px 24px;
    border: none;
    border-radius: 12px;

    width: ${p => p.width || "100%"};

    &::placeholder {
        color: ${p => p.theme.colors.gray600};
    }
`
