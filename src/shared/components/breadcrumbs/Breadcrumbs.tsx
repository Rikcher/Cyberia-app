import { useTranslation } from "react-i18next";
import usePageName from "../../hooks/usePageName";
import { StyledBreadcrumbs } from "./Breadcrumbs.styles";

const Breadcrumbs = () => {
    const pageName = usePageName();
    const { t } = useTranslation();

    return (
        <StyledBreadcrumbs>
            {t("home")} /{" "}
            <span className="breadcrumb-current">{t(pageName)}</span>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;
