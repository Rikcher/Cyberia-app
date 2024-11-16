import StyledPageHeader from "./styles/StyledPageHeader";

interface PageHeaderProps {
    headerText: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerText }) => {
    return <StyledPageHeader>{headerText}</StyledPageHeader>;
};

export default PageHeader;
