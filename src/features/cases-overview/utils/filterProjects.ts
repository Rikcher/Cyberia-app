import { Project } from "../types";

export const filterProjects = (projects: Project[], selectedFilterId: number | null): Project[] => {
    return selectedFilterId
        ? projects.filter((project) =>
              project.categories.some((category) => category.id === selectedFilterId)
          )
        : projects;
};
