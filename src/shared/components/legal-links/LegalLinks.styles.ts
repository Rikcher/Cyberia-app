import styled from "styled-components";

export const StyledLegalLinks = styled.ul`
    list-style-type: none;

    li {
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.text};
    
            &:hover {
                text-decoration: underline;
            }
        }
    }
`