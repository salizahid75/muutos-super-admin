import styled from "styled-components"
import { ReactComponent as PlusIcon } from "assets/icons/Plus/Plus.svg"
import ColorSvg from "ant/ColorSvg"
import { Button } from "ant"
import axios from 'axios'
export default function BookProduct(props) {

    const makeFeatured = async (productId) => {
       const data = {
           isFeatured:1,
           id:productId
       } 

       const res = await axios.post('http://localhost:8080/api/addToFeaturedProducts', data);
       if(res){
           window.location.reload();
       }
    }

    return (
        <Wrapper>
            <SubFlex>
                <ImageWrapper>
                    <img src={props.image} style={{width:'100%', height:'100%'}}/>
                </ImageWrapper>
                <Content>
                    <h3>{props.name}</h3>
                    <p>QAR {props.price}</p>
                </Content>
            </SubFlex>
            <SubFlex>
                <Cancel>
                    {" "}
                    <ColorSvg color='primary'>
                        <PlusIcon
                            style={{
                                marginLeft: "6px",
                                marginTop: "6px",
                            }}
                            onClick={()=>makeFeatured(props.id)}
                        />
                    </ColorSvg>
                </Cancel>
            </SubFlex>
        </Wrapper>
    )
}
const ImageWrapper = styled.div`
    width: 64px;
    height: 64px;
    margin-left: 16px;
    img {
        width: 100%;

        border-radius: 16px;
    }
`
const SubFlex = styled.div`
    display: flex;
    flex-direction: row;
`
const Cancel = styled.div`
    margin-right: 16px;
    width: 36px;
    height: 36px;
    background: #29292c;
    border-radius: 10px;
    & > div > svg {
        fill: ${p => p.theme.colors.assetRed} !important;
        path {
            fill: ${p => p.theme.colors.assetRed} !important;
        }
    }
`
const Content = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    align-items: left;
    h3 {
        margin: 0;
        font-size: 20px;

        color: ${p => p.theme.colors.gray300};
    }
    p {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: ${p => p.theme.colors.gray300};
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    margin-top: 16px;
    width: 536px;
    border-radius: 12px;
    background: ${p => p.theme.colors.gray800};
`
