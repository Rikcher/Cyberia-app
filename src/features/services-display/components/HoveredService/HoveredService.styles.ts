import styled from "styled-components";
import hoveredServiceCornerSvg from "/src/assets/hoveredServiceCornerSvg.svg";

export const StyledHoveredService = styled.div<{$isHovered: boolean, $maxWidth: number}>`
    position: absolute;
    left: 30%;
    top: 9%;
    overflow: hidden;
    width: ${({ $isHovered, $maxWidth }) => ($isHovered ? `calc(${$maxWidth}px + 0.9375rem * 3)` : "0px")};
    transition: width 0.2s ease-in-out;
    user-select: none;
    
    .svg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2.1875rem;
        height: 2.1875rem;
        mask: url(${hoveredServiceCornerSvg});
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        background-color: ${({theme}) => theme.colors.text};
    }
`
export const StyledHoveredServiceWrapper = styled.div`
    font-size: 0.875rem;
    background-color: white;
    border-radius: 6px;
    margin: 0 0 0.9375rem 0.9375rem;
    padding: 0.625rem 0.9375rem;

    p {
        text-wrap: nowrap;
    }
`