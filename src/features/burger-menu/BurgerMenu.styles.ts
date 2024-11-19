import styled from "styled-components";
import ContactDetails from "../../shared/components/contact-details/ContactDetails";

export const StyledBurgerMenu = styled.div<{$isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryShade};
    padding: 8rem 2.5rem 1.5rem 1.5rem; 
    z-index: 20;
    transition: all 0.3s ease-in-out;
    opacity: ${({ $isOpen }) =>
        $isOpen ? `1` : `0`};
    top: ${({ $isOpen }) =>
        $isOpen ? `0` : `-20rem`};
    pointer-events: ${({ $isOpen }) =>
        $isOpen ? `auto` : `none`};
`

export const StyledBurgerNav = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 1.875rem;

    .nav-link {
        text-decoration: none;
        color: ${({theme}) => theme.colors.text};
        font-size: 1.125rem;
    }
`

export const StyledLine = styled.div`
    height: 2px;
    width: 100%;
    border-radius: 999px;
    background-color: #2B2D3A;
    margin: 2.75rem 0  2.25rem 0;
`

export const StyledBurgerMenuHeader = styled.h4`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.125rem;
    margin-bottom: 2.75rem;
`

export const StyledBurgerMenuContactDetails = styled(ContactDetails)`
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    gap: 1.25rem;

    li {
        color: ${({ theme }) => theme.colors.graySecondary};
        font-size: 1rem;
    }
`