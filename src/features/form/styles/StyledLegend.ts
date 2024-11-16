import styled from "styled-components";

const StyledLegend = styled.legend`
    display: block;
    margin-left: 2.125rem; 
    padding: 0 0.9375rem;
    color: ${({theme}) => theme.colors.text}; 
    font-weight: 200;
`;

export default StyledLegend;