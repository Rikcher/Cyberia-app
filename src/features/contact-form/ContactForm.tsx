import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../shared/components/ui/InputField/InputField";
import Checkbox from "../../shared/components/ui/Checkbox/Checkbox";
import SubmitButton from "../../shared/components/ui/SubmitButton/SubmitButton";
import { useContactForm } from "./hooks/useContactForm";
import ContactFormEmailField from "./components/ui/ContactFormEmailField";
import ContactFormPhoneField from "./components/ui/ContactFormPhoneField";
import {
    FormWrapper,
    Form,
    FormRow,
    SubmitWrapper,
} from "./styles/ContactForm.styles";

interface ContactFormProps {
    marginBot: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ marginBot }) => {
    const methods = useForm();
    const { onSubmit } = useContactForm();

    return (
        <FormWrapper $marginBot={marginBot}>
            <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormRow>
                        <InputField label="Ваше Имя" name="name" />
                        <ContactFormEmailField />
                        <ContactFormPhoneField />
                    </FormRow>
                    <InputField label="Сообщение" name="message" isTextArea />
                    <Checkbox
                        uid="terms-checkbox"
                        label="Согласие на обработку персональных данных"
                    />
                    <SubmitWrapper>
                        <SubmitButton label="Обсудить проект" />
                    </SubmitWrapper>
                </Form>
            </FormProvider>
        </FormWrapper>
    );
};

export default ContactForm;
