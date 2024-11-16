import styled from "styled-components";

const StyledContactForm = styled.div<{$marginBot: number}>`
    margin-bottom: ${({$marginBot}) => $marginBot}rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`
export default StyledContactForm