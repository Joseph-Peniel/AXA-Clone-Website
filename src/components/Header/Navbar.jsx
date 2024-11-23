const Navbar = () => {
    return (
        <div className='flex'>
            <ul className='flex items-center text-[#00005b] text-sm font-medium'>
                <li className='relative group py-5 px-3 border-b-4 border-white hover:border-red-400'>
                    <a className='cursor-pointer'>HEALTH</a>
                    <div
                        className='absolute hidden z-20 mt-[25px] group-hover:flex bg-white min-w-[1280px] shadow-lg right-[-650px] 
                     items-center justify-center h-[250px]'>
                        <span className='py-3 mr-8  text-blue-800 flex fle x-row uppercase font-extrabold'>
                            <a
                                href='/health/plans'
                                className='text-[24px]  w-[300px] flex justify-end items-center'>
                                Health Insurance
                            </a>
                        </span>

                        <div className='h-[150px] bg-slate-200 px-[1px]'></div>

                        <ul className='ml-8 w-[250px] gap-3 flex flex-col'>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/health/plans-details/'>
                                    Retail Health Plans
                                </a>
                            </li>
                            <li className='subMenuItemStyle px-4 py-2 hover:bg-transparent'>
                                <a
                                    className='hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/health/easycare'>
                                    EasyCare
                                </a>
                            </li>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className='hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/health/imed/'>
                                    International Health Plan
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='relative group py-5  px-3 border-b-4 border-white hover:border-red-400'>
                    <a className='cursor-pointer'>INVESTMENT</a>
                    <div
                        className='absolute hidden z-20 mt-[25px]  bg-white group-hover:flex mt-4 w-[1280px] shadow-lg right-[-550px] 
                     items-center mr-0 justify-center h-[250px]'>
                        <span className='py-3 mr-8  text-blue-800 flex x-row uppercase font-extrabold'>
                            <a
                                href='/health/plans'
                                className='text-[24px] w-[450px] flex justify-end items-center'>
                                Investments
                            </a>
                        </span>

                        <div className='h-[150px] bg-slate-200 px-[1px]'></div>

                        <ul className='ml-8 w-[400px] gap-3 flex flex-col mt-3'>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/investments#moneymarketfund'>
                                    Money Market Fund
                                </a>
                            </li>

                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/investments#equity'>
                                    Equity Income Fund
                                </a>
                            </li>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/investments#portfolio'>
                                    Non Discretionary Portfolio(Naira)
                                </a>
                            </li>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='/investments#dollarbondfund'>
                                    Dollar Bond Fund
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='relative group py-5 px-3 border-b-4 border-white hover:border-red-400'>
                    <a>INSURANCE</a>
                    <div
                        className='absolute hidden z-20  bg-white group-hover:flex  mt-[25px] 
                    w-[1280px] shadow-lg right-[-470px] py-[30px] items-stretch justify-center'>
                        <div className='inline-block w-[300px]'>
                            <span className='  text-blue-800 flex flex-row uppercase font-extrabold pl-[45px] mb-[15px]'>
                                <a
                                    href='/insurance/life/all-policies'
                                    className='text-[24px] font-[700] mt[10px]'>
                                    Life Insurance
                                </a>
                            </span>
                            <ul className='gap-2 flex flex-col pl-[30px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/life/life-savings'>
                                        Life Savings
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/life/instant-plan'>
                                        Instant Plan
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/life/edu-plan'>
                                        Education Plan
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/life/endowment-plan'>
                                        Endowment Plan
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/life/all-policies#others'>
                                        Other Plans
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='h-[150px] bg-slate-200 px-[1px]'></div>

                        <div className='inline-block w-[300px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[25px] mb-[15px]'>
                                <a href='/insurance/motor' className='text-[24px]'>
                                    Motor Insurance
                                </a>
                            </span>
                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/motor/auto-classic'>
                                        AutoClassic
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/motor/auto-go'>
                                        AutoGo
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='h-[250px] bg-slate-200 px-[1px]'></div>

                        <div className='inline-block w-[300px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[25px] mb-[15px]'>
                                <a className='text-[24px]' href='/insurance/travel'>
                                    Travel Insurance
                                </a>
                            </span>
                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/travel/general'>
                                        General (Business/Tourism) Protection
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/travel/student'>
                                        Student Protection
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/travel/pilgrimage'>
                                        Pilgrimage Protection
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='h-[250px] bg-slate-200 px-[1px]'></div>

                        <div className='inline-block w-[300px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[25px] mb-[15px]'>
                                <a className='text-[24px]' href='/insurance/general'>
                                    Other Insurance
                                </a>
                            </span>
                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://partnership.axamansard.com/SMEBIP/SmeRequest'>
                                        SMEs
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/no-yawa'>
                                        Personal Accident
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/general/#fire-engineer'>
                                        Fire &amp; Engineering
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/general/#aviation-energy'>
                                        Aviation &amp; Energy
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/general/'>
                                        Others
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li className='relative group py-5 px-3 border-b-4 border-white hover:border-red-400'>
                    <a>PARTNERSHIP</a>

                    <div
                        className='absolute hidden z-20 mt-[25px] w-[1280px] group-hover:flex shadow-lg right-[-355px] py-[30px] bg-white 
                     items-center justify-center'>
                        <span className='pl-[80px] mr-8  text-blue-800 flex uppercase font-extrabold'>
                            <a
                                className='text-[24px] w-[225px] flex justify-end items-center'
                                href='https://partnership.axamansard.com/'
                                target='_blank'>
                                PARTNERSHIP
                            </a>
                        </span>

                        <div className='h-[40px] bg-slate-200 px-[1px]'></div>

                        <ul className='ml-8 w-[200px] gap-3 flex flex-col justify-center items-start'>
                            <li className='px-4 py-2 hover:bg-transparent'>
                                <a
                                    className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                    href='https://partnership.axamansard.com/home/brokers'
                                    target='_blank'>
                                    Brokers
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='relative group py-5 px-3 border-b-4 border-white hover:border-red-400'>
                    <a>CORPORATE SITE</a>
                    <div
                        className='absolute hidden group-hover:flex mt-[25px] z-20  bg-white 
                    w-[1285px] shadow-lg right-[-228px] py-[30px] p-[90px]
                     items-stretch justify-center'>
                        <div className='inline-block w-[250px]'>
                            <span className='  text-blue-800 flex flex-row uppercase font-extrabold   mb-[15px] text-[24px]  mt[10px]'>
                                About Us
                            </span>

                            <div className=' text-[#333] w-[250px] '>
                                <p
                                    style={{
                                        wordSpacing: "2px",
                                        fontSize: "13px",
                                        alignItems: "stretch",
                                    }}>
                                    AXA Mansard is a member of the AXA Group, the worldwide leader
                                    in insurance and asset management with 166,000 employees serving
                                    107 million clients in 64 countries.
                                </p>
                                <p>&nbsp;</p>
                                <p className='text-[13px]'>
                                    AXA Mansard Insurance plc is rated B+ by A.M. Best (2016) for
                                    Financial Strength. The Company is also certified ISO 9001:2008
                                    compliant by the Standard Organization of Nigeria (SON) for
                                    quality management systems.
                                </p>
                            </div>
                        </div>

                        <div className='h-[280px] bg-slate-200 px-[1px] ml-[10px]'></div>

                        <div className='inline-block w-[310px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[30px] mb-[15px]'>
                                <a href='/insurance/motor' className='text-[24px]'>
                                    Company Profile
                                </a>
                            </span>
                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/our-profile/'>
                                        Our Profile
                                    </a>
                                </li>

                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/awards-achievements/'>
                                        Awards and Recognition
                                    </a>
                                </li>

                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a className=' hover:text-blue-950 text-[18px] hover:font-semibold'>
                                        Corporate Social Responsibilities
                                    </a>
                                </li>

                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/strategy-and-committments/environmental-and-social-management-system/'>
                                        Environment Social Management
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='h-[280px] bg-slate-200 px-[1px]'></div>

                        <div className='inline-block w-[300px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[25px] mb-[15px] text-[24px]'>
                                Our Entities
                            </span>
                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/subsidiaries/axa-health/'>
                                        Health
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/about-us/'>
                                        Insurance
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/our-companies/investments/'>
                                        Investments
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='h-[280px] bg-slate-200 px-[1px]'></div>

                        <div className='inline-block w-[300px]'>
                            <span className=' text-blue-800 flex uppercase font-extrabold pl-[25px] mb-[15px] text-[24px]'>
                                Contact Us
                            </span>

                            <ul className='w-full gap-2 flex flex-col pl-[12px]'>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/contact/#locations'>
                                        Our Locations
                                    </a>
                                </li>

                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='https://corporate.axamansard.com/contact/#locations'>
                                        Our Contact Center
                                    </a>
                                </li>

                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/whistle-blowing/'>
                                        Whistle Blower
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/complaints/'>
                                        Complaint
                                    </a>
                                </li>
                                <li className='px-4 py-2 hover:bg-transparent'>
                                    <a
                                        className=' hover:text-blue-950 text-[18px] hover:font-semibold'
                                        href='/insurance/general/'>
                                        Others
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li className='relative group py-5 px-3 border-b-4 border-white hover:border-red-400'>
                    <a>LIFE & SAVINGS BLOG</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
