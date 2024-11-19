import styled from "styled-components";
import Moon from "/src/assets/Moon.svg";
import Sun from "/src/assets/Sun.svg";

export const StyledThemeSwitch = styled.button<{$theme: string}>`
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

export const StyledCircle = styled.div<{$theme: string}>`
    width: 1.75em;
    height: 1.75em;
    border-radius: 50%;
    background: ${({ $theme }) => 
        $theme === 'darkTheme' 
            ? 'linear-gradient(to bottom, rgba(233, 236, 246, 1) 0%, rgba(255, 255, 255, 1) 100%)' 
            : 'linear-gradient(to bottom, #FFBC00 0%, #FFEB6B 100%)'}; 
    margin-left: auto;
    box-shadow: 
        -2.5px -2.5px 8px 0px ${({ $theme }) => ($theme === 'darkTheme' ? 'rgba(250, 251, 255, 0.5)' : 'rgba(255, 215, 0, 0.5)')},  
        2.5px 2.5px 6px 0px ${({ $theme }) => ($theme === 'darkTheme' ? 'rgba(250, 251, 255, 0.5)' : 'rgba(255, 215, 0, 0.5)')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    right: ${({ $theme }) => ($theme === 'darkTheme' ? '0.375em' : '2.75em')};
    transition: right 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
`;



export const StyledMoon = styled.div<{$theme: string}>`
    mask: url(${Moon});
    width: 1em;
    height: 1em;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${({ $theme }) => ($theme === 'darkTheme' ? '#3D4F6C' : 'rgba(56, 68, 102, 0.5)')}; 
    position: absolute;
    top: 50%; 
    right: 0.75em; 
    transform: translateY(-50%);
    z-index: 3;
`;

export const StyledSun = styled.div<{$theme: string}>`
    mask: url(${Sun});
    width: 1em;
    height: 1em;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${({ $theme }) => ($theme === 'darkTheme' ? 'rgba(195, 199, 215, 0.5)' : 'white')}; 
    position: absolute;
    top: 50%; 
    left: 0.75em; 
    transform: translateY(-50%);
    z-index: 3;
`;