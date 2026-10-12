import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="bg-background-white">
                <h1 className="text-[35px] font-heading mt-15 mb-5 ml-20">Who we <span className="font-handwriting text-primary text-[60px]">help</span></h1>
                <div className="grid grid-cols-3 gap-8 px-12 mb-20 ml-40">
                    <div>
                        <Image src="/images/about-1.png" alt="adults"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover" />
                        <h2 className="text-[22px] font-heading mt-10 mb-5">Adults</h2>
                        <p className="text-[15px]">Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.</p>
                    </div>

                    <div>
                        <Image src="/images/about-2.png" alt="couples"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-10 mb-5">Couples</h2>
                        <p className="text-[15px]">Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.</p>
                    </div>
                    <div>
                        <Image src="/images/about-3.png" alt="children"
                            width={200}
                            height={300}
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <h2 className="text-[22px] font-heading mt-10 mb-5">Children & Teens</h2>
                        <p className="text-[15px]">Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.</p>
                    </div>
                </div>
                <div className="relative w-full">
                    <Image src="/images/about-4.png" alt="children running"
                        width={200}
                        height={300}
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <h1 className="absolute bottom-10 left-8 w-[65%] text-left text-white font-heading text-[37px] leading-[]27px pl-20 pb-10">You deserve a place where your story is heard, valued, and understood.<span className="italic font-serif"> Nothing will be too heavy for us to carry together.</span></h1>
                </div>
                <div className="flex justify-between my-20 px-40">

                    <h1 className="text-[35px] font-heading max-w-[280px]">Our areas of <span className="font-handwriting text-primary text-[60px]">expertise</span></h1>
                    <div className="">
                        <ul className="uppercase tracking-[1.8px] text-[14px] w-[340px]">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Dissociation</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Trauma</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Family conflict</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Special needs parenting</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Depression</a></li>
                            <li className="pb-5 mb-5"><a href="">marriage</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uppercase tracking-[1.8px] text-[14px] w-[340px]">
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Anxiety</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">Relationships</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">children</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">teens</a></li>
                            <li className="border-b border-black/20 pb-7 mb-7"><a href="">intimacy & connection</a></li>
                            <li className="pb-5 mb-5"><a href="">…and more.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[var(--beige-50)] flex gap-20 pl-20">
                    <div className="my-30 w-[70%]">
                        <h2 className="mb-30 uppercase text-[15px]">How we work</h2>
                        <h1 className="font-heading text-[35px] mb-10">We’re here to make a difference.</h1>
                        <div className="flex gap-10">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-[14px] mb-2 tracking-[1.5px] font-normal leading-[25px] uppercase">The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.</h2>
                                <p className="text-[14px] font-light leading-[27px]">Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.</p>
                            </div>
                            <p className="flex-1 min-w-0 text-[14px] leading-[27px] font-light">Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.</p>
                        </div>
                        <div><a href="" className="mt-15 relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0">Learn more about us</a></div>
                    </div>
                    <div className="mt-30 w-[30%]">
                        <Image src="/images/about-5.png" alt="happy girls"
                            width={500}
                            height={600}
                            className="w-full h-auto" />
                    </div>
                </div>

                <div className="flex my-25 items-end justify-start">
                    <div>
                        <Image src="/images/about-6.png" alt="family"
                            width={500}
                            height={600}
                            className="w-full h-auto" />
                    </div>

                    <div>
                        <h1>Honoring where you’ve been & helping shape where you’re headed. </h1>
                    </div>
                </div>
                <div className="flex justify-between my-20 px-40">
                    <h1 className="text-[35px] font-heading max-w-[280px]">Our <span className="font-handwriting text-primary text-[60px]">specialties</span> include…</h1>
                    <div>
                        <div>
                            <h2>Trauma</h2>
                            <p>We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.</p>
                            <div>
                                <a href="">Learn more</a>
                            </div>
                        </div>
                        <div>
                            <h2>Dissociation</h2>
                            <p>We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.</p>
                            <div>
                                <a href="">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>EMDR</h2>
                            <p>
                                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
                            </p>
                            <div>
                                <a href="">Learn more</a>
                            </div>
                        </div>
                        <div>
                            <h2>Special Needs Parenting</h2>
                            <p>
                                Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
                            </p>
                            <div>
                                <a href="">Learn more</a>
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