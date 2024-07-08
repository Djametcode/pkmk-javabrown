export default function WhyChooseUsComponent() {
  return (
    <div>
      <h1 className=" max-sm:text-2xl text-4xl font-extrabold text-center pt-14 font-poppins">
        Why Choose Our <span className=" text-[#f29b16]">Food</span>
      </h1>
      <div className=" grid grid-cols-3 max-sm:gap-y-5 max-sm:grid-cols-1 place-items-center pt-24">
        <div className=" w-[320px] h-[410px] max-sm:bg-slate-200 hover:bg-white rounded-3xl flex flex-col items-start justify-between p-10">
          <div className=" w-[60px] h-[60px] rounded-full overflow-hidden bg-[#f29b16]">
            <img
              className=" w-full h-full object-cover"
              src="/why1.png"
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-bold text-lg">Super Taste</h1>
            <p className=" text-[#757575] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              reprehenderit distinctio laudantium qui asperiores velit debitis
              nulla quis sed obcaecati, beatae voluptatibus tempore officiis.
              Sint, iste aspernatur. Optio, cumque natus.
            </p>
          </div>
        </div>
        <div className=" w-[320px] h-[410px] max-sm:bg-slate-200 hover:bg-white rounded-3xl flex flex-col items-start justify-between p-10">
          <div className=" w-[60px] h-[60px] rounded-full bg-[#f29b16] overflow-hidden">
            <img
              className=" w-full h-full object-cover"
              src="/why2.png"
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-bold text-lg">Fast Delivery</h1>
            <p className=" text-[#757575] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              reprehenderit distinctio laudantium qui asperiores velit debitis
              nulla quis sed obcaecati, beatae voluptatibus tempore officiis.
              Sint, iste aspernatur. Optio, cumque natus.
            </p>
          </div>
        </div>
        <div className=" w-[320px] h-[410px] max-sm:bg-slate-200 hover:bg-white rounded-3xl flex flex-col items-start justify-between p-10">
          <div className=" w-[60px] h-[60px] rounded-full bg-[#f29b16] overflow-hidden">
            <img
              className=" w-full h-full object-cover"
              src="/why3.png"
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-bold text-lg">Quality Food</h1>
            <p className=" text-[#757575] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              reprehenderit distinctio laudantium qui asperiores velit debitis
              nulla quis sed obcaecati, beatae voluptatibus tempore officiis.
              Sint, iste aspernatur. Optio, cumque natus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
