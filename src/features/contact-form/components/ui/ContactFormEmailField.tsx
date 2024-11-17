import InputField from "../../../../shared/components/ui/InputField/InputField";
import { EMAIL_REGEX } from "../../../../shared/utils/regexUtils";

const ContactFormEmailField = () => {
    return (
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
    );
};

export default ContactFormEmailField;
