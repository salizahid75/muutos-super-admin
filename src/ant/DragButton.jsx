import { ReactComponent as BurgerIcon } from "assets/icons/burger.svg"

import styled from "styled-components"

export default function DragButton({ onClick = null, icon = null }) {
    return <Wrapper onClick={onClick}>{icon ? icon : <BurgerIcon />}</Wrapper>
}

const Wrapper = styled.div`
    cursor: pointer;
    background: ${p => p.theme.utils.toRgba(p.theme.colors.gray50, 0.03)};
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        path {
            fill: ${p => p.theme.colors.gray50};
        }
    }
`
