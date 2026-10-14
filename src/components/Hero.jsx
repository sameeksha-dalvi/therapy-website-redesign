import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-[minmax(0,65fr)_minmax(0,35fr)] lg:grid-cols-[38%_52%_10%] gap-x-4 lg:gap-x-0 gap-y-8 font-body mt-8 text-text-primary">

                <div className="order-2 lg:order-1 w-full self-end">
                    <Image
                        src="/images/hero-new-1.jpg"
                        alt="client and therapist photo"
                        width={500}
                        height={600}
                        loading="eager"
                        className="w-full aspect-square lg:aspect-auto object-cover"
                    />
                </div>
                <div className="order-1 lg:order-2 col-span-2 lg:col-span-1 flex flex-col justify-between px-8 lg:px-[45px]">
                    <p className="text-[12px] md:text-[15px] tracking-[1.8px] font-normal leading-[24px] lg:leading-[27px] mb-10 lg:mb-[80px]">
                        IN-PERSON THERAPY IN SANTA MONICA & ONLINE ACROSS CA
                    </p>

                    <div>
                        <h1 className="font-heading text-[36px] md:text-[42px] lg:text-[50px] font-[100] tracking-[-0.4px] leading-[46px] md:leading-[56px] lg:leading-[70px]">
                            You don't have to carry it all on your own. Find your way back to{" "}
                            <strong className="font-handwriting text-primary text-[58px] md:text-[68px] lg:text-[80px]">
                                yourself
                            </strong>.
                        </h1>

                        <p className="text-[14px] lg:text-[15px] leading-[27px] mt-5">
                            A collaborative approach to healing from trauma, managing anxiety, and building a more sustainable relationship with yourself.
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <a
                            href=""
                            className="relative inline-block text-[12px] uppercase after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:bg-current after:origin-left after:scale-x-100 after:transition-transform after:duration-700 hover:after:scale-x-0"
                        >
                            Book an Appointment
                        </a>
                    </div>
                </div>
                <div className="order-3 lg:order-3 w-full flex items-end justify-end">
                    <Image
                        src="/images/hero-redesign-3.png"
                        alt="therapy room"
                        width={250}
                        height={300}
                        className="w-[70%] aspect-[4/8] lg:w-full lg:aspect-[2/3] object-cover opacity-70"
                    />
                </div>

            </div>


            <div className="flex flex-col lg:flex-row justify-between items-center my-16 lg:my-35 px-6 lg:px-0 gap-8 lg:gap-0 text-text-primary">

                <div className="w-full lg:w-[60%] lg:pl-20">

                    <h1 className="font-heading text-[28px] leading-[36px] lg:text-[35px] lg:leading-normal mb-8 lg:mb-10">
                        You don't have to keep pushing through when everything feels like too much.
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

                        <div className="flex-1 min-w-0">
                            <h2 className="text-[15px] mb-2 tracking-[1.5px] font-normal leading-[25px] uppercase">
                                Meet Dr. Maya Reynolds
                            </h2>

                            <p className="text-[14px] lg:text-[15px] font-light leading-[27px]">
                                Dr. Maya believes therapy works best when you feel
                                respected, understood, and actively involved in the
                                process. She creates a space where you can explore
                                your experiences openly and work toward changes that
                                feel meaningful to you.
                            </p>
                        </div>
                        <div className="w-full lg:hidden">
                            <Image
                                src="/images/hero-dr.png"
                                alt="Dr. Maya Reynolds"
                                width={500}
                                height={600}
                                className="w-full aspect-[16/9] object-cover  object-[center_25%]"
                            />
                        </div>
                        <p className="flex-1 min-w-0 text-[14px] lg:text-[15px] leading-[27px] font-light">
                            Beyond easing symptoms, her goal is to help you develop
                            deeper self-understanding, build resilience, and create
                            a stronger relationship with yourself over time.
                        </p>

                    </div>
                </div>
                <div className="hidden lg:block w-[25%]">
                    <Image
                        src="/images/hero-dr.png"
                        alt="Dr. Maya Reynolds"
                        width={500}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>

            </div>

        </>

    )
}

export default Hero