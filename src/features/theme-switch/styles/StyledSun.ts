import styled from "styled-components";
import Sun from "/src/assets/Sun.svg";

const StyledSun = styled.div<{$theme: string}>`
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
export default StyledSun