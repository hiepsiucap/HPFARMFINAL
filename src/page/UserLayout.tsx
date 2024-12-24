/** @format */

/** @format */
import logo from "../assets/img/logo.png";
import order from "../assets/img/order.png";
import calendar from "../assets/img/caledar.png";
import fruit from "../assets/img/fruit.png";
import project from "../assets/img/project.png";
import info from "../assets/img/info.png";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UserLayOut = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Xác nhận đăng xuất",
      text: "Bạn có chắc chắn muốn đăng xuất?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng xuất",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        // Thực hiện các tác vụ đăng xuất ở đây, ví dụ: xóa localStorage, session, ...

        navigate("/"); // Điều hướng về trang chủ
      }
    });
  };
  return (
    <section className="bg-background  relative bg-opacity-65 font-lexend">
      <div className=" bg-background shadow-md flex justify-between fixed w-full items-center ">
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt=""
            className=" w-32"
          />
        </Link>
        <div className=" flex items-center space-x-2 px-6">
          <p>Hi Hiệp !</p>
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727751526/Joyner-8E2A9181-cmyk_web_t2bsnn.jpg"
            alt=""
            className=" rounded-full w-14 h-14"
          />
        </div>
      </div>
      <div className=" flex space-x-12 pt-32 pb-8 px-6">
        <div className=" w-1/4 overflow-hidden h-screen pr-12 ">
          <p className=" font-semibold text-lg">Danh mục</p>
          <div className=" flex w-full flex-col  py-6">
            <Link
              to="/user/profile"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35 border-t-2 items-end"
            >
              <img
                src={info}
                alt=""
                className="w-8 h-8  rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Thông tin cá nhân
              </div>
            </Link>

            <Link
              to="/user/events"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35 border-t-2 items-end"
            >
              <img
                src={calendar}
                alt=""
                className="w-8 h-8  rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Danh sách sự kiện
              </div>
            </Link>
            <Link
              to="/user/orders"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img
                src={order}
                alt=""
                className="w-8 h-8 rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                đầu tư cộng động
              </div>
            </Link>
            <button className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end">
              <img
                src={fruit}
                alt=""
                className="w-8 h-8 rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Trái cây thu hoạch
              </div>
            </button>
            <Link
              to="/registerfarmer"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img
                src={project}
                alt=""
                className="w-8 h-8 rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">Đăng kí dự án</div>
            </Link>
            <Link
              to="#" // Loại bỏ thuộc tính to="/admin/registerproject"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
              onClick={handleLogout} // Gọi hàm handleLogout khi click vào link
            >
              <img
                src={info}
                alt=""
                className="w-8 h-8 rounded-md"
              />
              <div className="font-semibold text-lg   w-2/3">Đăng xuất</div>
            </Link>
          </div>
        </div>
        <div className=" w-3/4 ">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};
export default UserLayOut;
