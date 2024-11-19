import styled from "styled-components";

export const StyledFieldset = styled.fieldset<{$hasError: boolean}>`
    border: solid 1px;
    border-color: ${({ $hasError, theme }) =>
        $hasError ? `${theme.colors.error}` : `${theme.colors.text}`};
    border-radius: 8px; 
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 0.375rem 1.25rem 1rem 1.25rem;
    color: ${({theme}) => theme.colors.text};
    font-size: inherit;
`;

export const StyledInputError = styled.p`
    color: ${({theme}) => theme.colors.error};
    font-size: 0.875rem;
    margin: 0.375rem 0.625rem;
`;

export const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledLegend = styled.legend`
    display: block;
    margin-left: 2.125rem; 
    padding: 0 0.9375rem;
    color: ${({theme}) => theme.colors.text}; 
    font-weight: 200;
`;

export const StyledTextArea = styled.textarea`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 0.375rem 1.25rem 1rem 1.25rem;
    color: ${({theme}) => theme.colors.text};
    font-size: inherit;
    resize: none;
`;
