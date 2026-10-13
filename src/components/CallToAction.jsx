import Image from "next/image"

const CallToAction = () => {

    return (
        <>
        <div className="text-text-secondary flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-20 py-12 md:px-10 lg:px-0 lg:py-25">
            <div className="w-[45%] lg:w-[20%] flex items-end self-start lg:self-auto opacity-70">
                <Image src="/images/cta-2.png"
                                        alt="family therapy"
                                        width={500}
                                        height={600}
                                        className="w-full aspect-[2.5/2] lg:aspect-[2/4] object-cover" />
            </div>
            <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between w-full lg:w-[40%] px-6 lg:px-0">
                <h2 className="uppercase text-[13px] lg:text-[15px]">SCHEDULE AN APPOINTMENT</h2>
                <h1 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[35px] lg:leading-[40px]">
                   Find a therapist who is the right fit for  <span className="font-handwriting text-primary text-[45px] md:text-[52px] lg:text-[60px]">you</span>. 
                </h1>
                <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                  Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.  
                </p>
                <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                    Click the button below to schedule an appointment.
                </p>
                <button className="text-[14px] lg:text-[15px] uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background w-[40%] lg:w-[30%]">Book Now</button>
            </div>
            <div className="w-[80%] lg:w-[40%] self-end lg:self-auto">
                <Image src="/images/cta-1.png"
                                        alt="family therapy"
                                        width={500}
                                        height={600}
                                        className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover" />
            </div>
        </div>
        </>
    )
}

export default CallToAction