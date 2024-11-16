import { useGenericQuery } from '../../../services/queries/queries';
import { Project } from '../types';

export const useProjects = () => {
    return useGenericQuery<{ items: Project[] }>('projects', '/projects');
};
