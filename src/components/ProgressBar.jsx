import React from "react"
import styled from "styled-components"

const ProgressBar = props => {
    const { bgcolor, completed, items, title } = props

    return (
        <Wrapper>
            <Content>
                <h1>{title}</h1>
                <Items backgroundColor={bgcolor}>{items}</Items>
            </Content>

            <ContainerStyles backgroundColor={bgcolor}>
                <FillerStyles backgroundColor={bgcolor} percent={completed}>
                    <LabelStyles></LabelStyles>
                </FillerStyles>
            </ContainerStyles>
        </Wrapper>
    )
}

export default ProgressBar
const Wrapper = styled.div`
    margin-bottom: 12px;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
        margin: 0;
        color: ${p => p.theme.colors.gray100};
        font-weight: normal;
        font-size: 20px;
    }
    margin-bottom: 8px;
`
const Items = styled.p`
    margin: 0;

    font-weight: normal;
    font-size: 20px;
    color: ${p => p.theme.colors[p.backgroundColor]};
`

const ContainerStyles = styled.div`
    height: 12px;
    width: 100%;
    background-color: ${p =>
        p.theme.utils.toRgba(p.theme.colors[p.backgroundColor], 0.2)};

    border-radius: 6px;
`
const FillerStyles = styled.div`
    height: 100%;
    width: ${p => p.percent}%;
    background-color: ${p => p.theme.colors[p.backgroundColor]};
    transition: width 1s ease-in-out;
    border-radius: inherit;
    text-align: center;
`
const LabelStyles = styled.span`
    color: white;
    font-weight: bold;
`
