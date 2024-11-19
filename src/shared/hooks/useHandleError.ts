import { showErrorMessages, showError } from "../utils/toastUtils"; 
import { AxiosError } from "axios";

export const useHandleError = () => {
    const handleError = (error: unknown) => {
        if (error instanceof AxiosError) {
            const errorData = error.response?.data?.errors;

            if (errorData) {
                showErrorMessages(errorData);
            } else {
                showError("Something went wrong");
            }
        } else {
            showError("An unexpected error occurred");
        }
    };

    return { handleError };
};
