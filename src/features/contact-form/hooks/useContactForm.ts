import { FieldValues, UseFormReturn } from "react-hook-form";
import { useSendFeedback } from "./useSendFeedback"; 
import { showErrorMessages, showError, showSuccess } from "../../../shared/utils/toastUtils";
import { AxiosError } from "axios"; 


export const useContactForm = (methods: UseFormReturn<FieldValues, any, undefined>) => {
    const { mutateAsync } = useSendFeedback();

    const onSubmit = async (data: FieldValues) => {
        try {
            await mutateAsync(data);
            showSuccess('Feedback sent successfully');
            methods.reset()
        } catch (error: unknown) {
            if( error instanceof AxiosError) {
                const errorData = error.response?.data?.errors;
    
                if (errorData) {
                    showErrorMessages(errorData);
                } else {
                    showError('Something went wrong'); 
                }
            } else {
                showError('An unexpected error occurred');
            }
        }
    };

    return { onSubmit };
};
