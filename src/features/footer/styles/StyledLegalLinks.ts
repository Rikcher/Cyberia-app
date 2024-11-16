import styled from "styled-components";

const StyledLegalLinks = styled.div`
    max-width: 18.75rem;
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};

        &:hover {
            text-decoration: underline;
        }
    }
`
export default StyledLegalLinks