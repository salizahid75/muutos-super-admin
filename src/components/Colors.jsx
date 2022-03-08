import styled from "styled-components"
import { ColorSvg } from "ant"

import { ReactComponent as CancelIcon } from "assets/icons/Close/Close-1.svg"
import { ReactComponent as PlusIcon } from "assets/icons/Plus/Plus.svg"

export default function Colors({ colors = [], onPlusClick, onDelete }) {
    return (
        <Wrapper>
            {(Array.isArray(colors) ? colors : [colors]).map((color, index) => (
                <Color color={color}>
                    <Overlay onClick={() => onDelete(index)}>
                        <CancelIcon />
                    </Overlay>
                </Color>
            ))}
            <AddColor onClick={onPlusClick}>
                <ColorSvg color='gray400'>
                    <PlusIcon />
                </ColorSvg>
            </AddColor>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: flex-start;

    flex-wrap: wrap;
`

const Color = styled.div`
    margin-right: 12px;
    margin-bottom: 12px;
    width: 56px;
    height: 56px;
    background: ${p => p.color};
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &:hover {
        & > div {
            opacity: 1;
            visibility: visible;
        }
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);

    cursor: pointer;

    transition: all 0.15s ease;
    opacity: 0;
    visibility: hidden;

    svg path {
        fill: ${p => p.theme.colors.gray200};
    }

    display: flex;
    align-items: center;
    justify-content: center;
`

const AddColor = styled.button`
    margin-bottom: 12px;
    width: 56px;
    height: 56px;
    background: ${p => p.theme.colors.gray800};
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;

    position: relative;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
    }
`
