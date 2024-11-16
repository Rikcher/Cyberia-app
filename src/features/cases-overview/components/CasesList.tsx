import { useProjects } from "../services/quries";

const CasesList = () => {
    const { data, isError, isLoading } = useProjects();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error fetching data</div>;

    const projects = data.items;
    console.log(projects);

    return <div>CasesList</div>;
};

export default CasesList;
