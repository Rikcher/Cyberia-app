import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getProjectCategories, getProject } from './api';
import { Project, Filter } from '../types';


export const useFilters = (): UseQueryResult<{ items: Filter[] }> => {
    return useQuery({
        queryKey: ['filters'],
        queryFn: () => getProjectCategories(),
        refetchOnWindowFocus: false,
    });
};

export const useProjects = (): UseQueryResult<{ items: Project[] }> => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProject(),
        refetchOnWindowFocus: false,
    });
};
