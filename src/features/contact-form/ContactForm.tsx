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
import { useWindowSizeStore } from "../../store/useWindowSizeStore";

interface ContactFormProps {
    marginBot: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ marginBot }) => {
    const methods = useForm();
    const { onSubmit } = useContactForm(methods);
    const { t } = useTranslation();
    const { width } = useWindowSizeStore();

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
                    {width > 768 && (
                        <Checkbox uid="terms-checkbox" label={t("consent")} />
                    )}
                    <SubmitWrapper>
                        <SubmitButton
                            label={width > 1280 ? t("submit") : t("send")}
                        />
                    </SubmitWrapper>
                    {width <= 768 && <p>{t("consent_mobile")}</p>}
                </Form>
            </FormProvider>
        </FormWrapper>
    );
};

export default ContactForm;
