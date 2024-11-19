import styled from "styled-components";
import cardTitleSvg from "/src/assets/cardTitleSvg.svg";

export const StyledCardTitle = styled.h3`
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
`

export const StyledCardTitleSvg = styled.div`
    width: 1.5625rem;
    height: 1.5625rem;
    mask: url(${cardTitleSvg});
    background-color: ${({theme}) => theme.colors.accent};
    position: absolute;
    top: -0.375rem;
    right: -0.375rem;
`

