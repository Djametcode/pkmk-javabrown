import AboutUsComponent from "./components/AboutUsComponent";
import BestMenuComponent from "./components/BestMenuComponent";
import CustomersReviewComponents from "./components/CustomerReview";
import FooterComponent from "./components/FooterComponents";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import WhyChooseUsComponent from "./components/WhyChooseUsComponents";

export default function App() {
  return (
    <div className=" w-screen h-full bg-slate-50">
      <div className=" w-full h-full relative">
        {/* <div className=" absolute top-0 right-0 z-0">
          <div className=" bg-[#ff9d02] h-[800px] w-[900px] rounded-bl-[500px]"></div>
        </div> */}
        <NavbarComponent />
        <div className=" w-full relative max-sm:pr-5 max-sm:pl-5 pr-44 pl-44 ">
          <HeroComponent />
          <AboutUsComponent />
          <BestMenuComponent />
          <WhyChooseUsComponent />
          <CustomersReviewComponents />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}
