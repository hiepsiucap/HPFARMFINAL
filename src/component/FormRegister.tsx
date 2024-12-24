/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const FormRegister = () => {
  return (
    <section className=" rounded-md p-4 px-6 pt-10 font-lexend bg-white w-full">
      <img src={logo} className=" w-32 mx-auto" alt="" />
      <form action="" className=" space-y-2">
        <div className=" py-1 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary"> Họ và tên:</label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-1 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            Số điện thoại:
          </label>
          <input
            className=" w-full py-1 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-1 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            Tên công ty:
          </label>
          <input
            className=" w-full py-1 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-1 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            {" "}
            Địa chỉ Email:
          </label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-1 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary"> Mật khẩu :</label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" flex justify-between">
          <div className="">Quên mật khẩu?</div>
          <Link to="/login" className="">
            Đã có tài khoản?
          </Link>
        </div>

        <div className=" py-6 flex items-center justify-center ">
          <Link
            to="/admin/dashboard"
            className=" px-6 py-4 rounded-lg  bg-primary text-white font-bold text-sm"
          >
            Đăng kí
          </Link>
        </div>
      </form>
    </section>
  );
};

export default FormRegister;
