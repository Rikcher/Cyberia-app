import { useProjects } from "../../hooks/useProjects";
import { Project } from "../../types";
import CaseCard from "../case-card/CaseCard";
import { StyledCasesList } from "./CasesList.styles";
import { caseDescription } from "../../../../shared/utils/casesData"; // Instead of project.description
import { filterProjects } from "../../utils/filterProjects";
import useFilterStore from "../../services/store";
import CasesListPlaceholder from "./cases-list-placeholder/CasesListPlaceholder";

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
