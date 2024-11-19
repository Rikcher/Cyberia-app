import styled from "styled-components";

export const StyledEmptyPage = styled.div`
    color: ${({theme}) => theme.colors.text};

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 1280px) {
        padding: 0 1.5rem;
    }
`
