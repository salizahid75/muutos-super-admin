import styled from "styled-components";


import WidgetBox from "components/WidgetBox";


export default function BestProducts(){
return(
 

<WidgetBox heading="Best Product">
    <Wrapper>
    <div className="best_product_content">
           <ImageWrapper>
                <img src="https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg"/>
            </ImageWrapper>
             <h1 className="best_product__heading">
                    Nike Space Hippie 01
             </h1>
    </div>
       
        <PriceWrapper>
            <h2>QAR 2400 </h2>
            <p >Earned</p>
        </PriceWrapper>
    </Wrapper>
  

</WidgetBox>
 
);

}


const Wrapper=styled.div`
 
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
.best_product_content{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
.best_product__heading{
    max-width: 166px;
    margin-left:20px;
    color:${p=>p.theme.colors.gray200};
    font-weight: 600;
    font-size: 16px;
}
`;
const ImageWrapper=styled.div`
width: 64px;
height: 64px;
img{
    width:100%;
    border-radius:16px;
}
`;
const PriceWrapper=styled.div`
    display:flex;
    flex-direction:column;
    h2{
        color:${p=>p.theme.colors.assetTeal};
        font-weight: 600;
        font-size: 24px;
        text-align: right;
        margin-bottom:0;
    }
    p{
        color:${p=>p.theme.colors.gray600};
        font-weight: normal;
        font-size: 14px;
        text-align: right;
    }
     
`;