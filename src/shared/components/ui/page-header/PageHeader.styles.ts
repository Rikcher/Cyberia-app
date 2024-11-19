import styled from "styled-components";
import FeedbackSvg from "/src/assets/FeedbackSvg.svg";

const StyledPageHeader = styled.h2<{ $marginBot: number }>`
    font-size: 3rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-bottom: ${({ $marginBot }) => $marginBot}rem;
    
    p {
        max-width: 22.5rem;
    }

    @media (max-width: 1280px) {
        padding: 0 1.5rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3125rem;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        margin-bottom: 2.875rem;
        padding: 0 1.5rem;

        p {
            max-width: 12.5rem;
        }

        &.full-width-bg{
            font-size: 1.5rem;
            background-color: ${({theme}) => theme.colors.primaryShade};
            padding: 3.125rem 1.5rem 2.25rem 1.5rem;
            margin-bottom: 0;
            max-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.75rem;
        }

        &.full-width-bg::before {
        content: "";
            display: block;
            background-image: url(${FeedbackSvg});
            background-size: contain;
            background-repeat: no-repeat;
            width: 4.75rem;
            height: 4.375rem;
        }
    }
`;

export default StyledPageHeader;
