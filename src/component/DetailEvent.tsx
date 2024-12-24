/** @format */
import { Link } from "react-router-dom";
import ModalCompo from "./Modal";
import { formatPrice } from "../utilize/Price";
type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
  img: string;
};
const DetailEvent = ({ event }: { event: Event }) => {
  return (
    <div className="rounded-2xl">
      <img src={event.img} alt="" className=" rounded-md" />
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
        <div className=" flex justify-between py-2">
          <div className=" text-sm font-bold flex flex-col space-y-1">
            <div>Chi phí {formatPrice(event.amount)} đồng/ 1 người</div>
            <Link
              to="/project "
              className=" hover:scale-105 hover:underline hover:text-green-500"
            >
              Miễn phí cho thành viên
            </Link>
          </div>
          <ModalCompo></ModalCompo>
        </div>
      </div>
    </div>
  );
};
export default DetailEvent;
