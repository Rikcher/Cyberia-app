import { useTranslation } from "react-i18next";
import StyledPageHeader from "./PageHeader.styles";

interface PageHeaderProps {
    headerText: string;
    marginBot: number;
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    headerText,
    marginBot,
    className,
}) => {
    const { t } = useTranslation();

    return (
        <StyledPageHeader $marginBot={marginBot} className={className}>
            <p>{t(headerText)}</p>
        </StyledPageHeader>
    );
};

export default PageHeader;
