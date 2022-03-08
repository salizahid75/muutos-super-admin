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

export const EnableDisable = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    
    & > div {
        margin-left: -15px;
        width: 26px;
        height: 26px;
        background: none;
        border:none;
        padding: 0;

        svg path {
            fill: ${p => p.theme.colors.gray700};
        }

        &.dashed-button-on {
            svg {
                path {
                    fill: ${p => p.theme.colors.assetRed};
                }
            }
        }
    }
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