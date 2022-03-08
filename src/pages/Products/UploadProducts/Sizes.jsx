import styled from "styled-components"

import { sizes } from "./data"

import { DashedButton } from "ant"

export default function Sizes({ onChange }) {
    return (
        <Wrapper>
            {Object.entries(sizes).map(([name, value]) => {
                return (
                    <DashedButton
                        onChange={status => onChange([value, status])}
                        style={{ marginRight: "20px", marginBottom: "20px" }}>
                        {name}
                    </DashedButton>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`
