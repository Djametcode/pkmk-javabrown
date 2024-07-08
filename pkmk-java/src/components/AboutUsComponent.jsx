export default function AboutUsComponent() {
  return (
    <div
      id="aboutus"
      className=" w-full font-raleway max-sm:justify-center max-sm:mb-14 h-[600px] flex max-sm:flex-col justify-between items-center"
    >
      <div className=" max-sm:hidden basis-1/2 h-[700px] flex items-center justify-center">
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
          <h1 className=" max-sm:text-2xl text-4xl font-extrabold">
            About <span className=" text-[#f29b16]">Us</span>
          </h1>
          <div className=" md:hidden w-full h-[300px]">
            <img
              className=" w-full h-full object-cover rounded-3xl"
              src="herobg.jpg"
              alt=""
            />
          </div>
          <p className=" text-left text-sm max-sm:text-sm text-[#757575]">
            Perkenalkan kami tim PKMK dari universitas al ghozali, Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Aliquam odio
            perspiciatis vero cumque et fugiat molestiae adipisci veritatis
            exercitationem, nemo recusandae corporis ducimus dicta ullam ea
            temporibus expedita, excepturi architecto!
          </p>
          <div className=" w-[150px] h-[50px] bg-white border border-[#ff9b04] rounded-2xl font-extrabold text-[#ff9b04]">
            <button className=" w-full h-full">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
