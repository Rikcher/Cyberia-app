import { useTranslation } from "react-i18next";
import usePageName from "../../../shared/hooks/usePageName";
import StyledBreadcrumbsDisplay from "./StyledBreadcrumbsDisplay";

const BreadcrumbsDisplay = () => {
    const pageName = usePageName();
    const { t } = useTranslation();

    return (
        <StyledBreadcrumbsDisplay>
            {t("home")} /{" "}
            <span className="breadcrumb-current">{t(pageName)}</span>
        </StyledBreadcrumbsDisplay>
    );
};

export default BreadcrumbsDisplay;
