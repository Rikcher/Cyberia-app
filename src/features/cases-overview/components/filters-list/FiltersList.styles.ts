import styled from "styled-components";

export const StyledFiltersList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.25rem;
    gap: 5rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 0.5rem;
        margin-bottom: 2.625rem;
    }
`

