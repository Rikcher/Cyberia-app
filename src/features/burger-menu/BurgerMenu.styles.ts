import styled from "styled-components";

export const StyledBurgerMenu = styled.div<{$isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryShade};
    padding-top: 8rem; 
    padding-bottom: 2.5rem; 
    padding-left: 1.5rem; 
    padding-right: 1.5rem;
    z-index: 20;
    transition: all 0.3s ease-in-out;
    opacity: ${({ $isOpen }) =>
        $isOpen ? `1` : `0`};
    top: ${({ $isOpen }) =>
        $isOpen ? `0` : `-20rem`};
    pointer-events: ${({ $isOpen }) =>
        $isOpen ? `auto` : `none`};
`