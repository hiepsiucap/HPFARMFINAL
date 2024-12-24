/** @format */
import AnotherProject from "./AnotherProject";
const ListOfProjects = () => {
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
  return (
    <>
      <div className="grid grid-cols-3 py-6 gap-y-16 gap-x-8">
        {listproject.map((project) => {
          return (
            <AnotherProject
              isOpen={false}
              project={project}
            ></AnotherProject>
          );
        })}
      </div>
    </>
  );
};
export default ListOfProjects;
