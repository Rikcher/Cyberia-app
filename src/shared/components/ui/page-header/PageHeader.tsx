import { useTranslation } from "react-i18next";
import StyledPageHeader from "./PageHeader.styles";

interface PageHeaderProps {
    headerText: string;
    marginBot: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerText, marginBot }) => {
    const { t } = useTranslation();

    return (
        <StyledPageHeader $marginBot={marginBot}>
            {t(headerText)}
        </StyledPageHeader>
    );
};

export default PageHeader;
