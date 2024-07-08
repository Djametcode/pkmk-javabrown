import { Link } from "react-router-dom";

export default function WhatsappLinkComponent() {
  return (
    <div className=" fixed bottom-7 right-7 md:hidden z-50">
      <div className=" w-[50px] h-[50px]">
        <Link className=" w-full h-full" to={"https://wa.me/6285290376771"}>
          <img
            className=" w-full h-full object-cover"
            src="/whatsapp.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
