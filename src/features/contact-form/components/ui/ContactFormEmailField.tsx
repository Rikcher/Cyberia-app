import { useTranslation } from "react-i18next";
import InputField from "../../../../shared/components/ui/InputField/InputField";
import { EMAIL_REGEX } from "../../../../shared/utils/regexUtils";

const ContactFormEmailField = () => {
    const { t } = useTranslation();

    return (
        <InputField
            label={t("email")}
            name="email"
            validationRule={{
                pattern: {
                    value: EMAIL_REGEX,
                    message: t("err_email"),
                },
            }}
        />
    );
};

export default ContactFormEmailField;
