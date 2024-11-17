import styled from "styled-components";

const StyledSubmitButton = styled.button.attrs({type: "submit"})`
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.accent};
    border: none;
    width: max-content;
    padding: 1.25rem 4rem;
    border-radius: 85px;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.accentHover};
    }
`
export default StyledSubmitButton