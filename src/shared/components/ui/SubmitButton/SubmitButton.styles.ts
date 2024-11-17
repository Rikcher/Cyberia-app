import styled, { css } from "styled-components";
import { pulse } from "../../../styles/animations";
import { DoubleCircleHover } from "../../../styles/hoverStyles";


export const StyledLabel = styled.p`
    position: relative;
    z-index: 3;
    transition: scale 0.3s ease-in-out 0.3s;
`

export const StyledSubmitButton = styled.button.attrs({type: "submit"})<{$disabled: boolean}>`
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

    ${DoubleCircleHover}

    &:hover {
        ${StyledLabel} {
            scale: 1.3;
        }
    }
`
