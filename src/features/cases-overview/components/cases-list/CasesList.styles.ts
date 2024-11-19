import styled from "styled-components";

export const StyledCasesList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.9375rem 2.5rem; 
    width: 100%; 

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.25rem;
    }

    @media (min-width: 640px) and  (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }
`

