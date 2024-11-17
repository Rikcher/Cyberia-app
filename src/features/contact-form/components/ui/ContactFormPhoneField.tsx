import { useTranslation } from "react-i18next";
import InputField from "../../../../shared/components/ui/InputField/InputField";
import { PHONE_REGEX } from "../../../../shared/utils/regexUtils";

const ContactFormPhoneField = () => {
    const { t } = useTranslation();

    return (
        <InputField
            label={t("phone")}
            name="phone"
            validationRule={{
                pattern: {
                    value: PHONE_REGEX,
                    message: t("err_phone"),
                },
            }}
        />
    );
};

export default ContactFormPhoneField;
