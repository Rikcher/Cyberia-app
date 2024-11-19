import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../shared/components/ui/input-field/InputField";
import Checkbox from "../../shared/components/ui/checkbox/Checkbox";
import SubmitButton from "../../shared/components/ui/submit-button/SubmitButton";
import { useContactForm } from "./hooks/useContactForm";
import ContactFormEmailField from "./components/ContactFormEmailField";
import ContactFormPhoneField from "./components/ContactFormPhoneField";
import {
    FormWrapper,
    Form,
    FormRow,
    SubmitWrapper,
} from "./ContactForm.styles";
import { useTranslation } from "react-i18next";

interface ContactFormProps {
    marginBot: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ marginBot }) => {
    const methods = useForm();
    const { onSubmit } = useContactForm(methods);
    const { t } = useTranslation();

    return (
        <FormWrapper $marginBot={marginBot}>
            <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormRow>
                        <InputField label={t("name")} name="name" />
                        <ContactFormEmailField />
                        <ContactFormPhoneField />
                    </FormRow>
                    <InputField
                        label={t("message")}
                        name="message"
                        isTextArea
                    />
                    <Checkbox uid="terms-checkbox" label={t("consent")} />
                    <SubmitWrapper>
                        <SubmitButton label={t("submit")} />
                    </SubmitWrapper>
                </Form>
            </FormProvider>
        </FormWrapper>
    );
};

export default ContactForm;
