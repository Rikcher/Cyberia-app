import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #313341;
    width: 100%;
    padding: 7.625rem 1.5rem 8.875rem 1.5rem;
    color: ${({ theme }) => theme.colors.text};

    .inner-container {
        max-width: 77.5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        max-height: 7.25rem;

        .center-part {
            display: flex;
            gap: 3.375rem;
        }
    }
`

export default StyledFooter;