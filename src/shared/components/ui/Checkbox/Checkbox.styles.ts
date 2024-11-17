import styled from "styled-components";
import check from "/src/assets/Check.svg";

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const StyledBox = styled.input.attrs({ type: "checkbox"})<{$isChecked: boolean}>`
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

export const StyledCheck = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    mask: url(${check});
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({theme}) => theme.colors.primary};
    mask-repeat: no-repeat;
    mask-position: center;
    pointer-events: none;
`

export const StyledLabel = styled.label`
    color: ${({ theme }) => theme.colors.text};
`;
