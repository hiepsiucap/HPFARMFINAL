/** @format */

import { Warning } from "../assets/icon";
import { useEffect, useState } from "react";
import { Subscription } from "../component";
import { formatPrice } from "../utilize/Price";
type subscription = {
  id: string;
  name: string;
  benefit: string;
  customer: string;
  img: string;
  amount: number;
  description: string;
};
const ChooseSub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  interface ChooseType {
    id: string;
    name: string;
    benefit: string;
    img: string;
    amount: number;
  }
  const initalsubscription: subscription[] = [
    {
      id: "2",
      name: "Gói cơ bản - Nông sản tươi ngon - 200.000VNĐ",
      customer: "Khách hàng tiêu chuẩn",
      benefit: "5 kg bưởi tươi thu hoạch",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734957187/273950519_1608976776130361_6791349665700536944_n_cglif7.jpg",
      amount: 200000,
      description:
        "Gói Tiêu chuẩn dành cho những ai muốn đầu tư nhiều hơn vào dự án nông trại bưởi, với nhiều quyền lợi hơn từ việc thu hoạch và thăm quan mô hình nông nghiệp hiện đại. Khách hàng sẽ được trải nghiệm trực tiếp quy trình canh tác và thu hoạch bưởi với công nghệ tiên tiến.",
    },
    {
      id: "3",
      name: "Gói nâng cao - Chia sẻ yêu thương - 1.000.000VNĐ",
      customer: "Khách hàng cao cấp",
      benefit:
        "10 kg bưởi tươi thu hoạch - Tour thăm quan nông trại - Một đêm nghỉ tại trang trại",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734957176/buoi2-17015063444541705915615_kepwy2.webp",
      amount: 1000000,
      description:
        "Gói Cao cấp dành cho những ai muốn tận hưởng trải nghiệm nông trại toàn diện với nhiều đặc quyền. Ngoài việc thu hoạch 10 kg bưởi tươi, khách hàng còn được thăm quan nông trại và nghỉ lại một đêm để trải nghiệm cuộc sống nông thôn.",
    },
    {
      id: "4",
      name: "Gói Premium - Trải nghiệm toàn diện - 2.000.000VNĐ",
      customer: "Khách hàng đặc biệt",
      benefit:
        "20 kg bưởi tươi thu hoạch - Tour thăm quan nông trại - Hai đêm nghỉ tại trang trại - Suất ăn đặc biệt từ nông sản sạch",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734957167/buoi-da-xanh-giuptang-cuong-suc-de-khang_ji0zwn.jpg",
      amount: 2000000,
      description:
        "Gói Đặc biệt dành cho những khách hàng có mong muốn đầu tư lớn và tận hưởng nhiều quyền lợi độc đáo. Với gói này, khách hàng sẽ nhận 20 kg bưởi tươi, trải nghiệm 2 đêm nghỉ tại nông trại và thưởng thức suất ăn từ nông sản sạch, tự nhiên.",
    },
  ];

  const [choose, changechoose] = useState<ChooseType | null>(null);
  const [subscription] = useState(initalsubscription);
  return (
    <section className="font-lexend md:container mx-auto py-6">
      <div className=" font-lexend py-6">
        <h1 className=" text-2xl  ">Lựa chọn gói đăng kí của bạn</h1>
      </div>
      <div className=" flex items-center space-x-8">
        <div className=" flex flex-col space-y-5 w-3/4 ">
          {subscription.map((subscription) => {
            return (
              <Subscription
                onChangeChoose={changechoose}
                choose={choose}
                subscription={subscription}
                id={subscription.id}
              ></Subscription>
            );
          })}
        </div>
        <div className="text-gray-500 text-sm w-1/4 flex flex-col items-center space-y-2 ">
          {choose && (
            <section className=" flex flex-col space-y-2">
              <div className=" text-xl font-bold ">Gói đã chọn</div>
              <img
                src={choose.img}
                alt=""
              />
              <h5 className=" py-2 font-bold text-gray-900">{choose?.name}</h5>
              <p className=" text-gray-600">{choose?.benefit}</p>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Giá tiền:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount)}
                </p>
              </div>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Thuế, phí:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount * 0.1)}
                </p>
              </div>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Thành tiền:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount * 1.1)}
                </p>
              </div>
              <div className=" flex justify-end">
                <button
                  className=" py-2 px-4 bg-primary rounded-md my-2 text-white
                "
                >
                  Thanh toán ngay
                </button>
              </div>
            </section>
          )}
          <Warning size={6}></Warning>
          <div>
            Khi đầu tư vào dự án trồng cây dâu giống Australia, các nhà đầu tư
            cần nhận thức rõ về những rủi ro có thể xảy ra. Một trong những rủi
            ro lớn nhất là ảnh hưởng của thời tiết và thiên tai, như hạn hán,
            bão lũ hoặc biến đổi khí hậu, có thể làm giảm năng suất cây trồng.
            Thêm vào đó, rủi ro về thị trường cũng cần được xem xét, vì giá cả
            trái cây có thể biến động do cung cầu không ổn định.
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseSub;
