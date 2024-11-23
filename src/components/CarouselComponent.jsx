import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Use correct path for Swiper 8+
import "swiper/css";
import "swiper/css/navigation";

const CarouselComponent = () => {
    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                noSwiping={true} // Disable swipe gestures
                simulateTouch={false} // Disable drag-to-swipe
                allowTouchMove={false} // Disable touch move on mobile
            >
                <SwiperSlide className='w-full h-[500px] overflow-hidden'>
                    <img
                        className='relative h-[530px] w-full object-cover object-left-bottom'
                        src='../../Images/pfi-banner.webp'
                        alt=''
                    />
                    <div className="absolute right-[105px] top-[54px] w-[345px] text-left leading-[44px] font-['source sans pro']">
                        <h4 className='text-[14px] font-semibold tracking-widest leading-[20px] uppercase mb-[20px]'>
                            MOTOR INSURANCE
                        </h4>
                        <h1 className='text-[35px] font-extrabold mb-[30px] tracking-tight leading-[38px] font-[lora] w-[330px]'>
                            Spread the payment for your car insurance for up to 10 months
                        </h1>
                        <p className='text-[18px] leading-[27px] font-normal tracking-wide mb-[30px]'>
                            You can now spread the payment for your comprehensive car insurance for
                            up to 10 months.
                        </p>
                        <button className='bg-[#f07662] text-white text-[18px] px-[30px] py-1 border-b-orange-700 border-b-2'>
                            <a
                                target='_blank'
                                href='https://www.axamansard.com/myaxaplus/'
                                rel='noopener noreferrer'>
                                LEARN MORE
                            </a>
                        </button>
                    </div>
                </SwiperSlide>

                {/* Additional slides here */}
                <SwiperSlide>
                    <img
                        src='../../Images/flipped-invest.svg'
                        alt='Slide 2'
                        className='object-cover w-full h-full'
                    />
                    <div className="absolute right-[105px] top-[54px] w-[345px] text-left leading-[44px] font-['source sans pro']">
                        <h4 className='text-[56px] font-semibold tracking-widest leading-[20px] uppercase mb-[20px]'>
                            <span>Transact</span>
                            <span>earn</span>
                            <span>go</span>
                        </h4>

                        <p className='text-[18px] leading-[27px] font-normal tracking-wide mb-[30px]'>
                            You can now spread the payment for your comprehensive car insurance for
                            up to 10 months.
                        </p>
                        <button className='bg-[#f07662] text-white text-[18px] px-[30px] py-1 border-b-orange-700 border-b-2'>
                            <a
                                target='_blank'
                                href='https://www.axamansard.com/myaxaplus/'
                                rel='noopener noreferrer'>
                                LEARN MORE
                            </a>
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src='../../Images/endowment-bg-flipped.gif'
                        alt='Slide 3'
                        className='object-cover w-full h-full'
                    />
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                className='custom-prev absolute top-1/2 left-4 -translate-y-1/2 text-orange-700 rounded-full cursor-pointer'
                style={{ zIndex: 10 }}>
                Previous
            </div>
            <div
                className='custom-next absolute top-1/2 right-4 -translate-y-1/2 text-orange-700 text-[40px] py-2 rounded-full cursor-pointer'
                style={{ zIndex: 10 }}>
                <i className='fa-solid fa-chevron-right'></i>
            </div>
        </div>
    );
};

export default CarouselComponent;
