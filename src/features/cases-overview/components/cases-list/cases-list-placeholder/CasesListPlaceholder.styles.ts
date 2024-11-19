import styled from "styled-components";
import { pulse } from "../../../../../shared/styles/animations"; 

export const StyledCasesListPlaceholder = styled.div`
    width: 24.1875rem;
    aspect-ratio: 1.021875;
    border-radius: 12px;
    animation: ${pulse} 1.5s infinite;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

