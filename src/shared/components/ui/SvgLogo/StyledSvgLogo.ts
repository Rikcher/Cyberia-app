import styled from "styled-components";

const StyledSvgLogo = styled.svg`
    path {
        fill: ${({theme}) => theme.colors.text};
    }

    path:nth-child(9) {
        fill: ${({theme}) => theme.colors.accent};
    }
`

export default StyledSvgLogo;