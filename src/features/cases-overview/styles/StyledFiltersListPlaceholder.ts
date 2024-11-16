import styled from "styled-components";
import { pulse } from "../../../shared/styles/animations";

const StyledFiltersListPlaceholder = styled.div`
    width: 15.625rem;
    height: 3.125rem;
    border-radius: 7px;
    animation: ${pulse} 1.5s infinite;
`;

export default StyledFiltersListPlaceholder;