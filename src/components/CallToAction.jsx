import Image from "next/image"

const CallToAction = () => {

    return (
        <>
        <div className="flex justify-between gap-20 py-25">
            <div className="w-[20%] flex items-end opacity-70">
                <Image src="/images/cta-2.png"
                                        alt="family therapy"
                                        width={500}
                                        height={600}
                                        className="w-full aspect-[2/4] object-cover" />
            </div>
            <div className="flex flex-col justify-between w-[40%]">
                <h2 className="mb-20 uppercase text-[15px]">SCHEDULE AN APPOINTMENT</h2>
                <h1 className="font-heading text-[35px] leading-[40px]">
                   Find a therapist who is the right fit for  <span className="font-handwriting text-primary text-[60px]">you</span>. 
                </h1>
                <p className="text-[15px] leading-[27px] font-light">
                  Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.  
                </p>
                <p className="text-[15px] leading-[27px] font-light">
                    Click the button below to schedule an appointment.
                </p>
                <button className="text-[15px] uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background w-[30%]">Book Now</button>
            </div>
            <div className="w-[40%]">
                <Image src="/images/cta-1.png"
                                        alt="family therapy"
                                        width={500}
                                        height={600}
                                        className="w-full aspect-[4/5] object-cover" />
            </div>
        </div>
        </>
    )
}

export default CallToAction