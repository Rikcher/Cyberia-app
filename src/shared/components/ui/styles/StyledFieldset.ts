import styled from "styled-components";

const StyledFieldset = styled.fieldset<{$hasError: boolean}>`
    border: solid 1px;
    border-color: ${({ $hasError, theme }) =>
        $hasError ? `${theme.colors.error}` : `${theme.colors.text}`};
    border-radius: 8px; 
    position: relative;
    width: 100%;
`;

export default StyledFieldset;