import { useFormContext } from "react-hook-form";
import { StyledSubmitButton, StyledLabel } from "./SubmitButton.styles";

interface SubmitButtonProps {
    label: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <StyledSubmitButton $disabled={isSubmitting}>
            <StyledLabel>{label}</StyledLabel>
        </StyledSubmitButton>
    );
};

export default SubmitButton;
