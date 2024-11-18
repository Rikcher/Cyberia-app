import styled from "styled-components";
import arrowLeft from "/src/assets/ArrowLeft.svg";

export const StyledSelectedService = styled.div<{$isFaded: boolean}>`
    width: 25rem;
    height: 31.25rem;
    background-color: ${({theme}) => theme.colors.text};
    position: absolute;
    right: 5%;
    top: 20%;
    border-radius: 20px;
    opacity: ${({ $isFaded }) => ($isFaded ? "1" : "0")};
    transform: ${({ $isFaded }) => ($isFaded ? "translateY(0)" : "translateY(-10%)")};
    transition: opacity 1.5s ease-in-out 6s, transform 1.5s ease-in-out 6s; 
    box-shadow: 0 0 29px 10px rgba(23,27,44,0.41);
    padding: 2.5rem 1.875rem;
`

export const StyledHoverTip = styled.div`
    margin: auto 0 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        width: 2.5rem;
        height: 1rem;
        mask: url(${arrowLeft});
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        background-color: ${({theme}) => theme.colors.accent};
    }
    p {
        color: ${({theme}) => theme.colors.primary};
    }
`

export const InformationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    text-align: left;
    text-wrap: pretty;
    overflow: hidden;

    h2 {
        font-size: 30px;
        font-weight: 600;
        color: ${({theme}) => theme.colors.accent};
        margin-bottom: 40px;
    }

    p {
        line-height: 30px;
        color: ${({theme}) => theme.colors.primary};
    }
`