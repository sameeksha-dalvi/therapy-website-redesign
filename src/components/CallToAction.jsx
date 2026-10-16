import Image from "next/image"

const CallToAction = () => {

    return (
        <>
            <div className="text-text-primary flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-20 py-12 md:px-10 lg:px-0 lg:py-25">
                <div className="w-[45%] lg:w-[20%] flex items-end self-start lg:self-auto opacity-80">
                    <Image src="/images/cta-redesign-2.jpeg"
                        alt="An adult reflecting quietly"
                        width={500}
                        height={600}
                        className="w-full aspect-[2.5/2] lg:aspect-[2/4] object-cover" />
                </div>
                <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between w-full lg:w-[40%] px-6 lg:px-0">
                    <h2 className="uppercase text-[13px] lg:text-[15px]">SCHEDULE A CONSULTATION</h2>
                    <h1 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[35px] lg:leading-[40px]">
                        You don't have to figure it all out<span className="font-handwriting text-primary text-[45px] md:text-[52px] lg:text-[60px]"> alone</span>.
                    </h1>
                    <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                        Reaching out for therapy can feel like a big step. You may have spent a long time managing anxiety, carrying the weight of past experiences, or pushing yourself to keep going. Therapy offers a space to slow down, feel understood, and begin finding a way forward that feels right for you.                </p>
                    <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                        Whenever you're ready, take the first step toward meaningful change.</p>
                    <button className="text-[14px] lg:text-[15px] uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background w-[70%] lg:w-[50%] active:bg-background-dark active:text-background transition-colors duration-300">CONNECT WITH DR. MAYA</button>
                </div>
                <div className="w-[80%] lg:w-[40%] self-end lg:self-auto opacity-85">
                    <Image src="/images/office1.jpeg"
                        alt="A warm welcoming therapy room"
                        width={500}
                        height={600}
                        className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover" />
                </div>
            </div>
        </>
    )
}

export default CallToAction