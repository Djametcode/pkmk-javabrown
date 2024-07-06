export default function HeroComponent() {
  return (
    <div className=" font-raleway h-[600px] flex justify-between items-center pt-16">
      <div className=" basis-1/2">
        <div className=" flex flex-col gap-5 items-start w-[300px]">
          <h1 className=" text-4xl font-extrabold">
            We Server Delicious <span className=" text-[#f29b16]">Food</span>
          </h1>
          <p className=" text-left text-sm text-[#757575]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae recusandae non earum saepe minima impedit tempore
            praesentium deserunt dolor! Vitae, soluta omnis. Labore facere
            officiis totam nesciunt voluptatum ad!
          </p>
          <div className=" w-[150px] h-[50px] bg-[#ff9b04] rounded-2xl font-extrabold text-white">
            <button className=" w-full h-full">Order Now</button>
          </div>
        </div>
      </div>
      <div className=" basis-1/2 h-[700px] flex items-center justify-center">
        <div className=" w-[500px] h-[500px]">
          <img
            className=" w-full h-full object-cover rounded-full"
            src="/hero0.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}
