import { useFormContext } from "react-hook-form";
import { StyledSubmitButton, StyledLabel } from "./SubmitButton.styles";

interface SubmitButtonProps {
    label: string;
    ariaLabel?: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ label, ariaLabel }) => {
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <StyledSubmitButton
            disabled={isSubmitting}
            $disabled={isSubmitting}
            aria-label={ariaLabel}
        >
            <StyledLabel>{label}</StyledLabel>
        </StyledSubmitButton>
    );
};

export default SubmitButton;
