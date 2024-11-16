import styled from "styled-components";

const StyledContactForm = styled.div<{$marginBot: number}>`
    margin-bottom: ${({$marginBot}) => $marginBot}rem;
`
export default StyledContactForm