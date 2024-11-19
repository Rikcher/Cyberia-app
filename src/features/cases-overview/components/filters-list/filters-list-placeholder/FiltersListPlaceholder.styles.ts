import styled from "styled-components";
import { pulse } from "../../../../../shared/styles/animations"; 

export const StyledFiltersListPlaceholder = styled.div`
    width: 100%;
    height: 3.125rem;
    border-radius: 7px;
    animation: ${pulse} 1.5s infinite;

    @media (max-width: 768px) {
        height: 2rem;
    }
`;

