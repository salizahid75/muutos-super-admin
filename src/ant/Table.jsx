import { Table } from "antd"
import styled from "styled-components"

const StyledTable = styled(Table)`
    .ant-table-thead > tr > th {
        font-size: 16px;
        color: ${p => p.theme.colors.gray400};
        font-weight: ${p => p.theme.font.weight.semiBold} !important;
        background: ${props => props.theme.colors.gray900};
        border: none !important;
        text-align:left;
    }

    .ant-table {
        background: ${props => props.theme.colors.gray900};
        font-size: 19px;
        color: ${p => p.theme.colors.gray300};
        font-weight: ${p => p.theme.font.weight.regular};

        *:not(.ant-select *, button, .allow-background) {
            background: none !important;
        }
    }

    .ant-table-tbody > tr > td {
        
        text-align:left;
        border: none !important;
    }
`

export default StyledTable
