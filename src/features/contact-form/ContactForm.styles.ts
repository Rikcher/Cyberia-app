import styled from "styled-components";

export const FormWrapper = styled.div<{ $marginBot: number }>`
    margin-bottom: ${({ $marginBot }) => `${$marginBot}rem`};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
`;

export const SubmitWrapper = styled.div`
    margin: 1.5rem auto 0 auto;
`;
