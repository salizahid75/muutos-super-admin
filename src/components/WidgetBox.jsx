import styled from "styled-components"
import { DragButton } from "ant"

export default function WidgetBox({ children, heading }) {
    return (
        <Wrapper>
            <HeadingWrapper>
                {heading && <h1>{heading}</h1>}
                <DragButton />
            </HeadingWrapper>
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background: ${p => p.theme.colors.gray800};
    margin-bottom: 30px;
`

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;

    & > div {
        margin-left: auto;
    }

    & > h1 {
        margin: 0;
        font-size: 24px;
        font-weight: ${p => p.theme.font.weight.semiBold};
        color: ${p => p.theme.colors.gray300};
    }
`

const ChildrenWrapper = styled.div``
