import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="bg-background-white">
                <h1 className="text-[30px] lg:text-[35px] font-heading mt-10 lg:mt-15 mb-5 px-6 lg:px-0 lg:ml-20">Who we <span className="font-handwriting text-primary text-[50px] lg:text-[60px]">help</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12 mb-16 lg:mb-20 lg:ml-40">
                    <div>
                        <Image src="/images/about-1.png" alt="adults"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover" />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Adults</h2>
                        <p className="text-[15px] leading-[27px]">Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.</p>
                    </div>

                    <div>
                        <Image src="/images/about-2.png" alt="couples"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Couples</h2>
                        <p className="text-[15px] leading-[27px]">Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.</p>
                    </div>
                    <div>
                        <Image src="/images/about-3.png" alt="children"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Children & Teens</h2>
                        <p className="text-[15px] leading-[27px]">Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.</p>
                    </div>
                </div>
                <div className="relative w-full">
                    <Image src="/images/about-4.png" alt="children running"
                        width={200}
                        height={300}
                        className="w-full h-[350px] sm:h-[420px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <h1 className="absolute top-1/2 -translate-y-1/2 lg:top-auto lg:translate-y-0 bottom-auto lg:bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-[85%] lg:w-[65%] text-center lg:text-left text-white font-heading text-[25px] sm:text-[30px] lg:text-[37px] leading-[1.3] pl-0 lg:pl-20 pb-0 lg:pb-10">You deserve a place where your story is heard, valued, and understood.<span className="italic font-serif"> Nothing will be too heavy for us to carry together.</span></h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 my-16 lg:my-20 px-6 lg:px-40">

                    <h1 className="text-[28px] lg:text-[35px] font-heading leading-[40px] lg:max-w-[280px] shrink-0">Our areas of <span className="font-handwriting text-primary text-[50px] lg:text-[60px]">expertise</span></h1>
                    <div className="w-full lg:w-[340px]">
                        <ul className="uppercase tracking-[1.8px] text-[13px] lg:text-[15px] w-full">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Dissociation</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Trauma</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Family conflict</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Special needs parenting</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Depression</a></li>
                            <li className="border-b border-black/20 pb-7 mb-0 lg:border-b-0 lg:pb-5 lg:mb-5"><a href="">marriage</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[340px]">
                        <ul className="uppercase tracking-[1.8px] text-[13px] lg:text-[15px] w-full">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Anxiety</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Relationships</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">children</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">teens</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">intimacy & connection</a></li>
                            <li className="pb-5 mb-5"><a href="">…and more.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[var(--beige-50)] flex flex-col lg:flex-row gap-8 lg:gap-20 pl-6 lg:pl-20 pr-6 lg:pr-0">
                    <div className="w-full lg:w-[70%] my-10 lg:my-30">
                        <h2 className="mb-10 lg:mb-30 uppercase text-[15px]">How we work</h2>
                        <h1 className="font-heading text-[30px] lg:text-[35px] mb-8 lg:mb-10">We’re here to make a difference.</h1>
                        <div className="w-full mb-8 lg:hidden">
                            <Image
                                src="/images/about-5.png"
                                alt="happy girls"
                                width={500}
                                height={600}
                                className="w-full aspect-[16/9] object-cover object-[center_40%]"
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-[14px] lg:text-[15px] mb-2 tracking-[1.5px] font-normal leading-[25px] uppercase">The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.</h2>
                                <p className="text-[14px] lg:text-[15px] font-light leading-[27px]">Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.</p>
                            </div>
                            <p className="flex-1 min-w-0 text-[14px] lg:text-[15px] font-light leading-[27px]">Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.</p>
                        </div>
                        <div><a href="" className="mt-15 relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more about us</a></div>
                    </div>
                    <div className="hidden lg:block mt-30 w-[30%]">
                        <Image src="/images/about-5.png" alt="happy girls"
                            width={500}
                            height={600}
                            className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row my-16 lg:my-25 items-start lg:items-end justify-between gap-8 lg:gap-15">
                    <div className="w-[calc(100%-1.5rem)] lg:w-[55%] opacity-90 self-end">
                        <Image
                            src="/images/about-6.png"
                            alt="family"
                            width={500}
                            height={600}
                            className="w-full aspect-[16/9] lg:aspect-[4/3] object-cover"
                        />
                    </div>
                    <div className="w-full p-6 lg:px-0 lg:w-[40%]">
                        <h1 className="text-[28px] lg:text-[35px] leading-[1.4] lg:leading-[60px]">
                            Honoring where you’ve been
                            <span className="font-handwriting text-primary text-[35px] lg:text-[60px]"> &amp; </span>
                            helping shape where you’re headed.
                        </h1>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between px-6 lg:pl-25 lg:pr-15 mt-16 lg:mt-50 gap-10 lg:gap-15 mb-16 lg:mb-20">
                    <h1 className="text-[28px] lg:text-[35px] font-heading leading-[1.3] lg:leading-[40px] lg:mr-10 lg:w-[25%]">Our<span className="font-handwriting text-primary text-[45px] lg:text-[55px]"> specialties </span>include…</h1>
                    <div className="flex flex-col gap-12 lg:gap-25 w-full lg:flex-1 min-w-0">
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Trauma</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.</p>
                            <div>
                                <a href="" className="relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Dissociation</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.</p>
                            <div>
                                <a href="" className="relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 lg:gap-25 w-full lg:flex-1 min-w-0">
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h2 className="font-heading text-[20px] lg:text-[22px]">EMDR</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
                            </p>
                            <div>
                                <a href="" className="relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Special Needs Parenting</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
                                Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
                            </p>
                            <div>
                                <a href="" className="relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default About