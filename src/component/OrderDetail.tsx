/** @format */
import { Link } from "react-router-dom";
type Order = {
  id: string;
  name: string;
  customer: string;
  benefit: string;
  img: string;
  time: string;
  project: string;
  timeout: string;
  status: string;
  amount: number;
};

const OrderDetail = ({ order }: { order: Order }) => {
  return (
    <div className="flex items-center justify-between bg-background  ">
      <div className=" flex flex-col space-y-4 py-4  ">
        <div className="p-5 rounded-xl flex flex-col shadow-sm ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên dự án:</div>
            <div className=" font-semibold text-primary">{order.project}</div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Gói đăng kí:</div>
            <div className=" text-sm font-semibold text-primary">
              {order.name}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              {order.time}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">
              Thời gian dư kiến nhận :
            </div>
            <div className=" text-sm font-semibold text-primary">
              {order.timeout}
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className=" text-gray-600 text-sm">Quyền lợi :</div>
            <ul className=" list-disc px-5 text-sm">
              {order.benefit.split("-").map((be) => {
                return <li>{be}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <img src={order.img} alt="" className=" rounded-lg" />
      </div>
      <div className="border-l-2 h-full px-10 flex flex-col items-center">
        <p className="font-semibold text-lg pt-6 ">700.000VNĐ</p>
        <p className="font-semibold text-lg  text-green-500 pb-2">
          Đã thanh toán
        </p>
        <Link
          to="/project"
          className="px-4 py-3 text-white rounded-lg bg-primary "
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
export default OrderDetail;
