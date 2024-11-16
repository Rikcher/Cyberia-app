import styled from "styled-components";

const StyledForm = styled.div<{$marginBot: number}>`
    margin-bottom: ${({$marginBot}) => $marginBot}rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`
export default StyledForm