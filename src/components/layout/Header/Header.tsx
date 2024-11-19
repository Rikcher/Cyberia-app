import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useWindowSizeStore } from "../../../shared/store/useWindowSizeStore";

const Header = () => {
    const { width } = useWindowSizeStore();

    return <>{width < 1024 ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
