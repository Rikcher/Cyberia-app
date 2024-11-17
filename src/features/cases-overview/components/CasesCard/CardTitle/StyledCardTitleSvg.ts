import styled from "styled-components";
import cardTitleSvg from "/src/assets/cardTitleSvg.svg";

const StyledCardTitleSvg = styled.div`
    width: 1.5625rem;
    height: 1.5625rem;
    mask: url(${cardTitleSvg});
    background-color: ${({theme}) => theme.colors.accent};
    position: absolute;
    top: -0.375rem;
    right: -0.375rem;
`

export default StyledCardTitleSvg;