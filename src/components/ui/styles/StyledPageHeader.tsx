import styled from "styled-components";

const StyledPageHeader = styled.h2<{ $marginBot: number }>`
    font-size: 3rem;
    font-weight: 600;
    color: #eef3ff;
    margin-bottom: ${({ $marginBot }) => $marginBot}rem;
`;

export default StyledPageHeader;
