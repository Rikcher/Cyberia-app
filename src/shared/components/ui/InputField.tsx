import { useFormContext } from "react-hook-form";
import StyledFieldset from "./styles/StyledFieldset";
import StyledInputField from "./styles/StyledInputField";
import StyledLegend from "./styles/StyledLegend";
import StyledTextArea from "./styles/StyledTextArea";

interface InputFieldProps {
    label: string;
    name: string;
    isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, isTextArea, name }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <StyledFieldset>
            <StyledLegend>{label}*</StyledLegend>
            {isTextArea ? (
                <StyledTextArea rows={5} />
            ) : (
                <StyledInputField {...register(name)} />
            )}
        </StyledFieldset>
    );
};

export default InputField;
