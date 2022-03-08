import styled from "styled-components"
import { HexColorPicker } from "react-colorful"
import { useState, useEffect } from "react"

import { Modal, ColorSvg } from "ant"

import { ReactComponent as CancelIcon } from "assets/icons/Close/Close-1.svg"

export default function ColorPicker({ visible, onDone }) {
    const [color, setColor] = useState("#ffffff")

    useEffect(() => {
        if (!visible) setColor("#ffffff")
    }, [visible])

    return (
        <Modal
            closeIcon={
                <ColorSvg color='gray100'>
                    <CancelIcon />
                </ColorSvg>
            }
            centered
            visible={visible}
            onOk={() => onDone(color)}
            onCancel={() => onDone(null)}>
            <PickerResponsive>
                <HexColorPicker color={color} onChange={setColor} />
            </PickerResponsive>
        </Modal>
    )
}

const PickerResponsive = styled.div`
    .react-colorful {
        width: auto;
    }
`
