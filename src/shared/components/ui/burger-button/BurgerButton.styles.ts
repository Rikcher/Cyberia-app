import styled from "styled-components";

interface BurgerSpanProps {
    $isMenuOpen: boolean;
    $index: number;
}

export const BurgerButtonWrapper = styled.button`
    position: relative;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 2.75rem;
    padding: 0.75rem 0.25rem;
    cursor: pointer;
    background: transparent;
    border: none;
`;

export const BurgerSpan = styled.span<BurgerSpanProps>`
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: white;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;

    ${(props) =>
        props.$index === 0 && 
        `
        transform-origin: top right;
        transform: ${props.$isMenuOpen ? "rotate(-42deg)" : "none"};
    `}

    ${(props) =>
        props.$index === 1 && 
        `
        opacity: ${props.$isMenuOpen ? "0" : "1"};
    `}

    ${(props) =>
        props.$index === 2 && 
        `
        transform-origin: bottom right;
        transform: ${props.$isMenuOpen ? "rotate(42deg)" : "none"};
    `}
`;
