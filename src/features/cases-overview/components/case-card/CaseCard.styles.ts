import styled from "styled-components";

export const StyledCardHover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(204,204,204);
    background: linear-gradient(180deg, rgba(204,204,204,0) 20%, rgba(9,11,33,1) 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 1.5625rem 1.875rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        opacity: 1;
        font-size: 0.8125rem;
    }
`
export const StyledCaseCard = styled.div<{$bgImgUrl: string}>`
    background: center / cover no-repeat url(${({$bgImgUrl}) => $bgImgUrl});
    width: 24.1875rem;
    aspect-ratio: 1.021875;
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const StyledDescription = styled.p`
    overflow: hidden;

    @media (max-width: 768px) {
        overflow: unset;
    }

    .letter {
        display: inline-block;
        line-height: 1em;
    }
`