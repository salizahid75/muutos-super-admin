import styled from 'styled-components'

export const ImageTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        margin-bottom: 0 !important;
        margin-left: 20px;
    }
`
export const LikesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: ${p => p.theme.colors.assetPink};

    svg {
        margin-right: 10px;
        path {
            fill: ${p => p.theme.colors.assetPink};
        }
    }
`
