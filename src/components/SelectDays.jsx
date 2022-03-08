import DashedButton from "ant/DashedButton"
import styled from "styled-components"

const DAYS = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"]

export default function SelectDays() {
    return (
        <Wrapper>
            {DAYS.map(d => (
                <DayWrapper>
                    <DashedButton>{d}</DashedButton>
                </DayWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const DayWrapper = styled.div`
    margin-right: 10px;

    & > div {
        color: ${p => p.theme.colors.gray700};
        width: auto;
        height: auto;
        padding: 0;
        border: none;
        text-transform: capitalize;

        &.dashed-button-on {
            color: ${p => p.theme.colors.gray300};
        }
    }
`
