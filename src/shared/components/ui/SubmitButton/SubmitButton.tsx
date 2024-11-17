import StyledSubmitButton from "./SubmitButton.styles";

interface SubmitButtonProps {
    label: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    return <StyledSubmitButton>{label}</StyledSubmitButton>;
};

export default SubmitButton;
