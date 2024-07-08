/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarComponent({ setIsActive }) {
  return (
    <div className=" max-sm:sticky max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:ml-0 max-sm:mr-0 ml-44 mr-44 relative z-30 h-[80px] max-sm:h-[80px] max-sm:max-w-screen max-sm:text-white max-w-[3000px] font-raleway flex max-sm:gap-5 max-sm:justify-start max-sm:pl-6 justify-between items-center max-sm:bg-[#ff9b04]">
      <div
        onClick={() => setIsActive(true)}
        className=" cursor-pointer md:hidden"
      >
        <GiHamburgerMenu size={25} />
      </div>
      <div className=" flex h-full items-center gap-3">
        <h1 className=" font-bold text-xl max-sm:text-lg">PKMK Java brown</h1>
        <div className=" h-[35px] w-[35px]">
          <img
            className=" w-full h-full rounded-full"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
      </div>
      <div className=" max-sm:hidden font-semibold flex gap-12 items-center h-full">
        <div className=" flex gap-9 text-sm">
          <Link to={"#hero"}>Home</Link>
          <Link to={"#aboutus"}>Tentang Kami</Link>
          <Link to={"/"}>Daftar Menu</Link>
          <Link to={"/"}>Testimoni</Link>
          <Link to={"/"}>Kontak Kami</Link>
        </div>
        <div className=" flex gap-5">
          <IoSearch size={25} />
          <IoCartOutline size={25} />
        </div>
      </div>
    </div>
  );
}
