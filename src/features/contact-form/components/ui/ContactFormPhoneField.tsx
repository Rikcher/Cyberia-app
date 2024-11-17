import InputField from "../../../../shared/components/ui/InputField/InputField";
import { PHONE_REGEX } from "../../../../shared/utils/regexUtils";

const ContactFormPhoneField = () => {
    return (
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
    );
};

export default ContactFormPhoneField;
