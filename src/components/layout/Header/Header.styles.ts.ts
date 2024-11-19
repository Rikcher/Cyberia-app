import styled from "styled-components";

export const StyledDesktopHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 1.5rem;
    max-width: 77.5rem;

    @media (max-width: 1280px) {
        padding: 0 1.5rem;
    }
`;
export const StyledMobileHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.625rem 1.5rem;
    position: relative;
    background-color: ${({theme}) => theme.colors.primaryDarkerShade};
`;

export const SwitchersWrapper = styled.div`
    display: flex;
    gap: 4rem;
`
