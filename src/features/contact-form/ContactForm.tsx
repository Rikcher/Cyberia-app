import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../shared/components/ui/InputField";
import StyledContactForm from "./styles/StyledContactForm";
import Checkbox from "../../shared/components/ui/Checkbox";

interface ContactFormProps {
    marginBot: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ marginBot }) => {
    const methods = useForm();
    return (
        <StyledContactForm $marginBot={marginBot}>
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
        </StyledContactForm>
    );
};

export default ContactForm;
