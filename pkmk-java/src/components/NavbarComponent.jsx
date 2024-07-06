import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

export default function NavbarComponent() {
  return (
    <div className=" relative z-30 h-[80px] max-w-[3000px] font-raleway flex justify-between items-center">
      <div className=" flex h-full items-center gap-3">
        <h1 className=" font-bold text-xl">PKMK Java brown</h1>
        <div className=" h-[35px] w-[35px]">
          <img
            className=" w-full h-full rounded-full"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
      </div>
      <div className=" font-semibold flex gap-12 items-center h-full">
        <div className=" flex gap-9 text-sm">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Tentang Kami</Link>
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
