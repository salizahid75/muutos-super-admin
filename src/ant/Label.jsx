import styled from "styled-components"

export default function Label({ color, children }) {
    return (
        <Wrapper>
            <Icon defaultColor={color || "green"} />
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Icon = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: ${p =>
        p.theme.colors[
            "asset" +
                p.defaultColor[0].toUpperCase() +
                p.defaultColor.slice(1, p.defaultColor.length)
        ]};
    margin-right: 10px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: ${p => p.theme.font.weight.regular};
    color: ${p => p.theme.colors.gray50};
    margin: 0;
`
