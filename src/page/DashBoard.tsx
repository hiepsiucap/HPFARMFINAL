/** @format */
import backer from "../assets/img/backer.png";
import Package from "../assets/img/package.png";
import money from "../assets/img/financial-profit.png";
import order from "../assets/img/order.png";
import project from "../assets/img/project.png";
import event from "../assets/img/caledar.png";
import { RecentSubTable, RecentSubEvent } from "../component";

const DashBoard = () => {
  return (
    <section className="  font-lexend">
      <div className=" grid grid-flow-row grid-cols-3 grid-rows-2 gap-x-6 gap-y-4">
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số đơn hàng đã giao:</div>
          <div className=" flex space-x-2 p-2 items-center">
            <img
              src={Package}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">15 Đơn hàng</p>
          </div>
        </div>
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số tiền gọi được:</div>
          <div className=" flex space-x-4 p-2 items-center">
            <img
              src={money}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">1.500.000VNĐ</p>
          </div>
        </div>
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số nhà đầu tư:</div>
          <div className=" flex space-x-4 p-2 items-center">
            <img
              src={backer}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">150 Nhà đầu tư</p>
          </div>
        </div>
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số dự án gọi vốn:</div>
          <div className=" flex space-x-4 p-2 items-center">
            <img
              src={project}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">150 Dự án</p>
          </div>
        </div>
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số sự kiện đã tổ chức:</div>
          <div className=" flex space-x-4 p-2 items-center">
            <img
              src={event}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">128 sự kiện</p>
          </div>
        </div>
        <div className=" bg-background border border-button border-opacity-35 rounded-lg shadow-lg p-5">
          <div className=" text-gray-500 text-sm">Số dự án đã thành công:</div>
          <div className=" flex space-x-4 p-2 items-center">
            <img
              src={order}
              className=" w-14"
              alt=""
            />
            <p className=" font-semibold text-xl ">12 Dự án</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col py-12 space-y-4">
        <p className=" text-lg font-semibold">Các đơn đầu tư gần đây</p>
        <RecentSubTable></RecentSubTable>
      </div>
      <div className=" flex flex-col py-12 space-y-4">
        <p className=" text-lg font-semibold">Các đơn đăng kí event gần đây</p>
        <RecentSubEvent></RecentSubEvent>
      </div>
    </section>
  );
};
export default DashBoard;
