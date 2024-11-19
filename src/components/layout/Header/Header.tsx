import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useWindowSizeStore } from "../../../store/useWindowSizeStore.ts";

const Header = () => {
    const { width } = useWindowSizeStore();

    return <>{width < 768 ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
