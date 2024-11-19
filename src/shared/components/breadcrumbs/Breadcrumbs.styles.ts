import styled from "styled-components";

export const StyledBreadcrumbs = styled.h4`
    color: ${({theme}) => theme.colors.gray};
    margin-bottom: 8.125rem;
    
    @media (max-width: 768px) {
        font-family: "Rubik", sans-serif;
    }

    @media (max-width: 1024px) {
        margin-top: 2.875rem;
        margin-bottom: 1.75rem;
    }

    @media (max-width: 1280px) {
        padding: 0 1.5rem;
    }

    .breadcrumb-current {
        color: ${({theme}) => theme.colors.graySecondary};
        font-size: 0.75rem;
    }
`

