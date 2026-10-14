import Image from "next/image"

const Footer = () => {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr] gap-10 lg:gap-16 bg-background-white px-6 py-12 md:px-10 lg:px-20 lg:py-24">
                    <div className="w-full">
                        <Image src="/images/logo-redesign-2.png" alt="logo" width="100" height="100" className="w-full lg:w-[80%] text-[14px]" />
                        <p className="text-[14px] text-text-secondary mt-5 leading-[25px] lg:ml-5">
                            A calm, supportive space to understand yourself, navigate life's challenges, and move toward meaningful change.
                        </p>
                    </div>
                    <div className="text-[14px] pl-5 lg:ml-5 lg:pl-0">
                        <h2 className="uppercase tracking-[1.5px] mb-5">Navigate</h2>
                        <ul className="text-text-secondary">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    {/* <div className="text-[14px] pl-5 lg:pl-0">
                        <h2 className="uppercase tracking-[1.5px] mb-5">Our Team</h2>
                        <ul className="text-text-secondary">
                            <li><a href="">Jennifer Anderson</a></li>
                            <li><a href="">Heather Williams-Baumgart</a></li>
                            <li><a href="">Autumn Bodily</a></li>
                            <li><a href="">Candace Bletscher</a></li>
                            <li><a href="">Samantha Johnson</a></li>
                            <li><a href="">Rosa Gomez</a></li>
                            <li><a href="">Chad Flores</a></li>
                            <li><a href="">Simran Sidhu</a></li>
                            <li><a href="">Jessica Jauregui</a></li>
                        </ul>
                    </div> */}
                    <div className="w-full text-[14px] pl-5 lg:pl-0">
                        <h2 className="uppercase tracking-[1.5px] mb-5">Contact</h2>
                        <p className="text-text-secondary">
                            123th Street 45 W<br></br>
                            Santa Monica, CA 90401<br></br>
                            info@drmayareynolds.com<br></br>
                            805.242.3120
                        </p>
                        <p className="text-text-secondary mt-5">
                           In-person & online in California
                        </p>
                    </div>
                </div>
                <div className="bg-primary text-background-white py-2 px-5 lg:px-20 text-sm">
                    <ul className="flex flex-row flex-wrap gap-x-5 gap-y-1">
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Disclaimer</a></li>
                        <li>Website by Grow My Therapy</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer