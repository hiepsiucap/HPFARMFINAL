/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useEffect, useState } from "react";
import { Post, DetailEventPost } from "../component";

const IntialPostType = [
  {
    page: "Vườn minh trân",
    time: "2 tháng trước",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã tiến hành gieo giống",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727960166/riccardo-atrot-CDCPeN26MdE-unsplash-min_m6zknc.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "1 tháng trước",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã vào phân. Phân được nhập khẩu từ Đức",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955327/equalstock-xXDHzBW317Q-unsplash_cwv4on.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "2 tuần",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã thấy những quả dâu đầu tiên",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "1 tuần",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn tiến hành thu hoạch dâu",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
];
const Community = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const initallistproject = [
    {
      id: "1",
      name: " Dự án gọi vốn đầu tư cây dâu giống Australia",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    },
    {
      id: "2",
      name: "  Dự án Trồng Bưởi Da Xanh Vĩnh Long",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
    },
    {
      id: "3",
      name: "Dự án  Măng cụt Tươi Đà Lạt",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951415/mang-cut-1_e84ws3.jpg",
    },
    {
      id: "4",
      name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",

      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951502/xoai-cat-chu-soc-trang-2_deqtro.jpg",
    },
    {
      id: "5",
      name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951443/sau-rieng-4_nusnhb.jpg",
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const IntialPostType2 = [
    {
      page: "Vườn Bưởi Vĩnh Long",
      time: "2 tháng trước",
      project: "Trồng Bưởi Da Xanh Vĩnh Long",
      content:
        "Hôm nay nhà vườn đã tiến hành gieo giống bưởi Da Xanh Vĩnh Long. Chúng tôi kỳ vọng những cây bưởi đầu tiên sẽ phát triển thật tốt để chuẩn bị cho vụ mùa sắp tới.",
      ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734878540/IMG_2314_xefhin.jpg",
      comment: 20,
      share: 18,
      like: 25,
    },
    {
      page: "Vườn Bưởi Vĩnh Long",
      time: "1 tháng trước",
      project: "Trồng Bưởi Da Xanh Vĩnh Long",
      content:
        "Hôm nay nhà vườn đã bón phân đợt đầu cho cây bưởi. Loại phân được nhập khẩu từ Đức giúp cây hấp thụ chất dinh dưỡng tối đa.",
      ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734878534/cay-buoi-dien_p0uxwm.jpg",
      comment: 22,
      share: 16,
      like: 30,
    },
    {
      page: "Vườn Bưởi Vĩnh Long",
      time: "2 tuần",
      project: "Trồng Bưởi Da Xanh Vĩnh Long",
      content:
        "Những trái bưởi Da Xanh đầu tiên đã bắt đầu hình thành. Đây là niềm tự hào lớn của nhà vườn sau bao ngày chăm sóc.",
      ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734878536/FLY_3311_ga5bqy.jpg",
      comment: 25,
      share: 20,
      like: 35,
    },
    {
      page: "Vườn Bưởi Vĩnh Long",
      time: "1 tuần",
      project: "Trồng Bưởi Da Xanh Vĩnh Long",
      content:
        "Hôm nay nhà vườn đã tiến hành thu hoạch lứa bưởi Da Xanh đầu tiên. Trái bưởi rất đẹp và đạt chuẩn chất lượng!",
      ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734878511/buoi-dien-la-buoi-gi-cach-chon-mua-buoi-dien-ngon-mong-nuoc-202312212351302121_rmc98q.jpg",
      comment: 30,
      share: 25,
      like: 40,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initalListEvent2 = [
    {
      name: "Tuyệt Tác Bánh Từ Bưởi: Workshop Sáng Tạo Món Tráng Miệng",
      location: "Dĩ An, Bình Dương",
      time: "7:00PM 4/10/2024",
      description:
        "Workshop dạy làm bánh với nguyên liệu chính là bưởi tươi. Người tham gia sẽ học cách chế biến các món bánh thơm ngon và bổ dưỡng từ bưởi, từ cách xử lý nguyên liệu đến trình bày thành phẩm đẹp mắt.",
      amount: 120000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876683/goi-buoi-tom-thit-bep-oc-hai-san-day-nghe-rosa-bien-hoa-dong-nai-62749ced-8bca-4e49-933a-d476bd6312f0_gg7dv9.jpg",
    },
    {
      name: "Tour Khám Phá Nông Trại Bưởi: Từ Trái Cây Đến Chai Nước Ép",
      location: "Dĩ An, Bình Dương",
      time: "8:30AM 5/10/2024",
      description:
        "Tham gia tour để khám phá nông trại bưởi tươi mát, nơi bạn sẽ được tìm hiểu cách trồng bưởi, chăm sóc cây, và quy trình sản xuất nước ép bưởi sạch. Đây là trải nghiệm thú vị cho cả gia đình.",
      amount: 150000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876678/sinh-to-buoi_g1bvze.webp",
    },
    {
      name: "Lễ Hội Bưởi Việt Nam: Trải Nghiệm Ẩm Thực & Văn Hóa",
      location: "Dĩ An, Bình Dương",
      time: "6:00PM 6/10/2024",
      description:
        "Lễ hội Bưởi Việt Nam không chỉ là nơi trưng bày các giống bưởi đặc trưng, mà còn mang đến các món ăn độc đáo từ bưởi, từ gỏi bưởi, chè bưởi đến cocktail bưởi. Kèm theo đó là các hoạt động văn hóa như nhạc sống và trò chơi dân gian.",
      amount: 200000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876672/buoi-1-1-19212168_kqvisd.webp",
    },
    {
      name: "Cắm Trại Tại Nông Trại Bưởi: Sống Chậm Giữa Thiên Nhiên",
      location: "Dĩ An, Bình Dương",
      time: "3:00PM 7/10/2024",
      description:
        "Tham gia sự kiện cắm trại tại nông trại bưởi để hòa mình vào thiên nhiên. Người tham gia sẽ được hái bưởi trực tiếp tại vườn, thưởng thức các món ăn từ bưởi, và trải nghiệm không gian yên bình dưới ánh đèn lều lung linh.",
      amount: 250000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876669/chanh-thu-buoi-da-xanh-2_pvdg19.jpg",
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projectInfo1 = {
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg", // Đường dẫn tới ảnh
    amountDisbursed: "48.000.000",
    totalAmount: "50.000.000",
    unit: "VNĐ",
    detailLink: "#", // Link tới trang chi tiết
    name: "Dự án gọi vốn đầu tư cây dâu giống Australia",
    sowingDate: "28/02/2024",
    harvestDate: "24/04/2024",
    currentCost: "38.000.000 VNĐ",
    title: "Dự án gọi vốn đầu tư cây dâu giống Australia",
    revenue: "100.000.000 VNĐ",
    expectedRevenue: "+18.000.000 VNĐ",
    progress: {
      percentage: "90%",
      stages: [
        { label: "Mua hạt giống", completed: true },
        { label: "chăm sóc", completed: true },
        { label: "Thu hoạch", completed: true },
        { label: "thanh toán", completed: false },
      ],
    },
  };

  const [listevent, changelistevent] = useState(initalListEvent);
  const [listproject] = useState(initallistproject);
  const [listpost, changelistpost] = useState(IntialPostType);
  const [projectInfo, setProjectInfo] = useState({
    name: "Dự án Trồng Bưởi Da Xanh Vĩnh Long",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
    amountDisbursed: "35.000.000",
    totalAmount: "40.000.000",
    unit: "VNĐ",
    detailLink: "#", // Thêm link chi tiết nếu có
    title: "Dự án Trồng Bưởi Da Xanh Vĩnh Long",
    sowingDate: "15/03/2024",
    harvestDate: "30/08/2024",
    currentCost: "28.000.000 VNĐ",
    revenue: "70.000.000 VNĐ",
    expectedRevenue: "+10.000.000 VNĐ",
    progress: {
      percentage: "40%",
      stages: [
        { label: "Mua cây giống", completed: true },
        { label: "chăm sóc", completed: true },
        { label: "Thu hoạch", completed: false },
        { label: "thanh toán", completed: false },
      ],
    },
  });
  const [isChoose, changechoose] = useState(initallistproject[0].id);
  useEffect(() => {
    if (isChoose === "1") {
      changelistevent(initalListEvent);
    }
    if (isChoose === "2") changelistevent(initalListEvent2);
    if (isChoose === "1") {
      changelistpost(IntialPostType);
    } else {
      changelistpost(IntialPostType2);
    }
    if (isChoose === "1") {
      setProjectInfo(projectInfo1);
    } else
      setProjectInfo({
        name: "Dự án Trồng Bưởi Da Xanh Vĩnh Long",
        img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
        amountDisbursed: "35.000.000",
        totalAmount: "40.000.000",
        unit: "VNĐ",
        detailLink: "#", // Thêm link chi tiết nếu có
        title: "Dự án Trồng Bưởi Da Xanh Vĩnh Long",
        sowingDate: "15/03/2024",
        harvestDate: "30/08/2024",
        currentCost: "28.000.000 VNĐ",
        revenue: "70.000.000 VNĐ",
        expectedRevenue: "+10.000.000 VNĐ",
        progress: {
          percentage: "40%",
          stages: [
            { label: "Mua cây giống", completed: true },
            { label: "chăm sóc", completed: true },
            { label: "Thu hoạch", completed: false },
            { label: "thanh toán", completed: false },
          ],
        },
      });
  }, [
    IntialPostType2,
    initalListEvent,
    initalListEvent2,
    isChoose,
    projectInfo1,
  ]);
  return (
    <section className="bg-background  relative bg-opacity-65 font-lexend">
      <div className=" bg-background shadow-md flex justify-between fixed w-full items-center ">
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt=""
            className=" w-32"
          />
        </Link>
        <div className=" flex items-center space-x-2 px-6">
          <p>Hi Hiệp !</p>
          <Link to="/user/orders">
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727751526/Joyner-8E2A9181-cmyk_web_t2bsnn.jpg"
              alt=""
              className=" rounded-full w-14 h-14"
            />
          </Link>
        </div>
      </div>

      <div className=" flex space-x-12 pt-32 pb-8 px-6">
        <div className=" w-1/4 overflow-hidden h-screen pr-12 ">
          <p className=" font-semibold">Các dự án đăng kí</p>
          <div className=" flex w-full flex-col space-y-4 py-6">
            {listproject?.map((project) => {
              return (
                <button
                  id={project.id}
                  onClick={(e) => {
                    changechoose(e.currentTarget?.id);
                  }}
                  className={
                    isChoose === project.id
                      ? " flex justify-between items-center bg-background scale-105 p-2 rounded-lg shadow-md"
                      : " flex justify-between items-center"
                  }
                >
                  <div className="flex w-full space-x-2 items-end">
                    <img
                      src={project.img}
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                    <div className=" text-sm font-bold break-words w-2/3">
                      {" "}
                      {project.name}
                    </div>
                  </div>
                  <div
                    className={
                      isChoose === project.id
                        ? "p-1.5 rounded-full bg-background"
                        : "p-1.5 rounded-full bg-green-500"
                    }
                  ></div>
                </button>
              );
            })}
          </div>
        </div>
        <section className="  w-1/2 overflow-y-scroll h-screen scroll">
          <div className="bg-background p-6 flex flex-col space-y-4 my-6">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center space-y-1">
                <img
                  src={projectInfo.img}
                  alt={projectInfo.name}
                  className="w-44 h-44 rounded-xl"
                />
                <p className="pt-2">Số tiền giải ngân:</p>
                <p className="font-bold">
                  {projectInfo.amountDisbursed}/{projectInfo.totalAmount}
                  {projectInfo.unit}
                </p>
                <button className="py-1 px-3 rounded-lg bg-primary text-white">
                  Xem chi tiết
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-bold">{projectInfo.title}</p>
                <p>
                  Ngày gieo mầm:{" "}
                  <span className="font-bold">{projectInfo.sowingDate}</span>
                </p>
                <p>
                  Ngày thu hoạch:{" "}
                  <span className="font-bold">{projectInfo.harvestDate}</span>
                </p>
                <p>
                  Chi phí hiện tại:{" "}
                  <span className="font-bold">{projectInfo.currentCost}</span>
                </p>
                <p>
                  Doanh thu:{" "}
                  <span className="font-bold">{projectInfo.revenue}</span>
                </p>
                <div className="text-end text-xl pt-6 font-bold text-green-600">
                  <span className="text-sm">Doanh thu dự kiến</span>
                  <br />
                  {projectInfo.expectedRevenue}
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="w-full bg-slate-200 rounded-full h-3 relative">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: projectInfo.progress.percentage }}
                >
                  <span className="absolute -top-6 right-0 text-sm font-medium">
                    {projectInfo.progress.percentage}
                  </span>
                </div>
                <div className="flex justify-between">
                  {projectInfo.progress.stages.map((stage, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center relative"
                    >
                      <div className="text-xs font-bold bg-green-600 text-green-600 py-0.5">
                        |
                      </div>
                      <div
                        className={`absolute top-3.5 rounded-full p-1 ${
                          stage.completed ? "bg-green-600" : "bg-gray-400"
                        }`}
                      ></div>
                      <div>{stage.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="  flex flex-col space-y-4 ">
            {listpost.map((post) => {
              return <Post post={post}></Post>;
            })}
          </div>
        </section>
        <div className=" w-1/4 flex flex-col space-y-4 overflow-y-scroll h-screen">
          <h3 className=" text-2xl">Sự kiện tham gia</h3>
          {listevent.map((event) => {
            return <DetailEventPost event={event}></DetailEventPost>;
          })}
        </div>
      </div>
    </section>
  );
};
export default Community;
