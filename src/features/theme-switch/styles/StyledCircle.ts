import styled from "styled-components";

const StyledCircle = styled.div<{$theme: string}>`
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
export default StyledCircle