import styled from "styled-components";
import StyledBaseField from "./StyledBaseField"; 

const StyledTextArea = styled(StyledBaseField).attrs({
    as: "textarea", 
})`
    resize: none;  
`;

export default StyledTextArea;
