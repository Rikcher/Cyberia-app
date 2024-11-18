import styled from "styled-components";

const StyledEmptyPage = styled.div`
    color: ${({theme}) => theme.colors.text};

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
`
export default StyledEmptyPage