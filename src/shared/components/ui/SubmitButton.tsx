import StyledSubmitButton from "./styles/StyledSubmitButton";

interface SubmitButtonProps {
    label: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    return <StyledSubmitButton>{label}</StyledSubmitButton>;
};

export default SubmitButton;
