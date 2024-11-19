import PageHeader from "../shared/components/ui/page-header/PageHeader";
import usePageName from "../shared/hooks/usePageName";
import CasesOverview from "../features/cases-overview/CasesOverview";
import ContactForm from "../features/contact-form/ContactForm";
import { useTranslation } from "react-i18next";

const Cases: React.FC = () => {
    const pageName = usePageName();
    const { t } = useTranslation();

    return (
        <>
            <section>
                <PageHeader headerText={pageName} marginBot={4} />
                <CasesOverview />
            </section>
            <section>
                <PageHeader
                    headerText={t("feedback_form_title")}
                    marginBot={4.875}
                    className="full-width-bg"
                />
                <ContactForm marginBot={6.25} />
            </section>
        </>
    );
};

export default Cases;
