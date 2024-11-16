import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchData } from '../api/api'; 

export const useGenericQuery = <T>(
    queryKey: string, 
    url: string, 
): UseQueryResult<T> => {
    return useQuery({
        queryKey: [queryKey],
        queryFn: () => fetchData<T>(url),  
        refetchOnWindowFocus: false,
    });
};
