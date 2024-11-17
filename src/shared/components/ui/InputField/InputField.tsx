import { useFormContext } from "react-hook-form";
import {
    StyledFieldset,
    StyledInput,
    StyledInputError,
    StyledInputField,
    StyledLegend,
    StyledTextArea,
} from "./InputField.styles";

interface InputFieldProps {
    label: string;
    name: string;
    isTextArea?: boolean;
    validationRule?: { pattern: { value: RegExp; message: string } };
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    isTextArea,
    name,
    validationRule,
}) => {
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
                            ...validationRule,
                        })}
                    />
                ) : (
                    <StyledInput
                        {...register(name, {
                            required: "Please fill in this field",
                            ...validationRule,
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
