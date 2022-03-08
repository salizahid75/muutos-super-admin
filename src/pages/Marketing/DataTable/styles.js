import styled from "styled-components"

export const Block = styled.div`
    border-bottom: 2px solid ${p => p.theme.colors.gray800};
    padding-bottom: 20px;

    margin-bottom: 35px;

    & > p {
        font-size: 16px;
        color: ${p => p.theme.colors.gray500};
    }
`

export const Image = styled.img`
    width: 64px;
    border-radius: 16px;
`

export const ItemsFlex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > * {
        width: 50%;

        &:first-child {
            margin-right: 20px;
        }
    }
`
