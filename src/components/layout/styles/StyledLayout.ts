import styled from "styled-components";

const StyledLayout = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledLayout;
