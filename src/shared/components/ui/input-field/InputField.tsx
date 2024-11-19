import { useFormContext } from "react-hook-form";
import {
    StyledFieldset,
    StyledInput,
    StyledInputError,
    StyledInputField,
    StyledLegend,
    StyledTextArea,
} from "./InputField.styles";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const registerProps = register(name, {
        required: t("empty_input"),
        ...validationRule,
    });

    return (
        <StyledInputField>
            <StyledFieldset $hasError={!!errors[name]}>
                <StyledLegend>{label}*</StyledLegend>
                {isTextArea ? (
                    <StyledTextArea
                        rows={5}
                        {...registerProps}
                        placeholder={t(name)}
                        aria-label={name}
                    />
                ) : (
                    <StyledInput
                        {...registerProps}
                        placeholder={t(name)}
                        aria-label={name}
                    />
                )}
            </StyledFieldset>
            {errors[name] && (
                <StyledInputError
                    aria-label={`${name}-error`}
                >{`${errors[name].message}`}</StyledInputError>
            )}
        </StyledInputField>
    );
};

export default InputField;
