import styled from "styled-components";

export const StyledCasesList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.9375rem 2.5rem; 
    width: 100%; 

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.25rem;
    }
`

