import FiltersList from "./components/FiltersList/FiltersList";
import CasesList from "./components/CasesList/CasesList";

interface CasesOverviewProps {
    marginBot: number;
}

const CasesOverview: React.FC<CasesOverviewProps> = ({ marginBot }) => {
    return (
        <div style={{ marginBottom: `${marginBot}rem` }}>
            <FiltersList />
            <CasesList />
        </div>
    );
};

export default CasesOverview;
