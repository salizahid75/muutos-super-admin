
import styled from 'styled-components'


export default function Container({ children }) {
    return <Wrapper>
        {children}
    </Wrapper>
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 420px;
    grid-column-gap: 40px;
`