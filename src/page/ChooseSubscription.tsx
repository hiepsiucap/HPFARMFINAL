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
const ChooseSubscription = () => {
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
      name: "Gói đầu tư cơ bản - 10.000.000VNĐ",
      customer: "Khách hàng tiêu chuẩn",
      benefit: "Nhà đầu tư nhận về tiền đầu tư và lợi nhuận 5.2%  ",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
      amount: 10000000,
      description:
        "Gói Tiêu chuẩn dành cho những ai muốn đầu tư nhiều hơn vào dự án nông trại dâu, với nhiều quyền lợi hơn từ việc thu hoạch và thăm quan mô hình nông nghiệp hiện đại. Khách hàng sẽ được trải nghiệm trực tiếp quy trình canh tác và thu hoạch dâu với công nghệ tiên tiến.",
    },
    {
      id: "3",
      name: "Gói đầu tư cơ bản - 30.000.000VNĐ",
      customer: "Khách hàng cao cấp",
      benefit: "Nhà đầu tư nhận về tiền đầu tư và lợi nhuận 7%  ",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949793/alison-stevens-Fff5ve-rGVA-unsplash_xinysp.jpg",
      amount: 300000000,
      description:
        "Gói Cao cấp dành cho những ai muốn tận hưởng trải nghiệm nông trại toàn diện với nhiều đặc quyền. Ngoài việc thu hoạch 10 kg dâu tươi, khách hàng còn được thăm quan nông trại và nghỉ lại một đêm để trải nghiệm cuộc sống nông thôn.",
    },
    {
      id: "4",
      name: "Gói Premium - Trải nghiệm toàn diện- 50.000.000VNĐ",
      customer: "Khách hàng đặc biệt",
      benefit: "Nhà đầu tư nhận về tiền đầu tư và lợi nhuận 12%  ",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
      amount: 50000000,
      description:
        "Gói Đặc biệt dành cho những khách hàng có mong muốn đầu tư lớn và tận hưởng nhiều quyền lợi độc đáo. Với gói này, khách hàng sẽ nhận 20 kg dâu tươi, trải nghiệm 2 đêm nghỉ tại nông trại và thưởng thức suất ăn từ nông sản sạch, tự nhiên.",
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
export default ChooseSubscription;
