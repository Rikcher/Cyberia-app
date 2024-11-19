import { FieldValues, UseFormReturn } from "react-hook-form";
import { useSendFeedback } from "./useSendFeedback"; 
import { showSuccess } from "../../../shared/utils/toastUtils";
import { useHandleError } from "../../../shared/hooks/useHandleError"; 


export const useContactForm = (methods: UseFormReturn<FieldValues, any, undefined>) => {
    const { mutateAsync } = useSendFeedback();
    const { handleError } = useHandleError();  

    const onSubmit = async (data: FieldValues) => {
        try {
            await mutateAsync(data);
            showSuccess('Feedback sent successfully');
            methods.reset()
        } catch (error: unknown) {
            handleError(error)
        }
    };

    return { onSubmit };
};
