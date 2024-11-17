import styled from "styled-components";

const StyledCardHover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(204,204,204);
    background: linear-gradient(180deg, rgba(204,204,204,0) 20%, rgba(9,11,33,1) 100%);
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 1.5625rem 1.875rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`
export default StyledCardHover