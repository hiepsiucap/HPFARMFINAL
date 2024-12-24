/** @format */

import React, { useState } from "react";
import Swal from "sweetalert2";

type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
  img: string;
};

const DetailEventPost: React.FC<{ event: Event }> = ({ event }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    Swal.fire({
      title: "Thông báo",
      text: "Đăng ký sự kiện thành công!",
      icon: "success",
    }).then(() => {
      setIsRegistered(true);
    });
  };

  return (
    <div className="rounded-2xl px-4 py-6 shadow-sm bg-background">
      <img
        src={event.img}
        alt=""
        className=" rounded-md"
      />
      <div className=" py-3 flex flex-col space-y-2">
        <div className=" text-xl font-semibold ">{event.name}</div>
        <div className=" flex items-center space-x-2 ">
          <p className="bg-green-100 text-sm p-1 px-2 rounded-lg">
            {event.location}
          </p>
          <p className="bg-yellow-100 text-sm p-1 px-2 rounded-lg">
            {event.time}
          </p>
        </div>
        <div className=" text-gray-600 text-sm">{event.description}</div>
        <div className=" flex justify-center py-2">
          <button
            onClick={handleRegister}
            className={`bg-primary py-2 px-4 rounded-md text-white ${
              isRegistered ? "bg-gray-400 cursor-default" : ""
            }`}
            disabled={isRegistered}
          >
            {isRegistered ? "Đã đăng kí" : "Đăng kí ngay"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailEventPost;
