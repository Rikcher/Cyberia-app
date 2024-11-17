import { useFormContext } from "react-hook-form";
import StyledFieldset from "./styles/StyledFieldset";
import StyledInput from "./styles/StyledInput";
import StyledLegend from "./styles/StyledLegend";
import StyledTextArea from "./styles/StyledTextArea";
import StyledInputField from "./styles/StyledInputField";
import StyledInputError from "./styles/StyledInputError";

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
        <StyledInputField>
            <StyledFieldset $hasError={!!errors[name]}>
                <StyledLegend>{label}*</StyledLegend>
                {isTextArea ? (
                    <StyledTextArea
                        rows={5}
                        {...register(name, {
                            required: "Please fill in this field",
                        })}
                    />
                ) : (
                    <StyledInput
                        {...register(name, {
                            required: "Please fill in this field",
                        })}
                    />
                )}
            </StyledFieldset>
            {errors[name] && (
                <StyledInputError>{`${errors[name].message}`}</StyledInputError>
            )}
        </StyledInputField>
    );
};

export default InputField;
