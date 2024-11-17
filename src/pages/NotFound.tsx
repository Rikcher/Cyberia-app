import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();

    return <h1 style={{ color: "white" }}>{t("not_found")}</h1>;
};

export default NotFound;
