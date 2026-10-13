import Image from "next/image"

const Footer = () => {
    return (
        <>
            <div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 bg-background-white p-12 md:p-10 lg:p-20 pb-20 lg:pb-40">
                    <div className="w-full lg:w-[30%]">
                        <Image src="/images/Logo.png" alt="logo" width="100" height="100" className="w-full lg:w-[350px] text-[14px]" />
                        <p className="text-[14px] text-text-secondary mt-5 leading-[25px] lg:ml-5">
                            We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
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
                    <div className="text-[14px] pl-5 lg:pl-0">
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
                    </div>
                    <div className="w-full lg:w-[25%] text-[14px] pl-5 lg:pl-0">
                        <h2 className="uppercase tracking-[1.5px] mb-5">Contact</h2>
                        <p className="text-text-secondary">
                            925 Broadbeck Dr<br></br>
                            Suites 200 and 225<br></br>
                            Newbury Park, CA 91320<br></br>
                            info@conejovalleycounseling.com<br></br>
                            805.242.3120
                        </p>
                        <p className="text-text-secondary mt-5">
                            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley
                        </p>
                    </div>
                </div>
                <div className="bg-primary text-background-white py-2 px-5 lg:px-20 text-sm">
                    <ul className="flex flex-row flex-wrap gap-x-5 gap-y-1">
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Disclaimer</a></li>
                        <li>Website by Grow My Therapist</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer