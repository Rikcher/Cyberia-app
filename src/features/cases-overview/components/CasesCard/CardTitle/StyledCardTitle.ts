import styled from "styled-components";

const StyledCardTitle = styled.h3`
    width: 8rem;
    height: 8rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 1.4375rem;
    right: 1.6875rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`
export default StyledCardTitle