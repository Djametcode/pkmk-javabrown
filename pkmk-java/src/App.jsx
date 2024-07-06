import AboutUsComponent from "./components/AboutUsComponent";
import BestMenuComponent from "./components/BestMenuComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";

export default function App() {
  return (
    <div className=" w-screen h-full bg-slate-50">
      <div className=" w-full h-full relative">
        {/* <div className=" absolute top-0 right-0 z-0">
          <div className=" bg-[#ff9d02] h-[800px] w-[900px] rounded-bl-[500px]"></div>
        </div> */}
        <div className=" w-full relative pr-36 pl-36 ">
          <NavbarComponent />
          <HeroComponent />
          <AboutUsComponent />
          <BestMenuComponent />
        </div>
      </div>
    </div>
  );
}
