import styled from "styled-components";

const StyledFooterNav = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5625rem 3.375rem;
    max-height: 7.25rem;

    .nav-link {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};

        &:hover {
            text-decoration: underline;
        }
    }
`

export default StyledFooterNav