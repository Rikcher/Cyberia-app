import styled from "styled-components";

export const FormWrapper = styled.div<{ $marginBot: number }>`
    margin-bottom: ${({ $marginBot }) => `${$marginBot}rem`};

    @media (max-width: 768px) {
        background-color: ${({theme}) => theme.colors.primaryShade};
        padding: 0 1.5rem 2.25rem 1.5rem;
        margin-bottom: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (max-width: 768px) {
        gap: 1.375rem;

        p {
            color: ${({theme}) => theme.colors.text};
            text-align: center;
        }
    }
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.375rem;
    }
`;

export const SubmitWrapper = styled.div`
    margin: 1.5rem auto 0 auto;

    @media (max-width: 768px) {
        margin-top: 1rem; 
        width: 100%;
    }
`;
