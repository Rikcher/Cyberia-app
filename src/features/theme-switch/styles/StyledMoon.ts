import styled from "styled-components";
import Moon from "/src/assets/Moon.svg";

const StyledMoon = styled.div<{$theme: string}>`
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

export default StyledMoon;