import styled from "styled-components";

export const StyledLayout = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledMain = styled.main`
margin: 0 1.5rem;
max-width: 77.5rem;
flex-grow: 1;
width: 100%;
`;

