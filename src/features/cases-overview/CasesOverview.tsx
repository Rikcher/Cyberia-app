import Filters from "./components/Filters";
import CasesList from "./components/CasesList";

interface CasesOverviewProps {
    marginBot: number;
}

const CasesOverview: React.FC<CasesOverviewProps> = ({ marginBot }) => {
    return (
        <div style={{ marginBottom: `${marginBot}rem` }}>
            <Filters />
            <CasesList />
        </div>
    );
};

export default CasesOverview;
