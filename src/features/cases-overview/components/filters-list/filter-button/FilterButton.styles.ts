import styled from "styled-components";

export const StyledCircle = styled.div`
    width: 120px; 
    height: 120px;
    background-color: ${({theme}) => theme.colors.accent};
    border-radius: 50%;
    position: absolute;
    pointer-events: none; 
    transform: translate(-50%, -50%); 
    z-index: 2;
    transition: transform 0.3s ease-in-out; 
`;

export const StyledFilterButton = styled.button`
    box-shadow: 8px 15px 29px 0 rgba(23,27,44,0.41);
    border: none;
    color: ${({theme}) => theme.colors.text};
    font-size: 1.5rem;
    padding: 0.625rem 1.875rem;
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out;

    p {
        position: relative;
        z-index: 3;
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.accent};
    }
`
