import { useState } from "react";

const TopHeader = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='w-full px-[50px]  py-[37px] bg-[rgb(0,0,91)] text-white h-[40px] leading-3 pt-[5px] tracking-wide items-center'>
            <div className='flex justify-between items-center'>
                <div className='text-[13px] font-semibold '>
                    MyAXA app is available on the Google Play and App Stores
                    <button
                        className='relative px-[25px] ml-7 py-[8px] overflow-hidden bg-transparent border border-white text-white text-[14px] tracking-widest hover:bg-white hover:text-blue-950 font-medium'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <a
                            href='https://www.axamansard.com/myaxaplus/'
                            target='_blank'
                            rel='noreferrer'
                            className='relative '>
                            <span>GET IT FOR FREE</span>
                        </a>
                        {/* Background Animation Layer */}
                        <span
                            className={`absolute inset-0 bg-blue-900 transition-all duration-300 transform ${
                                isHovered ? "scale-150 opacity-100" : "scale-0 opacity-0"
                            }`}
                            style={{ transformOrigin: "center" }}></span>
                    </button>
                </div>
                <div className='font-semibold flex justify-between w-[250px] items-center tracking-normal'>
                    <a href='tel:+234013301999'>
                        <i className='fas fa-phone mr-[12px] text-[15px]'>&nbsp;</i>
                        02013301999
                    </a>
                    |
                    <a href='tel:+234018889799'>
                        02018889799
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
