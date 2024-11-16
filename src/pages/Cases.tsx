import PageHeader from "../components/ui/PageHeader";
import usePageName from "../hooks/usePageName";
import CasesOverview from "../features/cases-overview/CasesOverview";
import Form from "../features/form/Form";

const Cases: React.FC = () => {
    const pageName = usePageName();

    return (
        <>
            <PageHeader headerText={pageName} marginBot={4} />
            <CasesOverview marginBot={6.25} />
            <PageHeader
                headerText={"Расскажите о вашем проекте:"}
                marginBot={4.875}
            />
            <Form marginBot={6.25} />
        </>
    );
};

export default Cases;
