/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
  img: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Event: React.FC<{ event: Event }> = ({ event }) => {
  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancel = () => {
    Swal.fire({
      title: "Xác nhận hủy tham gia",
      text: `Bạn có chắc chắn muốn hủy tham gia sự kiện ${event.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Hủy tham gia",
      cancelButtonText: "Quay lại",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thông báo",
          text: "Hủy tham gia sự kiện thành công!",
          icon: "success",
        }).then(() => {
          setIsCancelled(true);
        });
      }
    });
  };

  return (
    <div
      className={`flex items-center justify-between shadow-lg  rounded-lg overflow-hidden bg-background ${
        isCancelled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="w-1/4 p-2">
        <img
          src={event.img}
          alt=""
          className=" rounded-l-md"
        />
      </div>
      <div className=" flex flex-col space-y-4 py-4  ">
        <div className="p-5 rounded-xl flex flex-col space-y-2 ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên Event:</div>
            <div className=" font-semibold text-primary"> {event.name}</div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Địa điểm:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.location}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.time}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người tham gia :</div>
            <div className=" text-sm font-semibold text-primary">
              {event.amount} người
            </div>
          </div>
        </div>
      </div>
      <div className="border-l-2 h-full px-10 flex flex-col space-y-2 items-center">
        <Link
          to="/project"
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button "
        >
          Đăng kí thêm
        </Link>
        <button
          onClick={handleCancel}
          disabled={isCancelled}
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button "
        >
          Huỷ tham gia
        </button>
        <Link
          to="/project"
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default Event;
