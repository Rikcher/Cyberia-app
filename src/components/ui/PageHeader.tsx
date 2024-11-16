import StyledPageHeader from "./styles/StyledPageHeader";

interface PageHeaderProps {
    headerText: string;
    marginBot: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerText, marginBot }) => {
    return (
        <StyledPageHeader $marginBot={marginBot}>{headerText}</StyledPageHeader>
    );
};

export default PageHeader;
