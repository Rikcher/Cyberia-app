import usePageName from "../../../hooks/usePageName";
import StyledBreadcrumbsDisplay from "../styles/StyledBreadcrumbsDisplay";

const BreadcrumbsDisplay = () => {
    const pageName = usePageName();
    return (
        <StyledBreadcrumbsDisplay>
            Главная / <span className="breadcrumb-current">{pageName}</span>
        </StyledBreadcrumbsDisplay>
    );
};

export default BreadcrumbsDisplay;
