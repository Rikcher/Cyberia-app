import styled from "styled-components";
import { pulse } from "../../../shared/styles/animations";

const StyledCasesListPlaceholder = styled.div`
    width: 24.1875rem;
    height: 23.625rem;
    border-radius: 12px;
    animation: ${pulse} 1.5s infinite;
`;

export default StyledCasesListPlaceholder;