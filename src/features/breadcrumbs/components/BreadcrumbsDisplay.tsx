import usePageName from "../../../shared/hooks/usePageName";
import StyledBreadcrumbsDisplay from "./StyledBreadcrumbsDisplay";

const BreadcrumbsDisplay = () => {
    const pageName = usePageName();
    return (
        <StyledBreadcrumbsDisplay>
            Главная / <span className="breadcrumb-current">{pageName}</span>
        </StyledBreadcrumbsDisplay>
    );
};

export default BreadcrumbsDisplay;
