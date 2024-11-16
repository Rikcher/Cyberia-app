import { useProjects } from "../services/quries";
import { Project } from "../types";
import CaseCard from "./CaseCard";
import StyledCasesList from "../styles/StyledCasesList";
import { caseDescription } from "../../../shared/casesData"; // Instead of project.description
import { filterProjects } from "../utils/filterProjects";
import useFilterStore from "../services/store";
import CasesListPlaceholder from "./ui/CasesListPlaceholder";

const CasesList = () => {
    const { data, isError, isLoading } = useProjects();
    const { selectedFilterId } = useFilterStore();

    if (isLoading) return <CasesListPlaceholder length={6} />;

    if (isError) return <div>Error fetching data</div>;

    const projects = data?.items || [];
    const filteredProjects = filterProjects(projects, selectedFilterId);

    return (
        <StyledCasesList>
            {filteredProjects.map((project: Project) => (
                <CaseCard
                    key={project.id}
                    bgImgUrl={project.image}
                    title={project.title}
                    description={caseDescription}
                />
            ))}
        </StyledCasesList>
    );
};

export default CasesList;
