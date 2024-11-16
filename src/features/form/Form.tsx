import { FormProvider, useForm } from "react-hook-form";
import InputField from "./components/InputField";
import StyledForm from "./styles/StyledForm";
import Checkbox from "../../components/ui/Checkbox";

interface FormProps {
    marginBot: number;
}

const Form: React.FC<FormProps> = ({ marginBot }) => {
    const methods = useForm();
    return (
        <StyledForm $marginBot={marginBot}>
            <FormProvider {...methods}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "2.5rem",
                    }}
                >
                    <InputField label="Ваше Имя" />
                    <InputField label="Email" />
                    <InputField label="Телефон" />
                </div>
                <InputField label="Сообщение" isTextArea />
                <Checkbox
                    uid="terms-checkbox"
                    label="Согласие на обработку персональных данных"
                />
            </FormProvider>
        </StyledForm>
    );
};

export default Form;
