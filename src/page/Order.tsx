/** @format */
import { OrderDetail } from "../component";
type Order = {
  id: string;
  name: string;
  customer: string;
  benefit: string;
  img: string;
  time: string;
  timeout: string;
  status: string;
  amount: number;
  project: string;
};
const Orders = () => {
  const initalsubscription: Order[] = [
    {
      id: "2",
      name: "Gói cơ bản - Nông sản tươi ngon- 200.000VNĐ",
      customer: "Khách hàng tiêu chuẩn",
      benefit: "5 kg dâu tươi thu hoạch",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
      amount: 200000,
      time: "17:00 Ngày 17 tháng 9 năm 2024",
      timeout: "17:00 Ngày 17 tháng 9 năm 2024",
      status: "Đã thanh toán",
      project: "Dự án gọi vốn đầu tư cây dâu giống Australia",
    },
    {
      id: "3",
      name: "Gói nâng cao - Chia sẻ yêu thương- 1.000.000VNĐ",
      customer: "Khách hàng cao cấp",
      benefit:
        "10 kg dâu tươi thu hoạch-Tour thăm quan nông trại-Một đêm nghỉ tại trang trại",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
      amount: 1000000,
      time: "17:00 Ngày 17 tháng 9 năm 2024",
      timeout: "17:00 Ngày 17 tháng 9 năm 2024",
      status: "Đã thanh toán",
      project: "Dự án gọi vốn đầu tư cây dâu giống Australia",
    },
    {
      id: "4",
      name: "Gói Premium - Trải nghiệm toàn diện- 2.000.000VNĐ",
      customer: "Khách hàng đặc biệt",
      benefit:
        "20 kg dâu tươi thu hoạch-Tour thăm quan nông trại-Hai đêm nghỉ tại trang trại-Suất ăn đặc biệt từ nông sản sạch",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949793/alison-stevens-Fff5ve-rGVA-unsplash_xinysp.jpg",
      amount: 2000000,
      time: "17:00 Ngày 17 tháng 9 năm 2024",
      timeout: "17:00 Ngày 17 tháng 9 năm 2024",
      status: "Đã thanh toán",
      project: "Dự án gọi vốn đầu tư cây dâu giống Australia",
    },
  ];

  return (
    <section className=" font-lexend w-full">
      <h1 className=" text-xl">Danh sách đơn hàng</h1>
      <div className=" flex flex-col space-y-4 py-6">
        {initalsubscription.map((order) => {
          return <OrderDetail order={order}></OrderDetail>;
        })}
      </div>
    </section>
  );
};
export default Orders;
