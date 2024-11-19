import FiltersList from "./components/filters-list/FiltersList";
import CasesList from "./components/cases-list/CasesList";
import { StyledCasesOverview } from "./CasesOverview.styles";

const CasesOverview: React.FC = () => {
    return (
        <StyledCasesOverview>
            <FiltersList />
            <CasesList />
        </StyledCasesOverview>
    );
};

export default CasesOverview;
