import { FieldValues, FormProvider, useForm } from "react-hook-form";
import InputField from "../../shared/components/ui/InputField";
import Checkbox from "../../shared/components/ui/Checkbox";
import SubmitButton from "../../shared/components/ui/SubmitButton";
import { useSendFeedback } from "./hooks/useSendFeedback";
import { EMAIL_REGEX, PHONE_REGEX } from "../../utils/regexUtils";

interface ContactFormProps {
    marginBot: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ marginBot }) => {
    const methods = useForm();

    const { mutateAsync } = useSendFeedback();

    const onSubmit = async (data: FieldValues) => {
        try {
            await mutateAsync(data);
        } catch (error) {
            console.error("Error submitting feedback", error);
        }
    };
    return (
        <div style={{ marginBottom: `${marginBot}rem` }}>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2.5rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "2.5rem",
                        }}
                    >
                        <InputField label="Ваше Имя" name="name" />
                        <InputField
                            label="Email"
                            name="email"
                            validationRule={{
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: "Please enter valid email",
                                },
                            }}
                        />
                        <InputField
                            label="Телефон"
                            name="phone"
                            validationRule={{
                                pattern: {
                                    value: PHONE_REGEX,
                                    message: "Please enter valid phone number",
                                },
                            }}
                        />
                    </div>
                    <InputField label="Сообщение" name="message" isTextArea />
                    <Checkbox
                        uid="terms-checkbox"
                        label="Согласие на обработку персональных данных"
                    />
                    <div style={{ margin: "1.5rem auto 0 auto" }}>
                        <SubmitButton label="Обсудить проект" />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default ContactForm;
