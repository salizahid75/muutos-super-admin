import { useState } from "react"
import Heading from "ant/Heading"
import { Table, PlusButton, Button, Checkbox, Alert,ColorSvg, Input, } from "ant"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"
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
import { ReactComponent as CloseIcon } from "assets/icons/Close/Close-1.svg"
import { Row, Col, Modal } from "antd"

export default function ProductView({
    setActiveComp,
    products,
    onStatusChange,
    active,
}) {
  usePage("User Reviews & Ratings")
    const Edit = () => {
        // if (component === "operations") {
        //     // setComponent("editStatus")
        // } else {
        //     // setComponent("operations")
        // }
        console.log('working');
        document.getElementsByClassName('widget-reply')[0].classList.remove('d-none')
    }

    const handleFilter = () => {

    }

    const [errors, setErrors] = useState([])
    
  return (
    <Container>
      <div>
        <TopBar
          activeItem={active}
          heading='5 AUG 2022'
        />
        <FiltersBar
        // title={'Product Name'}
        // category={'Shoe'}
        //   onSearchChange={e => handleSearch(e.target.value)}
          filters={{
            defaultValue: "All",
            onChange: f => console.log(f),
            filters: ["New", "Old"],
          }}
          sortBy={{
            defaultValue: "All",
            onChange: f => handleFilter(f),
            filters: ["All", "New", "Old"],
          }}
          
        //   otherFilters={
        //     <>
        //       <Button
        //         type='secondary'
        //         onClick={() => setActiveComp("wishlisted")}
        //         style={{
        //           height: "54px",
        //           display: "inline-flex",
        //           transform: "translateY(-1px)",
        //         }}
        //         // icon={<HeartIcon style={{ marginRight: "6px" }} />}
        //         >
        //         Make Discount 
        //       </Button>
        //       {/* <PlusButton
        //         style={{ display: "inline-flex" }}
        //         onClick={() => setActiveComp("upload")}
        //       /> */}
        //     </>
        //   }
        />
        
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
      </div>
      <div>
          <Heading
            size='32px'
            style={{ marginTop: "10px", marginBottom: "37px" }}>
            Activity Widgets
          </Heading>
          {errors.map((error, index) => (
            <Alert
              key={index}
              message={error}
              type='error'
              showIcon
              icon={
                <ColorSvg style={{ alignSelf: "start" }} color='assetRed'>
                  <AlertIcon
                    style={{
                      transform: "translateY(4px)",
                      marginRight: "8px",
                    }}
                  />
                </ColorSvg>
              }
            />
          ))}
          <CalculateWidget>
          <div className="row w-100 p-3 widget-reply d-none" style={{backgroundColor:'#222225', borderRadius:'5px'}}>
            <h1 className="heading">
              Details
              <span style={{
                float:'right'
              }}>
                <IconWrapper>
                  <CloseIcon onClick={()=>document.getElementsByClassName('widget-reply')[0].classList.add('d-none')}/>
                </IconWrapper>
              </span>
            </h1>
            <div>
              <Text1>
                By
              </Text1>
              <Text2>
                @Ella Lopez
              </Text2>
              <Text3>
                05 Dec 2021 - 12:46 PM
              </Text3>
              <div className="pt-2">
                <Text4>
                  I was Literally not expected that much comfort in those amazing shoes. They have a very big role in my everyday long morning walk! I highly suggest this shoe to everyone, Thanks.
                </Text4>
                <br />
                <Textarea>
                  <textarea name="" id="" placeholder="Reply Comment">

                  </textarea>
                </Textarea>
                <Button type="primary" >
                  Send
                </Button>
              </div>
            </div>
          </div>
          </CalculateWidget>
        </div>
    </Container>
  )
}


const IconWrapper = styled.span`

  & > svg{
    & > path{
      fill:#F4F4F5;
    }
  }

`;

const Textarea = styled.div`

& > textarea {
  background:#222225;
  border-radius: 5px;
  width:100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  padding:10px;
  line-height: 24px;
  color: #52525B;
}

`

const Text1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #A1A1AA;
  margin-left:-9px;
`;
const Text2 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #10B981;
  margin-left:2px;
`;

const Text3 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #71717A;
  float:right;
`;

const Text4 = styled.div`
  text-align:justify;
  display:block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #D4D4D8;
  margin:0;
  padding:0;
`;

const CalculateWidget = styled.div`

  & > div > .heading{
    margin-left:-10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #D4D4D8;
  }

`;

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