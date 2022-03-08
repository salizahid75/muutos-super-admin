import { Modal } from "antd"

import styled from "styled-components"

const StyledModal = styled(Modal)`
    width: 710px !important;

    .ant-modal-content {
        background-color: ${p => p.theme.colors.gray800};
        padding: 32px 40px;
        border-radius: 12px;
    }
    .ant-modal-close-x span svg {
        fill: ${p => p.theme.colors.gray300};
    }

    .ant-modal-footer {
        border: none;
        ${p => (p.removeFooter ? "display: none;" : "")}

        button {
            color: ${p => p.theme.colors.gray900};
            font-weight: ${p => p.theme.font.weight.semiBold};
            padding: 10px 0px;
            height: auto;
            width: 100px;
            &:hover,
            &:active,
            &:focus {
                color: ${p => p.theme.colors.gray900};
            }
        }
        button.ant-btn:not(button.ant-btn-primary) {
            background: ${p => p.theme.colors.gray700} !important;
            border-color: ${p => p.theme.colors.gray700};
            color: ${p => p.theme.colors.gray100};
        }
    }
`

export default StyledModal
