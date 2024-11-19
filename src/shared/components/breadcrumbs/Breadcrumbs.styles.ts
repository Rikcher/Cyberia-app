import styled from "styled-components";

export const StyledBreadcrumbs = styled.h4`
    color: ${({theme}) => theme.colors.gray};
    margin-bottom: 8.125rem;

    .breadcrumb-current {
        color: ${({theme}) => theme.colors.graySecondary}
    }
`

