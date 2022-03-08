import Button from "./Button"
import styled from "styled-components"
import { ReactComponent as PlusIcon } from "assets/icons/Plus/Plus.svg"

export default function PlusButton(props) {
    return (
        <Wrapper {...props} type='secondary'>
            <PlusIcon />
        </Wrapper>
    )
}

const Wrapper = styled(Button)`
    height: 54px !important;
    transform: translateY(4px);
    svg {
        height: 20px;
        transform: translateY(1px);
        path {
            fill: ${p => p.theme.colors.primary};
        }
    }
`
