import styled from "styled-components";

const StyledCaseCard = styled.div<{$bgImgUrl: string}>`
    background: center / cover no-repeat url(${({$bgImgUrl}) => $bgImgUrl});
    width: 24.1875rem;
    height: 23.625rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
`
export default StyledCaseCard