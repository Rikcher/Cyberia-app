import { useTranslation } from "react-i18next";
import Logo from "../../../../../shared/components/ui/Logo/Logo";
import StyledGeneralInformation from "./StyledGeneralInformation";

const GeneralInformation = () => {
    const { t } = useTranslation();

    return (
        <StyledGeneralInformation>
            <Logo width={12.25} />
            <p>{t("footer_title")}</p>
        </StyledGeneralInformation>
    );
};

export default GeneralInformation;
