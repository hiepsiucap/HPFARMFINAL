/** @format */
import { useState } from "react";
import Project from "./Project";
type TypeProject = {
  name: string;
  farmer: string;
  dayback: number;
  percent: number;
  description: string;
  type: string;
  img: string;
};
const listproject: TypeProject[] = [
  {
    name: " Dự án gọi vốn đầu tư cây dâu giống Australia",
    farmer: "Vườn minh Trân",
    dayback: 10,
    percent: 50,
    type: "funding",
    description:
      " Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không gian xanh, và cung cấp nguồn nông sản sạch, bền vững.",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
  },
  {
    name: "  Dự án Trồng Bưởi Da Xanh Vĩnh Long",
    farmer: "Vườn minh Trân",
    dayback: 10,
    percent: 50,
    type: "crowd",
    description:
      " Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không gian xanh, và cung cấp nguồn nông sản sạch, bền vững.",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
  },
  {
    name: "Dự án Măng cụt Đà Lạt",
    farmer: "Vườn minh Trân",
    dayback: 10,
    percent: 50,
    type: "funding",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951415/mang-cut-1_e84ws3.jpg",
    description:
      " Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không gian xanh, và cung cấp nguồn nông sản sạch, bền vững.",
  },
  {
    name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
    farmer: "Vườn minh Trân",
    dayback: 10,
    percent: 50,
    type: "funding",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951502/xoai-cat-chu-soc-trang-2_deqtro.jpg",
    description:
      " Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không gian xanh, và cung cấp nguồn nông sản sạch, bền vững.",
  },
  {
    name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
    farmer: "Vườn minh Trân",
    dayback: 10,
    percent: 50,
    type: "crowd",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951443/sau-rieng-4_nusnhb.jpg",
    description:
      " Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không gian xanh, và cung cấp nguồn nông sản sạch, bền vững.",
  },
];
const ListProject = () => {
  const [listprojects] = useState(listproject);
  return (
    <section className=" md:container mx-auto p-10">
      <p className=" text-3xl font-bold text-center p-12 font-lexend text-primary">
        Dự án gọi vốn nổi bật
      </p>
      <div className="flex space-x-4 ">
        <div className=" w-1/2">
          <Project
            project={listprojects[0]}
            isOpen={true}
          ></Project>
        </div>
        <div className=" w-1/2 grid grid-cols-2 gap-4">
          {listproject.map((project, index) => {
            // eslint-disable-next-line eqeqeq
            if (index == 0) return <></>;
            else
              return (
                <Project
                  project={project}
                  isOpen={false}
                ></Project>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListProject;
