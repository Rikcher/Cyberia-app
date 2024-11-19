import styled from "styled-components";

const StyledPageHeader = styled.h2<{ $marginBot: number }>`
    font-size: 3rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-bottom: ${({ $marginBot }) => $marginBot}rem;
    max-width: 22.5rem;

    @media (max-width: 768px) {
        font-size: 1.3125rem;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        margin-bottom: 2.875rem;
    }
`;

export default StyledPageHeader;
