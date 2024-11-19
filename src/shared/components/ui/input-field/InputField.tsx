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

    return (
        <StyledInputField>
            <StyledFieldset $hasError={!!errors[name]}>
                <StyledLegend>{label}*</StyledLegend>
                {isTextArea ? (
                    <StyledTextArea
                        rows={5}
                        {...register(name, {
                            required: t("empty_input"),
                            ...validationRule,
                        })}
                        placeholder={t(name)}
                    />
                ) : (
                    <StyledInput
                        {...register(name, {
                            required: t("empty_input"),
                            ...validationRule,
                        })}
                        placeholder={t(name)}
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
