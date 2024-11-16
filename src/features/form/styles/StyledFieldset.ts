import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    border: solid 1px;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 8px; 
    position: relative;
    width: 100%;
`;

export default StyledFieldset;