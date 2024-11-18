import styled from "styled-components";

const StyledCircle = styled.div`
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

export default StyledCircle;
