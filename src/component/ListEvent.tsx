/** @format */
import DetailEvent from "./DetailEvent";
import { useState } from "react";
type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
};
const ListEvent = () => {
  const initalListEvent = [
    {
      name: "Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg",
    },
    {
      name: "Tour Thăm quan và Trải nghiệm Nông trại Dâu",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
    },
    {
      name: "Ngày hội Dâu tươi - Lễ hội ẩm thực",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
    },
    {
      name: "Sự kiện Cắm trại Tại Nông Trại Dâu",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955341/chris-holder-uY2UIyO5o5c-unsplash_aov73y.jpg",
    },
  ];
  const [listevent, changelistevent] = useState(initalListEvent);
  return (
    <section className=" md:container mx-auto font-lexend">
      <h1 className=" font-bold text-2xl font-lexend py-16 pt-24 ">
        Các sự kiện gần đây
      </h1>
      <div className=" grid grid-cols-3 gap-10">
        {listevent.map((event) => {
          return <DetailEvent event={event}></DetailEvent>;
        })}
      </div>
    </section>
  );
};
export default ListEvent;
