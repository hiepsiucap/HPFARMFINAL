/** @format */

import { useState } from "react";
import { AdminEvent } from "../component";
import Swal from "sweetalert2";
import UpdateEventModal from "../component/UpdateEventModal";

type Event = {
  name: string;
  location: string;
  time: string;
  timeout: string;
  minimal: number;
  current: number;
  maximum: number;
  status: string;
  img: string;
};

const initialListEvent: Event[] = [
  {
    name: "Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg",
  },
  {
    name: "Tour Thăm quan và Trải nghiệm Nông trại Dâu",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
  },
  {
    name: "Ngày hội Dâu tươi - Lễ hội ẩm thực",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
  },
  {
    name: "Sự kiện Cắm trại Tại Nông Trại Dâu",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955341/chris-holder-uY2UIyO5o5c-unsplash_aov73y.jpg",
  },
];

const AdminListEvent = () => {
  const [listEvent, setListEvent] = useState(initialListEvent);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = (index: number) => {
    Swal.fire({
      title: "Xác nhận tổ chức sự kiện?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        setListEvent((prevList) =>
          prevList.map((event, i) =>
            i === index ? { ...event, status: "Xác nhận tổ chức" } : event
          )
        );
        Swal.fire({
          title: "Thành công!",
          text: "Sự kiện đã được xác nhận tổ chức.",
          icon: "success",
        });
      }
    });
  };

  const handleCancel = (index: number) => {
    setListEvent((prevList) =>
      prevList.map((event, i) =>
        i === index ? { ...event, status: "Đã hủy" } : event
      )
    );
  };

  const handleUpdate = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handleUpdateEvent = (updatedEvent: Event) => {
    setListEvent((prevList) =>
      prevList.map((event) =>
        event.name === updatedEvent.name ? updatedEvent : event
      )
    );
  };

  return (
    <section className="font-lexend">
      <div className=" flex justify-between items-center">
        <p className=" text-2xl font-semibold">Danh sách các sự kiện</p>
        <button className=" py-3 px-6 rounded-md bg-button text-white">
          Đăng kí sự kiện mới{" "}
        </button>
      </div>

      <div className="flex flex-col py-8 space-y-4">
        {listEvent.map((event, index) => (
          <AdminEvent
            key={index}
            event={event}
            onConfirm={() => handleConfirm(index)}
            onCancel={() => handleCancel(index)}
            onUpdate={() => handleUpdate(event)}
          />
        ))}
      </div>

      {/* Modal cập nhật thông tin */}
      <UpdateEventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
        onUpdate={handleUpdateEvent}
      />
    </section>
  );
};

export default AdminListEvent;
