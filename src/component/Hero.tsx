/** @format */
import { Link } from "react-router-dom";
import image1 from "../assets/img/5.png";
import image2 from "../assets/img/6.png";
const Hero = () => {
  return (
    <section className=" text-primary overflow-hidden relative font-lexend bg-background ">
      <div className=" font-lexend md:container mx-auto py-24 flex  justify-between items-center">
        <div className=" flex flex-col space-y-2 text-primary w-1/2">
          <p className=" font-bold text-sm">Nền tảng gọi vốn Nông Nghiệp</p>
          <h1 className=" text-5xl font-bold leading-snug">
            Happy Farm <br></br> Nâng tầm Nông trại Việt
          </h1>
          <p className="font-extralight w-3/4 ">
            Nơi Khách hàng tự tay trồng cây trên nền tảng trực tuyến! Farm
            Digitalization giúp các chủ nông trại kết nối với khách hàng và kiểm
            soát Quy trình gọi vốn
          </p>
          <div className=" flex items-center font-lexend space-x-6 py-4">
            <Link
              to="/login"
              className=" p-4  hover:bg-opacity-85 hover:scale-105 px-6  bg-primary font-medium border-primary border-2 text-white rounded-md"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className=" p-4 px-6 bg-white font-medium  hover:scale-105 text-primary border-2 border-primary rounded-md"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
        <div className=" w-1/2  relative">
          <div className=" w-full">
            <img
              src={image1}
              alt=""
              className=" scale-150"
            />
          </div>
        </div>
      </div>
      <div className=" ">
        <img
          src={image2}
          alt=""
          className=" absolute -right-28 -bottom-6 w-1/3 z-2"
        />
      </div>
    </section>
  );
};
export default Hero;
