/** @format */
import { FormRegisterFarmer } from "../component";
import { useEffect } from "react";
const RegisterFarmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-background  px-12  space-x-16 h-screen relative overflow-hidden">
      <div className=" flex items-center justify-start md:conntainer">
        <div className=" w-1/2 z-10">
          {" "}
          <div className=" md:container mx-auto flex items-center px-16 space-x-6  ">
            <div className=" flex flex-col  ">
              <div className="text-start leading-normal text-3xl font-lexend  ">
                Trở thành{" "}
                <div className="text-primary">đối tác của chúng tôi</div>{" "}
                <div className=" text-3xl py-2">
                  Thu nhập lên đến{" "}
                  <span className=" font-bold text-green-500">
                    100-200 triệu tháng
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724909/tim-mossholder-xDwEa2kaeJA-unsplash_ctimuo.jpg"
                  alt=""
                  className=" rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto w-1/2 py-24 flex flex-col items-center z-10">
          <FormRegisterFarmer></FormRegisterFarmer>
        </div>
        <div className=" absolute  bg-opacity-80 bg-orange-100 w-96 h-96 scale-150 rounded-full -top-60 -left-60 z-1"></div>
        <div className=" absolute  bg-opacity-80 bg-orange-100 w-96 h-96 scale-150 rounded-full -bottom-60 -right-60"></div>
      </div>
    </section>
  );
};
export default RegisterFarmer;
