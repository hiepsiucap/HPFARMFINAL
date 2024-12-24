/** @format */

import { LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  dayback: number;
  percent: number;
  description: string;
  img: string;
  type: string;
};
const AnotherProject = ({
  isOpen,
  project,
}: {
  isOpen: boolean;
  project: Project;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={project.type === "funding" ? "/projects/1" : "/crowdproject/1"}
      className={
        isHovered && !isOpen ? "scale-105 relative z-50 bg-white " : "scale-100"
      }
    >
      <img
        src={project.img}
        alt=""
        className=" rounded-t-xl h-64 w-full"
      />
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CustomLinearProgress
          variant="determinate"
          value={50}
        />
      </Box>
      {project.type === "crowd" && (
        <div className="  absolute mt-2 top-1 right-1 text-xs rounded-md px-2 py-1 w-fit font-semibold text-white bg-green-900">
          Gói vốn cộng đồng
        </div>
      )}
      <div className="flex pt-5 space-x-2">
        <div className=" flex flex-col space-y-1 items-start">
          <div className=" min-w-12 ">
            <img
              src={project.img}
              alt=""
              className=" w-12 h-12 rounded-full"
            />
          </div>
        </div>
        <div className=" flex flex-col font-lexend">
          <p className="font-lexend  text-xl">{project.name}</p>
          <p className=" text-gray-700 text-sm">{project.farmer}</p>
          <div className=" flex space-x-2 pb-1">
            <p className="text-gray-700 text-sm">
              {project.dayback} ngày còn lại
            </p>
            <p className="text-gray-700 text-sm">{project.percent}% tổng quỹ</p>
          </div>
          {isOpen && <div>{project.description}</div>}
        </div>
      </div>
      {isHovered && !isOpen && (
        <div className=" absolute top-0 bg-white p-5 border rounded-lg shadow-md ">
          <img
            src={project.img}
            alt=""
            className=" rounded-t-xl"
          />
          {project.type === "crowd" && (
            <div className="  absolute mt-2 top-1 right-1 text-sm rounded-md px-2 py-1 w-fit font-semibold text-white bg-green-900">
              Gói vốn cộng đồng
            </div>
          )}

          <Box sx={{ width: "100%", textAlign: "center" }}>
            <CustomLinearProgress
              variant="determinate"
              value={50}
            />
          </Box>
          <div className="flex pt-5 space-x-2">
            <div className=" flex flex-col space-y-1 items-start">
              <div className=" min-w-12 ">
                <img
                  src={project.img}
                  alt=""
                  className=" w-12 h-12 rounded-full"
                />
              </div>
            </div>
            <div className=" flex flex-col font-lexend">
              <p className="font-lexend  text-xl">{project.name}</p>
              <p className=" text-gray-700 text-sm">{project.farmer}</p>
              <div className=" flex space-x-2 pb-1">
                <p className="text-gray-700 text-sm">
                  {project.dayback} ngày còn lại
                </p>
                <p className="text-gray-700 text-sm">
                  {project.percent}% tổng quỹ
                </p>
              </div>
              <div>{project.description}</div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};
export default AnotherProject;
