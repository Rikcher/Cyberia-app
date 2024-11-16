import { useLocation } from "react-router-dom";

const usePageName = (): string => {
    const location = useLocation(); 
    return location.pathname.split("/")[1] || ""; 
};

export default usePageName;
