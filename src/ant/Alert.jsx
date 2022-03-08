import { Alert } from "antd"
import styled from "styled-components"

const Styled = styled(Alert)`
    border: none;
    background: ${p => p.theme.colors.gray800};
    border-radius: 8px;
    padding: 22px;
    margin-bottom: 20px;

    .anticon {
        font-size: 15px;

        svg {
            fill: ${p => p.theme.colors.gray200};
        }
    }

    .ant-alert-message {
        font-size: 20px;
        color: ${p => p.theme.colors.assetRed};
    }
`

export default Styled
