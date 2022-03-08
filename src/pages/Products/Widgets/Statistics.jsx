import styled from "styled-components";


import WidgetBox from "components/WidgetBox";


export default function Statistics(){
    return(
        <WidgetBox heading="Stats">
            <Wrapper>
                <PublishWrapper>
                    <h2>30</h2>
                    <p>New Published</p>
                    <div></div>
                </PublishWrapper>
                <PublishWrapper>
                    <h2>02</h2>
                    <p>Discontinued</p>
                </PublishWrapper>
            </Wrapper>
        </WidgetBox>
    );
}

const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;

    & > div:first-child {
    padding-right:55px;
}
`;
const PublishWrapper=styled.div`



    h2{
        width: 40px;
        height: 38px;
        color:${p=>p.theme.colors.gray200};
        font-weight: 600;
        font-size: 32px;
    }
    p{
        color:${p=>p.theme.colors.gray600};
        font-size: 14px;
        width: 102px;
        height: 21px
    }
`;
