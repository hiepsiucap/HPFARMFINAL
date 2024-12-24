/** @format */
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const features = [
    "Trang chủ",
    "Danh sách dự án đang hiện hữu",
    "Đăng kí dự án miễn phí",
    "Báo giá sản phẩm",
  ];
  const freeTools = ["Danh sách sự kiện", "Xem Tất Cả Thông tin Dự Án"];
  const company = [
    "Về Chúng Tôi",
    "Tuyển Dụng",
    "Ban Quản Lý",
    "Hội Đồng Quản Trị",
    "Quan Hệ Nhà Đầu Tư",
    "Blog",
    "Liên Hệ",
  ];
  const partners = [
    "Đối Tác",
    "Tất Cả Chương Trình",
    "Đối Tác Giải Pháp",
    "Đối Tác Ứng Dụng",

    "Liên Kết",
  ];
  const customers = [
    "Khách Hàng",
    "Hỗ Trợ Khách Hàng",
    "Tham Gia Nhóm Người dùng",
  ];
  return (
    <section className=" md:container mx-auto py-12">
      <div className=" flex space-x-16">
        <div className=" text white font-bold font-lexend">
          <h4 className=" text-white text-start py-4">Tính năng nổi bật</h4>
          <div className=" grid grid-cols-2 font-lexend gap-x-6">
            {features.map((freeTool) => {
              return (
                <Link
                  to="/"
                  key={freeTool}
                  className="py-2 text-slate-300 text-start text-xs font-bold"
                >
                  {freeTool}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" border border-slate-300 "></div>
        <div className=" text white font-bold font-lexend">
          <h4 className=" text-white text-start py-4">Đầu tư tiện lợi</h4>
          <div className=" grid grid-cols-1 font-lexend gap-x-6">
            {freeTools.map((freeTool) => {
              return (
                <Link
                  to="/"
                  key={freeTool}
                  className="py-2 text-slate-300 text-start text-xs font-bold"
                >
                  {freeTool}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" text white font-bold font-lexend">
          <h4 className=" text-white text-start py-4">Về chúng tôi</h4>
          <div className=" grid grid-cols-1 font-lexend gap-x-6">
            {company.map((cp) => {
              return (
                <Link
                  to="/"
                  key={cp}
                  className="py-2 text-slate-300 text-start text-xs font-bold"
                >
                  {cp}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" text flex justify-between flex-col white font-bold font-lexend">
          <div>
            <h4 className=" text-white text-start py-4">
              Đối tác của HappyFarm
            </h4>
            <div className=" grid grid-cols-1 font-lexend gap-x-6">
              {partners.map((partner) => {
                return (
                  <Link
                    to="/"
                    key={partner}
                    className="py-2 text-slate-300 text-start text-xs font-bold"
                  >
                    {partner}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className=" text-white text-start py-4">Chăm sóc Khách Hàng</h4>
            <div className=" grid grid-cols-1 font-lexend gap-x-6">
              {customers.map((customer) => {
                return (
                  <Link
                    to="/"
                    key={customer}
                    className="py-2 text-slate-300 text-start text-xs font-bold"
                  >
                    {customer}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex space-x-5 items-center pt-9 justify-center">
        <div className=" border border-slate-300 p-0 w-full h-0"></div>
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-slate-300  w-9 h-9"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-slate-300  w-9 h-9"
        />
        <FontAwesomeIcon
          icon={faTiktok}
          className="text-slate-300  w-9 h-9"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-slate-300  w-9 h-9"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-slate-300  w-9 h-9"
        />
        <div className=" border border-slate-300 p-0 w-full h-0"></div>
      </div>
      <div className=" flex items-center justify-center bg-white w-48 mx-auto rounded-xl mt-12">
        <img
          src={logo}
          alt=""
          className="w-48 "
        />
      </div>
    </section>
  );
};
export default Footer;
