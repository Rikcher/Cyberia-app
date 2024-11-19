import PageHeader from "../shared/components/ui/PageHeader/PageHeader";
import usePageName from "../shared/hooks/usePageName";
import CasesOverview from "../features/cases-overview/CasesOverview";
import ContactForm from "../features/contact-form/ContactForm";
import { useTranslation } from "react-i18next";

const Cases: React.FC = () => {
    const pageName = usePageName();
    const { t } = useTranslation();

    return (
        <>
            <PageHeader headerText={pageName} marginBot={4} />
            <CasesOverview />
            <PageHeader
                headerText={t("feedback_form_title")}
                marginBot={4.875}
            />
            <ContactForm marginBot={6.25} />
        </>
    );
};

export default Cases;
