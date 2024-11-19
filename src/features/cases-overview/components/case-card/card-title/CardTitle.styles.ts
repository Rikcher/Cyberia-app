import styled from "styled-components";
import cardTitleSvg from "/src/assets/cardTitleSvg.svg";

export const StyledCardTitle = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 1.4375rem;
    right: 1.6875rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        background-color: transparent;
        font-family: "Rubik", sans-serif;
        font-size: 1.125rem;
        position: relative;
        width: auto;
        height: auto;
        display: block;
        text-align: left;
        top: 0;
        right: 0;
        margin-bottom: 0.375rem;
        font-weight: 400;
    }
`

export const StyledCardTitleSvg = styled.div`
    width: 1.5625rem;
    height: 1.5625rem;
    mask: url(${cardTitleSvg});
    background-color: ${({theme}) => theme.colors.accent};
    position: absolute;
    top: -0.375rem;
    right: -0.375rem;

    @media (max-width: 768px) {
        background-color: ${({theme}) => theme.colors.text};
        top: -2.25rem;
        left: 0;
    }
`

