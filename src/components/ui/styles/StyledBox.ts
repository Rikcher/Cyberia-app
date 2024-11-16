import styled from "styled-components";

const StyledBox = styled.input.attrs({ type: "checkbox"})<{$isChecked: boolean}>`
    cursor: pointer;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: ${({ $isChecked, theme }) =>
        $isChecked ? "none" : `1px solid ${theme.colors.text}`};
    border-radius: 2px;
    outline: none;
    margin: 0;
    background: ${({ $isChecked, theme }) =>
        $isChecked ? theme.colors.accent : "transparent"};
`
export default StyledBox