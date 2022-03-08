import { DatePicker } from "antd"
import styled from "styled-components"

const Styled = styled(DatePicker)`
    background-color: ${p => p.theme.colors.gray800};
    padding: 16px 24px;
    border: none;
    border-radius: 12px;

    width: ${p => p.width || "100%"};

    input {
        color: ${p => p.theme.colors.gray50};
        font-size: 16px;
        font-weight: ${p => p.theme.font.weight.regular};
    }

    input::placeholder {
        color: ${p => p.theme.colors.gray600};
    }

    .ant-picker-clear {
        background: none;
    }

    .anticon-calendar svg {
        fill: ${p => p.theme.colors.gray600};
    }

    .anticon-close-circle svg {
        fill: ${p => p.theme.colors.gray50};
    }
`

export default Styled
