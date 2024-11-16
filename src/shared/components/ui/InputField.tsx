import StyledFieldset from "./styles/StyledFieldset";
import StyledInputField from "./styles/StyledInputField";
import StyledLegend from "./styles/StyledLegend";
import StyledTextArea from "./styles/StyledTextArea";

interface InputFieldProps {
    label: string;
    isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, isTextArea }) => {
    return (
        <StyledFieldset>
            <StyledLegend>{label}*</StyledLegend>
            {isTextArea ? <StyledTextArea rows={5} /> : <StyledInputField />}
        </StyledFieldset>
    );
};

export default InputField;
