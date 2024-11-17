import { toast } from "sonner";

export const showErrorMessages = (errorData: Record<string, string[]>) => {
    Object.entries(errorData).forEach(([_, messages]) => {
        const messageArray = messages as string[];

        messageArray.forEach((message: string) => {
            toast.error(message);
        });
    });
};

export const showError = (message: string) => {
    toast.error(message);
};

export const showSuccess = (message: string) => {
    toast.success(message);
};
