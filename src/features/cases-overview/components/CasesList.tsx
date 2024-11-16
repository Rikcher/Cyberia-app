import { useProjects } from "../services/quries";
import { Project } from "../types";
import CaseCard from "./CaseCard";
import StyledCasesList from "../styles/StyledCasesList";
import { caseDescription } from "../../../shared/casesData"; // Instead of project.description

const CasesList = () => {
    const { data, isError, isLoading } = useProjects();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error fetching data</div>;

    const projects = data.items;
    console.log(projects);

    return (
        <StyledCasesList>
            {projects.map((project: Project) => (
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
