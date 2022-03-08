import styled from "styled-components"

const Color = styled.div`
    svg {
        fill: ${p => p.theme.colors[p.color]};
        path {
            fill: ${p => p.theme.colors[p.color]};
            opacity: ${p => p.opacity};
        }
    }
`

export default Color
