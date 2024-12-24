/** @format */
import { useState } from "react";
import { CurrentAdminProject } from "../component";
type Project = {
  name: string;
  farmer: string;
  time: string;
  timeout: string;
  amount: number;
  status: string;
  total: number;
  current: number;
  img: string;
};

const inilistproject: Project[] = [
  {
    name: " Dự án gọi vốn đầu tư cây dâu giống Australia",
    farmer: "Vườn minh Trân",
    time: "17:00 Ngày 17 tháng 9 năm 2024",
    timeout: "17:00 Ngày 17 tháng 9 năm 2024",
    status: "Đang gieo mầm",
    amount: 3,
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    total: 500000,
    current: 1000000,
  },
  {
    name: "Dự án Trồng Bưởi Da Xanh Vĩnh Long",
    farmer: "Vườn minh Trân",
    time: "17:00 Ngày 17 tháng 9 năm 2024",
    timeout: "17:00 Ngày 17 tháng 9 năm 2024",
    status: "Đang bón phân",
    amount: 3,
    total: 500000,
    current: 1000000,
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
  },
  {
    name: "Dự án Măng cụt Đà Lạt",
    farmer: "Vườn minh Trân",
    time: "17:00 Ngày 17 tháng 9 năm 2024",
    timeout: "17:00 Ngày 17 tháng 9 năm 2024",
    status: "Đang thu hoạch",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951415/mang-cut-1_e84ws3.jpg",
    amount: 3,
    total: 500000,
    current: 1000000,
  },
  {
    name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
    farmer: "Vườn minh Trân",
    time: "17:00 Ngày 17 tháng 9 năm 2024",
    timeout: "17:00 Ngày 17 tháng 9 năm 2024",
    status: "Đang tất toán",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951502/xoai-cat-chu-soc-trang-2_deqtro.jpg",
    amount: 3,
    total: 500000,
    current: 1000000,
  },
  {
    name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
    farmer: "Vườn minh Trân",
    time: "17:00 Ngày 17 tháng 9 năm 2024",
    timeout: "17:00 Ngày 17 tháng 9 năm 2024",
    status: "Đang tất toán",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951443/sau-rieng-4_nusnhb.jpg",
    amount: 3,
    total: 500000,
    current: 1000000,
  },
];
const AdminListProject = () => {
  const [listproject] = useState(inilistproject);
  return (
    <section className=" font-lexend">
      <div className=" flex justify-between items-center">
        <p className=" text-2xl font-semibold">Danh sách các dự án</p>
        <button className=" py-3 px-6 rounded-md bg-button text-white">
          Đăng kí sự kiện mới{" "}
        </button>
      </div>
      <div className=" flex flex-col py-8 space-y-4">
        {listproject.map((project) => {
          return <CurrentAdminProject project={project}></CurrentAdminProject>;
        })}
      </div>
    </section>
  );
};
export default AdminListProject;
