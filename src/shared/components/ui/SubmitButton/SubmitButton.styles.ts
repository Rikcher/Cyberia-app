import styled, { css } from "styled-components";
import { pulse } from "../../../styles/animations";

const StyledSubmitButton = styled.button.attrs({type: "submit"})<{$disabled: boolean}>`
    background-color: ${({theme}) => theme.colors.accent};
    border: none;
    font-family: inherit;
    width: max-content;
    padding: 1.25rem 4rem;
    border-radius: 85px;
    transition: background-color 0.2s ease-in-out;

    animation: ${({ $disabled }) =>
        $disabled && css`${pulse} 1.5s infinite`};

    cursor: ${({ $disabled }) =>
        $disabled ? "now-allowed" : "pointer"};

    color: ${({ $disabled }) =>
        $disabled ? "black" : `white`};

    pointer-events: ${({ $disabled }) =>
        $disabled && "none"};

    &:hover{
        background-color: ${({theme}) => theme.colors.accentHover};
    }
`
export default StyledSubmitButton