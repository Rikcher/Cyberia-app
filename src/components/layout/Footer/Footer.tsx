import React from "react";
import { useWindowSizeStore } from "../../../store/useWindowSizeStore";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer: React.FC = () => {
    const { width } = useWindowSizeStore();
    return width > 1024 ? <DesktopFooter /> : <MobileFooter />;
};

export default Footer;
