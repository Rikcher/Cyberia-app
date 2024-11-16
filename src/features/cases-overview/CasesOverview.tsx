import FiltersList from "./components/FiltersList";
import CasesList from "./components/CasesList";

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
