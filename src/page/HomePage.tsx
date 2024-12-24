/** @format */
/** @format */
import { Hero, ListProject, ListEvent } from "../component";
import { Link } from "react-router-dom";
import Chatbot from "../component/ChatBot";
function HomePage() {
  return (
    <>
      <Hero></Hero>
      <ListProject></ListProject>
      <ListEvent></ListEvent>
      <Chatbot />
      <div className=" md:container relative z-50 mx-auto flex items-center space-x-6 py-32 ">
        <div className=" flex flex-col w-1/2 items-start">
          <div className="text-start leading-normal text-3xl font-lexend  ">
            Trở thành <div className="text-primary">đối tác của chúng tôi</div>{" "}
            <div className=" text-3xl py-2">
              Thu nhập lên đến{" "}
              <span className=" font-bold text-green-500">
                100-200 triệu tháng
              </span>
            </div>
          </div>
          <Link
            to="/registerFarmer"
            className=" text-xl text-white bg-primary py-3 px-10 font-lexend my-8 rounded-lg"
          >
            Đăng kí ngay
          </Link>
        </div>
        <div className=" w-1/2">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724909/tim-mossholder-xDwEa2kaeJA-unsplash_ctimuo.jpg"
            alt=""
            className=" rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
