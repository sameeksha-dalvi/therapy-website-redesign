import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="bg-background-white">
                <h1 className="text-[30px] lg:text-[35px] font-heading mt-10 lg:mt-15 mb-5 px-6 lg:px-0 lg:ml-20">Who we <span className="font-handwriting text-primary text-[50px] lg:text-[60px]">help</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12 mb-16 lg:mb-20 lg:ml-40">
                    <div>
                        <Image src="/images/about-redesign-1.jpeg" alt="adults"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover" />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Anxiety & Stress</h2>
                        <p className="text-[15px] leading-[27px]">For the overthinking, tension, and endless what-ifs that make it difficult to feel present. Find tools to navigate uncertainty and feel more grounded.</p>
                    </div>

                    <div>
                        <Image src="/images/about-redesign-2.jpeg" alt="couples"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Trauma & Healing</h2>
                        <p className="text-[15px] leading-[27px]">You don't have to make sense of everything alone. Explore the impact of past experiences in a supportive space, at your own pace.</p>
                    </div>
                    <div>
                        <Image src="/images/about-redesign-3.jpeg" alt="children"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-6 lg:mt-10 mb-4 lg:mb-5">Burnout & Perfectionism</h2>
                        <p className="text-[15px] leading-[27px]">You deserve more than a life built around constant pressure. Learn to soften expectations, make room for rest, and reconnect with what matters to you.</p>
                    </div>
                </div>
                <div className="relative w-full">
                    <Image src="/images/about-redesign-5.jpeg" alt="children running"
                        width={200}
                        height={300}
                        className="w-full h-[350px] sm:h-[420px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <h1 className="absolute top-1/2 -translate-y-1/2 lg:top-auto lg:translate-y-0 bottom-auto lg:bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-[85%] lg:w-[65%] text-center lg:text-left text-white font-heading text-[25px] sm:text-[30px] lg:text-[37px] leading-[1.3] pl-0 lg:pl-20 pb-0 lg:pb-10">You can be doing your best and still feel overwhelmed.<span className="italic font-serif"> We'll take things one step at a time.</span></h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 my-16 lg:my-20 px-6 lg:px-40">

                    <h1 className="text-[28px] lg:text-[35px] font-heading leading-[40px] lg:max-w-[280px] shrink-0">Our areas of <span className="font-handwriting text-primary text-[50px] lg:text-[60px]">expertise</span></h1>
                    <div className="w-full lg:w-[340px]">
                        <ul className="uppercase tracking-[1.8px] text-[13px] lg:text-[15px] w-full">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Anxiety</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Panic</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Chronic Stress</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Childhood Experiences</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Emotional Regulation</a></li>
                            <li className="border-b border-black/20 pb-7 mb-0 lg:border-b-0 lg:pb-5 lg:mb-5"><a href="">Coping Strategies</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[340px]">
                        <ul className="uppercase tracking-[1.8px] text-[13px] lg:text-[15px] w-full">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Trauma</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Complex Trauma</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Burnout</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Perfectionism</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Mindfulness</a></li>
                            <li className="pb-5 mb-5"><a href="">…and more.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[var(--beige-50)] text-text-primary flex flex-col lg:flex-row gap-8 lg:gap-20 pl-6 lg:pl-20 pr-6 lg:pr-0">
                    <div className="w-full lg:w-[70%] my-10 lg:my-30">
                        <h2 className="mb-10 lg:mb-30 uppercase text-[15px]">How we work</h2>
                        <h1 className="font-heading text-[30px] lg:text-[35px] mb-8 lg:mb-10">Therapy that meets you where you are.</h1>
                        <div className="w-full mb-8 lg:hidden">
                            <Image
                                src="/images/about-redesign-4.jpeg"
                                alt="happy girls"
                                width={500}
                                height={600}
                                className="w-full aspect-[16/9] object-cover object-[center_60%] opacity-80"
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-[14px] lg:text-[15px] mb-2 tracking-[1.5px] font-normal leading-[25px] uppercase">We begin by understanding your story, not by making assumptions about it.</h2>
                                <p className="text-[14px] lg:text-[15px] font-light leading-[27px]">Sessions offer an opportunity to explore recurring patterns, understand your responses, and consider what changes might help you in daily life. Dr. Maya Reynolds takes a warm, collaborative approach, making room for your experiences, your questions, and the changes you hope to make.</p>
                            </div>
                            <p className="flex-1 min-w-0 text-[14px] lg:text-[15px] font-light leading-[27px]">Healing isn't always a straight line. At times, that may mean exploring difficult experiences; at others, it may mean developing practical tools to navigate anxiety, regulate emotions, and manage stress. The work moves at a pace that respects your needs, with an emphasis on building safety, insight, and lasting resilience.</p>
                        </div>
                        <div><a href="" className="mt-15 relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Meet Dr. Maya Reynolds</a></div>
                    </div>
                    <div className="hidden lg:block mt-30 w-[30%]">
                        <Image src="/images/about-redesign-4.jpeg" alt="happy girls"
                            width={500}
                            height={600}
                            className="w-full aspect-[2/3] object-cover opacity-80" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row my-16 lg:my-25 items-start lg:items-end justify-between gap-8 lg:gap-15">
                    <div className="w-[calc(100%-1.5rem)] lg:w-[55%] opacity-90 self-end">
                        <Image
                            src="/images/about-redesign-6.jpeg"
                            alt="family"
                            width={500}
                            height={600}
                            className="w-full aspect-[16/9] lg:aspect-[4/3] object-cover"
                        />
                    </div>
                    <div className="w-full p-6 lg:px-0 lg:w-[40%]">
                        <h1 className="text-[28px] lg:text-[35px] leading-[1.4] lg:leading-[60px]">
                            Making sense of your experiences
                            <span className="font-handwriting text-primary text-[35px] lg:text-[60px]"> &amp; </span>
                            reconnecting with yourself.
                        </h1>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between px-6 lg:pl-25 lg:pr-15 mt-16 lg:mt-50 gap-10 lg:gap-15 mb-16 lg:mb-20">
                    <h1 className="text-[28px] lg:text-[35px] font-heading leading-[1.3] lg:leading-[40px] lg:mr-10 lg:w-[25%]">Our<span className="font-handwriting text-primary text-[45px] lg:text-[55px]"> specialties </span>include…</h1>
                    <div className="flex flex-col gap-12 lg:gap-25 w-full lg:flex-1 min-w-0">
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Trauma & Healing</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">Explore how past experiences may still affect your sense of safety, relationships, and daily life. Therapy offers a supportive space to process these experiences at a pace that feels manageable.</p>
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
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Anxiety & Panic</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">When worry, racing thoughts, or physical tension make it difficult to feel at ease, therapy can help you understand your patterns and develop practical ways to navigate anxiety.</p>
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
                                EMDR is an evidence-based approach that may help people process distressing memories and experiences. Maya can work with you to explore whether it fits your needs and therapeutic goals.
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
                            <h2 className="font-heading text-[20px] lg:text-[22px]">Burnout & Perfectionism</h2>
                            <p className="text-[14px] lg:text-[15px] leading-[27px] font-light">
Constant pressure to achieve, get things right, or meet everyone's expectations can leave you feeling exhausted. Therapy can help you recognise these patterns and build a more sustainable balance.                            </p>
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