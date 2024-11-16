import PageHeader from "../shared/components/ui/PageHeader";
import usePageName from "../hooks/usePageName";
import CasesOverview from "../features/cases-overview/CasesOverview";
import ContactForm from "../features/contact-form/ContactForm";

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
            <ContactForm marginBot={6.25} />
        </>
    );
};

export default Cases;
