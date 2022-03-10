import styled from 'styled-components'


function getStatusColor(status, colors) {
    
    if (status === 0) return colors.assetRed
    else if (status === -1) return colors.assetPink
    else return colors.assetGreen
}

export const DataTable = styled.div`

    margin-top: 2rem;
`

export const Image = styled.img`
    width: 64px;
    border-radius: 16px;
`

export const StatusColor = styled.div`
.ant-select-selector {
    color: ${p => getStatusColor(p.status, p.theme.colors)} !important;
}
    svg {
        fill: ${p => getStatusColor(p.status, p.theme.colors)} !important;
        path {
            fill: ${p => getStatusColor(p.status, p.theme.colors)} !important;
        }
    }
`