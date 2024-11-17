import styled from "styled-components";
import logo from "/src/assets/Logo.svg";

const StyledLogo = styled.div<{$width: number}>`
    width: ${({$width}) => $width}rem;
    aspect-ratio: 4.6;
    mask: url(${logo});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${({theme}) => theme.colors.text};
`

export default StyledLogo;