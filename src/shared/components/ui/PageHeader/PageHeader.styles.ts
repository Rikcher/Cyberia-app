import styled from "styled-components";

const StyledPageHeader = styled.h2<{ $marginBot: number }>`
    font-size: 3rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-bottom: ${({ $marginBot }) => $marginBot}rem;
    max-width: 22.5rem;
`;

export default StyledPageHeader;
