import BannerText from "./BannerText";
import Chat from "../Chat";
import Logo from "./logo";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
    return (
        <>
        <div className=''>
            <TopHeader />
            <BannerText />
            <div className='flex w-full pt-9 px-[80px] border border-grey-300 items-center justify-between'>
                <Logo />
                <Navbar />
            </div>
                <Chat />
        </div>
        </>
    );
};

export default Header;
