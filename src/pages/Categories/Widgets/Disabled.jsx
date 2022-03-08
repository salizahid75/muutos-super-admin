import styled from "styled-components";


import WidgetBox from "components/WidgetBox";


export default function Disabled(){
return(
 

<WidgetBox heading="Disabled">
    <Wrapper>
        <PriceWrapper>
            <h2>02 </h2>
            <p >Services</p>
        </PriceWrapper>
    </Wrapper>
  

</WidgetBox>
 
);

}


const Wrapper=styled.div`
 
 

`;
 
const PriceWrapper=styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 align-items:left;
 width: 58px;

    h2{
        color:#FFFFFF;
        font-weight: 600;
        font-size: 32px;
        margin-bottom:0;
        
    }
    p{
        margin-left:12px;
        margin-top:15px;
        color:${p=>p.theme.colors.gray600};
        font-weight: normal;
        font-size: 14px;
       
    }
     
`;