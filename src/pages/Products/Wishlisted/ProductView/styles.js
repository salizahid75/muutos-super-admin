import styled from "styled-components"

function getStatusColor(status, colors) {
  if (status === 0) return colors.assetRed
  else if (status === -1) return colors.assetPink
  else return colors.assetGreen
}

export const DataTable = styled.div`
  margin-top: 2rem;
`

export const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  overflow: hidden;
  img {
    // width: 100%;
    height: 100%;
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
