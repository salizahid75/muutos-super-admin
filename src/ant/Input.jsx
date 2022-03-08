import { Input } from "antd"

import styled from "styled-components"

const Styled = styled(Input)`
    background-color: ${p => p.theme.colors.gray800};
    font-size: 16px;
    color: ${p => p.theme.colors.gray50};
    font-weight: ${p => p.theme.font.weight.regular};
    padding: 16px 24px;
    border: none;
    border-radius: 12px;

    width: ${p => p.width || "100%"};

    &::placeholder {
        color: ${p => p.theme.colors.gray600};
    }
`

export const TextArea = styled(Input.TextArea)`
    background-color: ${p => p.theme.colors.gray800};
    font-size: 16px;
    color: ${p => p.theme.colors.gray50};
    font-weight: ${p => p.theme.font.weight.regular};
    padding: 16px 24px;
    border: none;
    border-radius: 12px;
    width: ${p => p.width || "100%"};

    &::placeholder {
        color: ${p => p.theme.colors.gray600};
    }
`

export default Styled
