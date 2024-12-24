/** @format */
import { LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilize/Price";
const CustomLinearProgress = styled(LinearProgress)({
  height: 10, // Tăng độ cao của thanh
  borderRadius: 0, // Bo góc của thanh
  "&.MuiLinearProgress-root": {
    borderBottomLeftRadius: 10, // Bo góc bên trái dưới
    borderBottomRightRadius: 10, // Bo góc bên phải dưới
  },
  backgroundColor: "#e0e0e0", // Màu nền của thanh khi chưa đạt tiến độ
  "& .MuiLinearProgress-bar": {
    borderRadius: 10, // Bo góc của thanh tiến độ
    backgroundColor: "#1a90ff", // Màu của thanh tiến độ
  },
});
type Project = {
  name: string;
  farmer: string;
  time: string;
  timeout: string;
  amount: number;
  percent: number;
  total: number;
  current: number;
  img: string;
};
const AdminProject = ({ project }: { project: Project }) => {
  return (
    <div className=" rounded-lg items-center bg-background justify-between  flex space-x-6 overflow-hidden">
      <div className=" flex space-x-6 py-4">
        <div className="w-64">
          <img src={project.img} alt="" className=" rounded-t-xl h-48 w-64" />
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <CustomLinearProgress variant="determinate" value={50} />
          </Box>
        </div>
        <div className=" rounded-xl flex flex-col space-y-2 ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên Event:</div>
            <div className=" font-semibold text-primary"> {project.name}</div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Nhà vườn:</div>
            <div className=" text-sm font-semibold text-primary">
              {project.farmer}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              {project.time}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Ngày kết thúc đơn:</div>
            <div className=" text-sm font-semibold text-primary">
              {project.timeout}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người tham gia:</div>
            <div className=" text-sm font-semibold text-primary">
              {project.amount} người
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center pr-4 space-y-2">
        <h5 className=" font-semibold text-2xl text-green-500">
          {project.percent}%{" "}
        </h5>
        <span className=" text-sm font-lexend text-gray-500">
          {formatPrice(project.total)}/{formatPrice(project.current)}
        </span>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button "
        >
          Cập nhật thông tin
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button "
        >
          Đóng đăng kí
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button"
        >
          Xác nhận huỷ
        </Link>
      </div>
    </div>
  );
};
export default AdminProject;
