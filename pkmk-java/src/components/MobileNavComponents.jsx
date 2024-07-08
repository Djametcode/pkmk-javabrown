/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function MobileNavComponent({ setIsActive }) {
  return (
    <div className=" w-5/6 h-screen fixed top-0 bg-slate-100 z-40 font-poppins p-10">
      <div
        onClick={() => setIsActive(false)}
        className=" cursor-pointer absolute top-5 right-5"
      >
        <IoMdClose size={20} />
      </div>
      <div className=" flex flex-col gap-4 text-base h-full justify-start">
        <Link to={"#hero"}>Home</Link>
        <Link to={"#aboutus"}>Tentang Kami</Link>
        <Link to={"/"}>Daftar Menu</Link>
        <Link to={"/"}>Testimoni</Link>
        <Link to={"/"}>Kontak Kami</Link>
      </div>
    </div>
  );
}
