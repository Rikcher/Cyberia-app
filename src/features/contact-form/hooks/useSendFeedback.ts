import { useGenericMutation } from "../../../services/mutations/mutations";
export const useSendFeedback = () => {
    return useGenericMutation('feedback', '/feedbacks');
};
