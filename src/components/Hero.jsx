import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="flex justify-between font-body mt-8">
                <div className="w-[38%] shrink-0">
                    <Image src="/images/hero-image-1.png"
                        alt="family therapy"
                        width={500}
                        height={600}
                        className="w-full h-auto" />
                </div>

                <div className="flex flex-col justify-between px-[45px] w-[47%]">
                    <p className="text-[15px] tracking-[1.8px] font-normal leading-[27px] mb-[80px]">ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA</p>
                    <div>
                        <h1 className="font-heading text-[50px] font-[100] tracking-[-0.4px] leading-[70px]">
                            Rebuild your foundation on solid ground and finally begin to <strong className="font-handwriting text-primary text-[80px]">thrive</strong>.
                        </h1>
                        <p className="text-[14px] leading-[30px] mt-[20px]">Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.</p>
                    </div>

                    <div>
                        <a href="" className="relative inline-block text-[12px] uppercase
                        after:absolute after:bottom-0 after:left-0
                        after:h-[0.5px] after:w-full after:bg-current
                        after:origin-left after:scale-x-100
                        after:transition-transform after:duration-800
                        hover:after:scale-x-0"> Book an Appointment</a>
                    </div>
                </div>
                <div className="w-[10%] flex flex-col justify-end">
                    <Image src="/images/hero-image-2.png" alt="child therapy"
                        width={250}
                        height={300}
                        className="w-full h-[300px] opacity-55" />
                </div>

            </div>
            <div className="flex justify-between items-center my-35 ">
                <div className="w-[60%] pl-20">
                    <h1 className="font-heading text-[35px] mb-10">You’re holding onto hope that life can be better than it is right now.</h1>
                    <div className="flex gap-10">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-[14px] mb-2 tracking-[1.5px] font-normal leading-[25px] uppercase">At Conejo Valley Family Counseling we want to make that hope a reality. </h2>
                            <p className="text-[14px] font-light leading-[27px]">
                                Whether you're an adult seeking personal growth,  looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                            </p>
                        </div>
                        <p className="flex-1 min-w-0 text-[14px] leading-[27px] font-light">
                            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                        </p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <Image src="/images/hero-image-3.png"
                        alt="family therapy"
                        width={500}
                        height={600}
                        className="w-full h-auto" />
                </div>

            </div>
        </>

    )
}

export default Hero