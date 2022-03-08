import styled from "styled-components"
import { Checkbox } from "antd"

const Styled = styled(Checkbox)`
    color: ${p => p.theme.colors.gray300};
    font-size: 20px;
    margin-left: 0 !important;
    .ant-checkbox-inner {
        margin-right: 10px;
        transform: scale(1.4);
        background: none;
        border-radius: 5px;
        border-color: ${p => p.theme.colors.gray700};
    }

    .ant-checkbox-checked .ant-checkbox-inner {
        background: ${p => p.theme.colors.primary} !important;
    }
`
export default Styled
