import { Button } from "antd"
import styled from "styled-components"

const Styled = styled(Button)`
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &.ant-btn-primary {
        color: ${p => p.theme.colors.gray900};
        font-weight: ${p => p.theme.font.weight.semiBold};
        padding: 16px;
        height: auto;
        width: ${p => p.width || "100%"};
        &:hover,
        &:active,
        &:focus {
            color: ${p => p.theme.colors.gray900};
        }
    }
    &.ant-btn-secondary {
        background: ${p => p.theme.colors.gray800};
        border: none;
        color: ${p => p.theme.colors.primary};
        font-weight: ${p => p.theme.font.weight.regular};
        padding: 16px;
        height: auto;
        width: ${p => p.width || "100%"};
        &:hover,
        &:active,
        &:focus {
            color: ${p => p.theme.colors.primary};
        }
    }
    &.ant-btn-dashed {
        padding: 16px;
        height: auto;
        width: ${p => p.width || "100%"};
        border-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.primary};

        background: none !important;

        &:hover,
        &:active,
        &:focus {
            background: none !important;
        }
    }
`

export default Styled
