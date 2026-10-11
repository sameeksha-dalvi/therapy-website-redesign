import Image from "next/image"

const Navbar = () => {
    return (

        <div className="flex justify-between p-4">
            <div>
                <Image src="/images/Logo.png" alt="logo" width="100" height="100"  className="w-[250px] h-auto" />
            </div>
            <div className="flex uppercase items-center text-text-primary text-[12px] tracking-[1.35px]">
                <ul className="flex gap-7 mr-4">
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Specialties</li>
                    <li>Methods</li>
                    <li>FAQs</li>
                </ul>
                <button className="uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background">Contact</button>
            </div>

        </div>

    )
}

export default Navbar