import styled from "styled-components";
import CircleTextSvg from "/src/assets/CircleTextSvg.svg";
import { rotate } from "../../shared/styles/animations"; 


export const CanvasWrapper = styled.div`
    height: 50rem;
`

export const StyledCanvas = styled.canvas<{$isHovered: boolean}>`
    width: 100vw !important;
    max-width: 100% !important;
    height: 50rem !important;
    position: absolute;
    top: 0;
    left: 0;
    cursor: ${({ $isHovered }) =>
        $isHovered ? "pointer !important" : "default"};
`

export const StyledCircleTextWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    position: relative;
`
export const StyledCircleText = styled.div<{$isFaded: boolean}>`
    width: 31.25rem;
    height: 31.25rem;
    mask: url(${CircleTextSvg});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${({theme}) => theme.colors.text};
    transform: translateY(50%);
    animation: ${rotate} 40s linear infinite;
    opacity: ${({ $isFaded }) => ($isFaded ? "0" : "1")};
    transition: opacity 0.7s ease-in-out; 
`