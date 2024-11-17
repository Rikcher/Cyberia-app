import styled from "styled-components";

const StyledFilterButton = styled.button`
    box-shadow: 8px 15px 29px 0 rgba(23,27,44,0.41);
    border: none;
    color: ${({theme}) => theme.colors.text};
    font-size: 1.5rem;
    padding: 0.625rem 1.875rem;
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.primary};
    cursor: pointer;

    &:not(.active):hover {
        color: ${({ theme }) => theme.colors.accent};
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.accent};
    }
`

export default StyledFilterButton;