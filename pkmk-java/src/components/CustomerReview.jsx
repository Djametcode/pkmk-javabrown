import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function CustomersReviewComponents() {
  const dummyCustomer = [
    {
      customerName: "James Bond",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum cum id non laborum dicta obcaecati ea vel, velit eius consectetur modi voluptatibus, iure nihil officiis. Non esse optio similique?",
      image: "/hero.jpg",
    },
    {
      customerName: "Deny Caknan",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum cum id non laborum dicta obcaecati ea vel, velit eius consectetur modi voluptatibus, iure nihil officiis. Non esse optio similique?",
      image: "/hero0.jpg",
    },
    {
      customerName: "Happy Asmara",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum cum id non laborum dicta obcaecati ea vel, velit eius consectetur modi voluptatibus, iure nihil officiis. Non esse optio similique?",
      image: "/hero2.jpg",
    },
    {
      customerName: "Alan Walker",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum cum id non laborum dicta obcaecati ea vel, velit eius consectetur modi voluptatibus, iure nihil officiis. Non esse optio similique?",
      image: "/hero3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const nextReviewHandler = () => {
    if (currentIndex === dummyCustomer.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousReviewHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(dummyCustomer.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCustomer = dummyCustomer[currentIndex];

  return (
    <div className=" flex flex-col items-center pt-24 rounded-3xl mt-24">
      <h1 className="text-4xl font-extrabold text-center font-openSans">
        Customers <span className="text-[#f29b16]">Say</span>
      </h1>
      <div className=" flex items-center justify-center h-[550px] w-[1200px] pt-16">
        <div className="flex flex-col items-start gap-3 basis-1/2 bg-white p-10 rounded-3xl">
          <div className="flex gap-3 mb-4">
            <div className="w-[40px] h-[40px] bg-black rounded-full"></div>
            <div className=" flex flex-col h-full justify-between">
              <p className=" text-base font-bold">
                {currentCustomer.customerName}
              </p>
              <div className="text-[#f29b16] flex gap-1">
                <IoStar size={13} />
                <IoStar size={13} />
                <IoStar size={13} />
                <IoStar size={13} />
                <IoStar size={13} />
              </div>
            </div>
          </div>
          <div className=" text-[#757575] font-openSans">
            <q>{currentCustomer.review}</q>
          </div>
          <div className="flex mt-4 gap-5 items-center">
            <div onClick={previousReviewHandler} className=" cursor-pointer">
              <IoMdArrowRoundBack size={18} />
            </div>
            {dummyCustomer.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[20px] h-[20px] rounded-full ${
                  index === currentIndex
                    ? "bg-black scale-150 shadow-sm"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
            <div onClick={nextReviewHandler} className=" cursor-pointer">
              <IoMdArrowRoundForward size={18} />
            </div>
          </div>
        </div>
        <div className=" basis-1/2 w-full flex items-center justify-center">
          <img
            className=" w-[400px] h-[400px] object-cover rounded-full"
            src={dummyCustomer[currentIndex].image}
          />
        </div>
      </div>
    </div>
  );
}
