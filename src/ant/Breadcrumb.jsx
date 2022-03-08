import { Breadcrumb } from "antd"
import styled from "styled-components"

const StyledBreadcrumb = styled(Breadcrumb)`
    color: ${p => p.theme.colors.gray200};
    font-size: 16px;

    .ant-breadcrumb-separator {
        color: ${p => p.theme.colors.gray400};
    }

    .ant-breadcrumb-link {
        cursor: pointer;
    }

    span:last-child {
        color: ${p => p.theme.colors.gray400};
    }
`

export default StyledBreadcrumb
