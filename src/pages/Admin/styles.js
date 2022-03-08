import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100vh;

    width: 100vw;
    background: ${p => p.theme.colors.gray900};
    display: flex;
    align-item: center;
    justify-content: center;

    .forgot-password-btn {
        margin-bottom: 45px;
        display: block;
        margin-left: auto;
    }
`

export const Error = styled.p`
    font-size: 14px;
    margin-top: 6px;
    color: ${p => p.theme.colors.assetRed};
    font-weight: ${p => p.theme.font.weight.regular};
    padding-left: 8px;
`

export const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 40px;

    @media (max-width: ${p => p.theme.media.lg}px) {
        width: 100%;
    }
`

export const LeftInner = styled.form`
    max-width: 536px;
    width: 100%;
`

export const Right = styled.div`
    display: flex;

    align-items: center;
    width: 50%;
    height: 100%;
    background: ${p => p.theme.colors.gray800};
    @media (max-width: ${p => p.theme.media.lg}px) {
        display: none;
    }
`

export const LogoWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 90px;
`
export const InputWrapper = styled.div`
    margin-bottom: 24px;
`
export const Tagline = styled.p`
    text-align: center;
    margin-top: 16px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: ${p => p.theme.font.weight.regular};
    color: ${p => p.theme.colors.gray500};
`

export const CreateAccount = styled.p`
    font-size: 16px;
    color: ${p => p.theme.colors.gray500};
    margin-top: 24px;

    button {
        display: inline-block;
        margin-left: -10px;
    }
`
export const Copyright = styled.p`
    font-size: 16px;
    color: ${p => p.theme.colors.gray500};
    margin-right: auto;
    margin-top: 90px;
`
