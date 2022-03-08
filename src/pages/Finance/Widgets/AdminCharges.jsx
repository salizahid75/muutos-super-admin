 
import styled from "styled-components";


import WidgetBox from "components/WidgetBox";
import {Button} from "ant"

export default function AdminCharges(){
return(
 

<WidgetBox heading="Admin Charges">
   <Wrapper>  
     <ContentWrapper>
        <div className="contentData">
            <h3>Maintainance</h3>
            <p>Pending</p>
        </div>
         

         <h3>QAR 65</h3>
     </ContentWrapper>
     <ContentWrapper>
     <div className="contentData">
        <h3>Server</h3>
        <p>Pending</p>
    </div>
     <h3>QAR 65</h3>


     </ContentWrapper>
     <ContentWrapper>
     <div className="contentData">
        <h3>Management</h3>
        <p>Pending</p>
    </div>
     <h3>QAR 65</h3>


     </ContentWrapper>
     <ContentWrapper>
     <div className="contentData">
        <h3>24/7 Service</h3>
        <p>Completed</p>
    </div>
     <h3>QAR 65</h3>


     </ContentWrapper>
     
     <hr/>
     <h3>Total: QAR 195</h3>
     <Button type="secondary">Paid</Button>
    </Wrapper>

</WidgetBox>
 
);

}

const Wrapper = styled.div`
display:flex;
flex-direction:column;

    button {
        background: ${p => p.theme.utils.toRgba(p.theme.colors.gray50, 0.03)} !important;
        font-size: 16px;
    }
    hr{
        width: 372px;
        border: 1px solid ${p=>p.theme.utils.toRgba(p.theme.colors.gray700,0.5)};
    }
    h3{
    font-weight: 600;
    font-size: 20px;
    color:${p=>p.theme.colors.gray100};
    text-align:center;
 }
`;

 const ContentWrapper=styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 h3{
    font-weight: 600;
    font-size: 20px;
    color:${p=>p.theme.colors.gray100};
 }
 p{
    font-size: 16px;
    color:${p=>p.theme.colors.gray500};

 }
 .contentData{
     display:flex;
     flex-direction:column;
 }
 `;