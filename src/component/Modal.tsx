/** @format */

import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
// Đặt root element để modal gắn vào
Modal.setAppElement("#root");

const ModalCompo: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-primary py-2 px-4 rounded-md text-white"
      >
        Đăng kí ngay
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Đặt màu đen nhạt cho nền overlay
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className=" font-lexend flex flex-col space-y-8 p-10 rounded-lg">
          <Link
            to="/login"
            className=" py-4 px-4 font-bold text-center bg-button text-white rounded-lg"
          >
            Bạn là thành viên của Vườn minh trân
          </Link>
          <Link
            to="register"
            className=" py-4 px-4 text-center font-bold bg-button text-white rounded-lg"
          >
            Bạn là khách hàng mới
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCompo;
