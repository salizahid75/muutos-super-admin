import styled from "styled-components"

export default function Heading({ size, weight, children, style = {} }) {
    return (
        <Text style={style} defaultSize={size || "40px"} weight={weight}>
            {children}
        </Text>
    )
}

const Text = styled.h1`
    transition: margin 0.15s ease;
    margin: 0;
    color: ${p => p.theme.colors.gray50};
    font-size: ${p => p.defaultSize};
    font-weight: ${p => p.weight || p.theme.font.weight.bold};
`
