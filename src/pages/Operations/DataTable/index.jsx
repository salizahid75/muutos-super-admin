import { useState, useEffect } from "react"
import Heading from "ant/Heading"
import { Table, PlusButton, Button, Checkbox } from "ant"
import theme from "styles/Theme"
import Appointments from "../Widgets/Appointments"
import Disabled from "../Widgets/Disabled"
import { columns, data } from "./data"
import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { DataTable } from "./styles"
import styled from 'styled-components';
import { ReactComponent as MapIcon } from "assets/icons/Pin.svg"
import { ReactComponent as PhoneIcon } from "assets/icons/Phone/Phone.svg"
import { Row, Col, Modal } from "antd"
import axios from "axios"
export default function ProductView({
    setActiveComp,
    products,
    onStatusChange,
    active,
}) {
  console.log(data)
  usePage("Operations")
    const Edit = () => {
      
    }
    const [Operations, setOperations] = useState({});

  useEffect(() => {
    async function getOperations() {
      const getOperation = await axios.post(`http://localhost:8080/api/operations`, { vendorId: localStorage.getItem('uid') });
      if (getOperation) {
        setOperations(getOperation.data.data);
      }
    }
    getOperations();
  }, []);
    
  return (
    <Container>
      <div>
        <br />
        <div className="d-flex justify-content-between">
            <div >
                <Text1>
                    <MapIcon />
                  &nbsp;{Operations.address}
                </Text1>
                <TextSuccess>
                    &nbsp;{Operations.googleMapLocation}
                </TextSuccess>
                <div className="d-flex pt-4">
                <Text1>
                    <PhoneIcon />
                    &nbsp;{Operations.phoneNumber}
                </Text1>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Text1>
                    <PhoneIcon />
                    &nbsp;+974 123456789
                </Text1> */}
                </div>
            </div>
            <div className="d-flex align-items-center">
                <ButtonWrapper className="d-flex align-items-center">
                    <p>
                        Operation Status: 
                    </p>
                    <select className="p-1">
                        <option selected value={data[0].operationStatus}>{data[0].operationStatus}</option>
                    </select>
                </ButtonWrapper>
                &nbsp;
                &nbsp;
                <ButtonWrapper>
                    <div>
                        <a onClick={()=>setActiveComp('editStatus')}>
                            Edit
                        </a>
                    </div>
                </ButtonWrapper>
            </div>
        </div>
        <div style={{border: '1px solid #222225', marginTop:'20px'}}></div>
        <DataTable>
            <Table
                pagination={{
                    pageSize: data.length + 1,
                    hideOnSinglePage: true,
                }}
                columns={columns(Edit)}
                dataSource={data}
            />
        </DataTable>
        <br />
        <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
          <Col span={12}>
            <Heading
              style={{ marginBottom: "30px" }}
              size='24px'
              weight={theme.font.weight.semiBold}>
              Working Hours
            </Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Saturday
              </Checkbox>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Sunday
              </Checkbox>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Monday
              </Checkbox>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Tuesday
              </Checkbox>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Wednesday
              </Checkbox>
              <Checkbox
                style={{ marginBottom: "20px" }}>
                Thursday
              </Checkbox>
              <Checkbox>
                Friday
              </Checkbox>
            </div>
          </Col>
          <Col span={12}></Col>
          </Row>
      </div>
    </Container>
  )
}


const Text1 = styled.div`

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
color: #FAFAFA;


`
const ButtonWrapper = styled.div`

padding: 10px;
background: #222225;
border-radius: 12px;
& > div {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #34D399;
    text-align:center;
    padding:2px 15px;
}
& > p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #71717A;
    margin:0px !important;
}

& > select{
    background: #222225;
    color:#FAF7B8;
    outline:none;
    border:none;
    border-radius:5px;
}
& > select:after {
    background: #222225;
    color:#FAF7B8;
}

& > select:before {
    background: #222225;
    color:#FAF7B8;
}

& > select > option  {
    background: #222225;
    color:#FAF7B8;
}

`


const TextSuccess = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #34D399;
margin-left:25px;
margin-top:5px;

`