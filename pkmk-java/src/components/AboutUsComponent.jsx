export default function AboutUsComponent() {
  return (
    <div
      id="aboutus"
      className=" w-full font-raleway max-sm:h-[200px] h-[600px] flex max-sm:flex-col-reverse justify-between items-center"
    >
      <div className=" max-sm:hidden basis-1/2 max-sm:h-full h-[700px] flex items-center justify-center">
        <div className=" w-[500px] h-[500px]">
          <img
            className=" w-full h-full object-cover rounded-full"
            src="/hero2.jpg"
            alt="hero"
          />
        </div>
      </div>
      <div className=" basis-1/2 max-sm:basis-0 max-sm:h-[200px] h-[700px] flex items-center justify-center">
        <div className=" flex flex-col gap-5 items-start w-[300px]">
          <h1 className=" text-4xl font-extrabold">
            About <span className=" text-[#f29b16]">Us</span>
          </h1>
          <p className=" text-left text-sm text-[#757575]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae recusandae non earum saepe minima impedit tempore
            praesentium deserunt dolor! Vitae, soluta omnis. Labore facere
            officiis totam nesciunt voluptatum ad!
          </p>
          <div className=" w-[150px] h-[50px] bg-white border border-[#ff9b04] rounded-2xl font-extrabold text-[#ff9b04]">
            <button className=" w-full h-full">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
