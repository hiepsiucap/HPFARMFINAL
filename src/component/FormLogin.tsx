/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/community");
    }
  };

  return (
    <section className=" rounded-md p-4 px-6 pt-10 font-lexend bg-white w-full">
      <img
        src={logo}
        className=" w-48 mx-auto"
        alt=""
      />
      <form
        action=""
        className=" space-y-3"
        onSubmit={handleSubmit}
      >
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            {" "}
            Địa chỉ Email:
          </label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary"> Mật khẩu :</label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="password"
          />
        </div>
        <div className=" flex justify-between">
          <div className="">Quên mật khẩu?</div>
          <Link
            to="/register"
            className=""
          >
            Chưa có tài khoản?
          </Link>
        </div>
        <div className=" py-10 flex justify-center items-center">
          <button
            type="submit"
            className=" hover:bg-opacity-75 px-6 py-4 rounded-lg   bg-primary text-white font-bold text-sm"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
