import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div className=" w-full grid grid-cols-4 max-sm:grid-cols-1 max-sm:justify-items-start gap-y-5 place-items-start justify-items-center mt-24 font-openSans ">
      <div className=" flex flex-col gap-3">
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
        <div className=" flex gap-2">
          <Link to={"https://google.com"}>
            <FaInstagram size={23} />
          </Link>
          <FaWhatsapp size={23} />
          <FaTiktok size={23} />
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className=" font-bold">Jam Operasional</h1>
        <p className=" text-[#757575]">Open 24 jam</p>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className=" font-bold">Contact Us</h1>
        <p className=" text-[#757575]">Whatsapp</p>
        <p className=" text-[#757575]">Whatsapp</p>
        <p className=" text-[#757575]">pkmk@gmail.com</p>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className=" font-bold">Subscribe Us</h1>
      </div>
    </div>
  );
}
