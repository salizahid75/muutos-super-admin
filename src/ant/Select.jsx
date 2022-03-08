import { Select } from "antd"
import styled from "styled-components"

const StyledSelect = styled(Select)`
    width: max-content;
    position: relative;

    * {
        font-size: 16px !important;
    }

    .ant-select-selector {
        background: ${p => p.theme.colors.gray800} !important;
        border: none !important;
        color: ${p => p.theme.colors.gray100};
        height: auto !important;
        padding: 0 !important;
    }
    .ant-select-selection-item {
        padding: 12px 16px !important;
        padding-right: 40px !important;
    }
    svg {
        width: 30px;
        height: 30px;
        fill: ${p => p.theme.colors.gray100} !important;
    }

    .ant-select-arrow {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-70%);
    }
`

export default StyledSelect
