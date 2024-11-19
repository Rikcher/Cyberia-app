import React from "react";
import { useWindowSizeStore } from "../../../shared/store/useWindowSizeStore";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer: React.FC = () => {
    const { width } = useWindowSizeStore();
    return width > 1024 ? <DesktopFooter /> : <MobileFooter />;
};

export default Footer;
