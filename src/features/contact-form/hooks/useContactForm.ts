import { FieldValues } from "react-hook-form";
import { useSendFeedback } from "./useSendFeedback"; 

export const useContactForm = () => {
    const { mutateAsync } = useSendFeedback();

    const onSubmit = async (data: FieldValues) => {
        try {
            await mutateAsync(data);
        } catch (error) {
            console.error("Error submitting feedback", error);
        }
    };

    return { onSubmit };
};
