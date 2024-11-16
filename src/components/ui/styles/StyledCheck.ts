import styled from "styled-components";
import check from "/src/assets/Check.svg";

const StyledCheck = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    mask: url(${check});
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({theme}) => theme.colors.text};
    mask-repeat: no-repeat;
    mask-position: center;
    pointer-events: none;
`
export default StyledCheck