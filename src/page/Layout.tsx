/** @format */

// src/components/Layout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CheveRon } from "../assets/icon";
import logo from "../assets/img/logo.png";
import { Footer } from "../component";
const Layout: React.FC = () => {
  return (
    <div className="">
      <div className=" shadow-2xl ">
        <nav className=" md:container mx-auto flex justify-between px-6 ">
          <ul className="flex space-x-16 px-4  font-lexend items-center text-primary ">
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/">
                {" "}
                <img
                  src={logo}
                  alt=""
                  className=" w-32"
                />
              </Link>
            </li>
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/">Trang chủ</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/projects">Dự án</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/events">Sự kiện</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/registerfarmer">Đối tác</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-2 items-center font-medium">
              <Link to="/price">Bảng giá</Link>
              <CheveRon size={6}></CheveRon>
            </li>
          </ul>
          <div className=" flex items-center font-lexend space-x-4">
            <Link
              to="/login"
              className=" p-2 hover:scale-105 hover:bg-opacity-90 px-5 text-sm bg-primary font-light border-primary border-2 text-white rounded-xl"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className=" p-2 px-5 bg-white hover:scale-105  hover:bg-primary hover:text-white hover:border-black hover:bg-opacity-85 hover:border-2 font-light text-sm text-primary border-2 border-primary rounded-xl"
            >
              Đăng kí
            </Link>
          </div>
        </nav>
      </div>
      <div className=" bg-white">
        <Outlet />
      </div>
      <footer className="p-4 text-center bg-button">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
