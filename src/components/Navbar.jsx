
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4">

      {/* Logo */}
      <div className="shrink-0">
        <Image
          src="/images/Logo.png"
          alt="logo"
          width={250}
          height={100}
          className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-4 lg:gap-7 uppercase text-text-primary text-[11px] lg:text-[12px] tracking-[1px] lg:tracking-[1.35px]">

        <ul className="flex flex-wrap items-center gap-x-4 lg:gap-7 gap-y-3">
          <li>About</li>
          <li>Our Team</li>
          <li>Specialties</li>
          <li>Methods</li>
          <li>FAQs</li>
        </ul>

        <button className="shrink-0 uppercase rounded-full border px-4 lg:px-6 py-3 hover:bg-background-dark hover:text-background">
          Contact
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
