import { useState, useEffect } from "react"

import styled from "styled-components"

export default function DashedButton({
    children,
    onChange = () => {},
    style = {},
    activeBackground = null,
    activeForeground = null,
    inactiveBackground = null,
    inactiveForeground = null,
}) {
    const [status, setStatus] = useState(false)

    useEffect(() => onChange(status), [status])

    return (
        <Wrapper
            className={`dashed-button-${status ? "on" : "off"}`}
            activeBackground={activeBackground}
            activeForeground={activeForeground}
            inactiveBackground={inactiveBackground}
            inactiveForeground={inactiveForeground}
            style={style}
            status={status}
            onClick={() => setStatus(!status)}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 16px;
    font-size: 16px;
    background: ${p =>
        p.status
            ? p.theme.colors[p.activeBackground] || p.theme.colors.gray800
            : p.theme.colors[p.inactiveBackground] || "none"};
    font-weight: ${p => p.theme.font.weight.regular};
    color: ${p =>
        p.status
            ? p.theme.colors[p.activeForeground] || p.theme.colors.primary
            : p.theme.colors[p.inactiveForeground] || p.theme.colors.gray300};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed ${p => p.theme.colors.gray800};
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
`
