import { useFormContext } from "react-hook-form";
import StyledSubmitButton from "./SubmitButton.styles";

interface SubmitButtonProps {
    label: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <StyledSubmitButton $disabled={isSubmitting}>
            {label}
        </StyledSubmitButton>
    );
};

export default SubmitButton;
