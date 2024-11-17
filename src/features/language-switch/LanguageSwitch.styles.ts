import styled from "styled-components";

export const LanguageSwitchStyled = styled.button`
    border: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
`

export const StyledLanguage = styled.span<{$isActive: boolean}>`
    color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.accent : theme.colors.text};
`