const BannerText = () => {
    return (
        <div
            className='bg-[#fafafa] border-solid border-t-2 border-t-[#00005b]
 py-[10px]  overflow-hidden whitespace-nowrap'>
            <ul className='relative flex justify-start items-center mx-auto w-full overflow-hidden whitespace-nowrap animate-marquee text-[14px] text-[#999999] tracking-widest font-semibold'>
                <li className='inline-block mr-8'>
                    <a className='linkMetaStyle' href='/investments#moneymarketfund'>
                        MMF: <span className='grossmmf'>20.13</span>~%p.a &nbsp; | Net
                        <span className='mmfy'>18.98</span>% as @
                        <span className='yieldDate'>13-Oct-2024</span>
                    </a>
                </li>
                <li className='inline-block mr-8'>
                    <a className='linkMetaStyle' href='/investments#equity'>
                        EIF: YTD - <span className='eify'>16.67</span>% | UNIT PRICE: N
                        <span className='eifUnit'>201.3645</span> as @
                        <span className='yieldDate'>13-Oct-2024</span>
                    </a>
                </li>
                <li className='inline-block mr-8'>
                    <a className='linkMetaStyle' href='/investments#dollarbondfund'>
                        DBF: YTD - <span className='dbfy'>4.57</span>% | UNIT PRICE: $
                        <span className='dfbUnit'>132.1335</span> as @
                        <span className='yieldDateUSD'>13-Oct-2024</span>
                    </a>
                </li>
            </ul>

            <div className='absolute flex justify-between items-center right-4 top-[79px]  mr-7'>
                <ul className='mr-1'>
                    <li className='text-[13px]  text-[#999999] tracking-widest font-semibold bg-[#fafafa] px-3 py-[10px]'>
                        <i className='fas fa-phone mr-[5px] text-[12px] '>&nbsp;</i>
                        <a href='tel:+234700AXAMANSARD'>
                            <i className='glyphicon glyphicon-earphone'>&nbsp;</i>0700AXAMANSARD
                        </a>
                    </li>
                </ul>
                <button className=' bg-[#00008f] text-white py-[7px] px-[18px] text-[14px] tracking-widest'>
                    <a href='/myaxa/login'>SIGN IN</a>
                </button>
            </div>
        </div>
    );
};

export default BannerText;
