import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { postData } from '../api/api';

export const useGenericMutation = <T>(
    queryKey: string,
    url: string,
): UseMutationResult<T, unknown, Record<string, any>, unknown> => {
    return useMutation({
        mutationKey: [queryKey],
        mutationFn: (data: Record<string, any>) => postData<T>(url, data),
        onSuccess: (data) => {
            console.log(data)
        },
    });
};
