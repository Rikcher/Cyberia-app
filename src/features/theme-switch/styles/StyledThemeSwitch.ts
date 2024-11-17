import styled from "styled-components";

const StyledThemeSwitch = styled.button<{$theme: string}>`
    min-width: 5rem;
    height: 2.5rem;
    background: ${({ $theme }) => 
        $theme === 'darkTheme'
            ? 'linear-gradient(to bottom, rgba(233, 236, 246, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), #2E303E'
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(233, 236, 246, 0.1) 100%), #F5F7FB'};
    border: 1px solid ${({ $theme }) => ($theme === 'darkTheme' ? '#31333D' : '#D1D6E1')};
    box-sizing: border-box;
    box-shadow: 
        0px 2px 2px 0px ${({ $theme }) => ($theme === 'darkTheme' ? '#111217' : 'rgba(0, 0, 0, 0.1)')},
        inset -2.5px -2.5px 5px 0px ${({ $theme }) => ($theme === 'darkTheme' ? '#21243A' : 'rgba(204, 213, 232, 0.3)')}, 
        inset 2.5px 2.5px 5px 0px ${({ $theme }) => ($theme === 'darkTheme' ? '#1D1F30' : 'rgba(190, 200, 220, 0.3)')};
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease, border 0.3s ease;
    font-size: 1rem;
`;

export default StyledThemeSwitch