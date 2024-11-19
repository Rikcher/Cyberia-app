import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import i18n from "../../i18n"; // Your i18n setup
import ContactForm from "../../features/contact-form/ContactForm";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
    initReactI18next: {
        type: "backend",
        init: vi.fn(),
    },
}));

beforeAll(() => {
    i18n.init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
});

describe("ContactForm Component", () => {
    const renderComponent = () => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <ContactForm />
                </ThemeProvider>
            </QueryClientProvider>
        );
    };

    it("Renders form with fields and submit button", () => {
        renderComponent();

        expect(screen.getByLabelText("name")).toBeInTheDocument();
        expect(screen.getByLabelText("email")).toBeInTheDocument();
        expect(screen.getByLabelText("phone")).toBeInTheDocument();
        expect(screen.getByLabelText("message")).toBeInTheDocument();
        expect(
            screen.getByLabelText("contact-form-submit")
        ).toBeInTheDocument();
    });

    it("shows validation error messages when required fields are empty", async () => {
        renderComponent();

        const submitButton = screen.getByLabelText("contact-form-submit");
        fireEvent.click(submitButton);

        await waitFor(() => {
            screen.debug();
            expect(screen.getByLabelText("name-error")).toBeInTheDocument();
            expect(screen.getByLabelText("email-error")).toBeInTheDocument();
            expect(screen.getByLabelText("phone-error")).toBeInTheDocument();
            expect(screen.getByLabelText("message-error")).toBeInTheDocument();
        });
    });

    it("accepts input values and doesn't show errors on valid submission", async () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText("name"), {
            target: { value: "Nick Tests" },
        });
        fireEvent.change(screen.getByLabelText("email"), {
            target: { value: "Nick@gmail.com" },
        });
        fireEvent.change(screen.getByLabelText("phone"), {
            target: { value: "1234567890" },
        });
        fireEvent.change(screen.getByLabelText("message"), {
            target: { value: "Test message" },
        });

        const submitButton = screen.getByLabelText("contact-form-submit");
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(
                screen.queryByLabelText("name-error")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("email-error")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("phone-error")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("message-error")
            ).not.toBeInTheDocument();
        });
    });

    it("resets the form after successful submission", async () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText("name") as HTMLInputElement, {
            target: { value: "Nick tests" },
        });
        fireEvent.change(screen.getByLabelText("email") as HTMLInputElement, {
            target: { value: "Nick@gmail.com" },
        });
        fireEvent.change(screen.getByLabelText("phone") as HTMLInputElement, {
            target: { value: "1234567890" },
        });
        fireEvent.change(
            screen.getByLabelText("message") as HTMLTextAreaElement,
            {
                target: { value: "Test message" },
            }
        );

        const submitButton = screen.getByLabelText("contact-form-submit");
        fireEvent.click(submitButton);

        await waitFor(() => {
            const nameInput = screen.getByLabelText("name") as HTMLInputElement;
            const emailInput = screen.getByLabelText(
                "email"
            ) as HTMLInputElement;
            const phoneInput = screen.getByLabelText(
                "phone"
            ) as HTMLInputElement;
            const messageInput = screen.getByLabelText(
                "message"
            ) as HTMLTextAreaElement;

            expect(nameInput.value).toBe("");
            expect(emailInput.value).toBe("");
            expect(phoneInput.value).toBe("");
            expect(messageInput.value).toBe("");
        });
    });

    it("shows an error when the email is in an invalid format", async () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText("name"), {
            target: { value: "Nick Tests" },
        });
        fireEvent.change(screen.getByLabelText("email"), {
            target: { value: "invalid-email" },
        });
        fireEvent.change(screen.getByLabelText("phone"), {
            target: { value: "1234567890" },
        });
        fireEvent.change(screen.getByLabelText("message"), {
            target: { value: "Test message" },
        });

        const submitButton = screen.getByLabelText("contact-form-submit");
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByLabelText("email-error")).toBeInTheDocument();
        });
    });

    it("shows an error when the phone is in an invalid format", async () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText("name"), {
            target: { value: "Nick Tests" },
        });
        fireEvent.change(screen.getByLabelText("email"), {
            target: { value: "Nick@gmail.com" },
        });
        fireEvent.change(screen.getByLabelText("phone"), {
            target: { value: "invalid-phone" },
        });
        fireEvent.change(screen.getByLabelText("message"), {
            target: { value: "Test message" },
        });

        const submitButton = screen.getByLabelText("contact-form-submit");
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByLabelText("phone-error")).toBeInTheDocument();
        });
    });

    it("should disable submit button when form is submitting", async () => {
        renderComponent();

        const submitButton = screen.getByLabelText("contact-form-submit");

        expect(submitButton).not.toBeDisabled();

        fireEvent.change(screen.getByLabelText("name"), {
            target: { value: "Nick Tests" },
        });
        fireEvent.change(screen.getByLabelText("email"), {
            target: { value: "Nick@gmail.com" },
        });
        fireEvent.change(screen.getByLabelText("phone"), {
            target: { value: "1234567890" },
        });
        fireEvent.change(screen.getByLabelText("message"), {
            target: { value: "Test message" },
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });

        await waitFor(() => {
            expect(submitButton).not.toBeDisabled();
        });
    });
});
