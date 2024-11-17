import styled from "styled-components";

const StyledBreadcrumbsDisplay = styled.h4`
    color: ${({theme}) => theme.colors.gray};
    margin-bottom: 8.125rem;

    .breadcrumb-current {
        color: ${({theme}) => theme.colors.graySecondary}
    }
`

export default StyledBreadcrumbsDisplay;