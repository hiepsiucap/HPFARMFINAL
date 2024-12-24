/** @format */
// import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CustomLinearProgress = styled(LinearProgress)({
  height: 10, // Tăng độ cao của thanh
  borderRadius: 10, // Bo góc của thanh

  backgroundColor: "#e0e0e0", // Màu nền của thanh khi chưa đạt tiến độ
  "& .MuiLinearProgress-bar": {
    borderRadius: 10, // Bo góc của thanh tiến độ
    backgroundColor: "#1a90ff", // Màu của thanh tiến độ
  },
});

const CrowdProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const { id } = useParams();
  return (
    <section className=" bg-white font-lexend">
      <section className=" mx-auto md:container py-12">
        <h2 className="text-2xl font-lexend text-center ">
          Dự án gọi vốn đầu tư vườn bưởi da xanh Vĩnh Long
        </h2>
        <p className=" text-gray-600 text-center mt-2">
          Dự án phát triển vườn bưởi da xanh đạt chuẩn VietGAP, mang đến nguồn
          trái cây sạch, chất lượng cao cho thị trường!
        </p>
        <div className=" flex space-x-2 p-6 ">
          <div className=" w-7/12  ">
            {/* Thay thế bằng hình ảnh vườn bưởi da xanh Vĩnh Long */}
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876672/buoi-1-1-19212168_kqvisd.webp"
              alt="Vườn bưởi da xanh Vĩnh Long"
              className=" rounded-xl w-full"
            />
          </div>
          <div className=" w-5/12 p-5">
            <CustomLinearProgress
              variant="determinate"
              value={50}
            />
            <div className=" flex justify-end font-lexend pt-2 ">
              100.000.000/200.000.000 VNĐ
            </div>
            <div className=" text-3xl font-bold font-lexend">100.000.000</div>
            <div className=" text-gray-500 font-lexend pb-6">
              Tổng số tiền kêu gọi được{" "}
            </div>
            <div className=" text-3xl font-bold font-lexend">100</div>
            <div className=" text-gray-500 font-lexend pb-6">
              người tham gia{" "}
            </div>
            <div className=" text-3xl font-bold font-lexend">12</div>
            <div className=" text-gray-500 font-lexend pb-6">ngày còn lại </div>
            <div className=" flex space-x-4">
              <Link
                to="/projects/:id/subscription"
                className=" bg-primary px-8 py-4 font-lexend  text-white rounded-xl"
              >
                Đầu tư ngay
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex bg-white">
          <ul className="flex flex-col space-y-4  p-4 pt-14 sticky top-0 z-50">
            <h5 className=" text-green-500 font-bold text-xl ">Đề mục</h5>
            <li>
              <a
                href="#gioi-thieu"
                className="text-green-500 hover:underline"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#ly-do"
                className="text-green-500 hover:underline"
              >
                Lý do lựa chọn bưởi da xanh Vĩnh Long
              </a>
            </li>
            <li>
              <a
                href="#muc-tieu"
                className="text-green-500 hover:underline"
              >
                Mục tiêu dự án
              </a>
            </li>
            <li>
              <a
                href="#keu-goi-dau-tu"
                className="text-green-500 hover:underline"
              >
                Lời kêu gọi đầu tư
              </a>
            </li>
          </ul>
          <div className=" w-10/12 mx-auto">
            <h5
              id="gioi-thieu"
              className=" text-2xl p-5 text-center"
            >
              Giới thiệu
            </h5>
            <div>
              Dự án "Vườn Bưởi Da Xanh Vĩnh Long" tự hào giới thiệu mô hình
              trồng bưởi da xanh theo tiêu chuẩn VietGAP, ứng dụng công nghệ
              hiện đại vào quy trình canh tác, chăm sóc và thu hoạch. Chúng tôi
              cam kết mang đến cho thị trường những trái bưởi chất lượng cao,
              đảm bảo an toàn vệ sinh thực phẩm, hương vị thơm ngon đặc trưng.
            </div>
            <h5
              id="ly-do"
              className=" text-2xl p-5 text-center"
            >
              Lý do lựa chọn bưởi da xanh Vĩnh Long
            </h5>
            <div>
              Bưởi da xanh Vĩnh Long nổi tiếng với vị ngọt thanh, tép bưởi mọng
              nước, vỏ mỏng, dễ tách. Thổ nhưỡng và khí hậu Vĩnh Long đặc biệt
              thích hợp cho sự phát triển của giống bưởi này, cho ra những trái
              bưởi chất lượng vượt trội. Bên cạnh đó, việc áp dụng tiêu chuẩn
              VietGAP giúp kiểm soát chặt chẽ quy trình sản xuất, đảm bảo an
              toàn cho người tiêu dùng.
            </div>
            {/* Thay thế bằng hình ảnh bưởi da xanh Vĩnh Long */}
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734876669/chanh-thu-buoi-da-xanh-2_pvdg19.jpg"
              alt="Bưởi da xanh Vĩnh Long"
              className=" p-5"
            />
            <h5
              id="muc-tieu"
              className=" text-2xl p-5 text-center"
            >
              Mục tiêu dự án
            </h5>
            <div>
              Dự án hướng đến mục tiêu:
              <ul className="list-disc ml-6">
                <li>
                  Xây dựng vườn bưởi da xanh VietGAP với quy mô lớn, năng suất
                  cao.
                </li>
                <li>
                  Cung cấp bưởi da xanh chất lượng cao, đáp ứng nhu cầu thị
                  trường trong nước và xuất khẩu.
                </li>
                <li>
                  Ứng dụng công nghệ tiên tiến vào sản xuất, nâng cao hiệu quả
                  kinh tế.
                </li>
                <li>
                  Tạo việc làm và thu nhập ổn định cho người dân địa phương.
                </li>
                <li>
                  Góp phần phát triển kinh tế nông nghiệp bền vững tại Vĩnh
                  Long.
                </li>
              </ul>
            </div>
            {/* Thay thế bằng hình ảnh vườn bưởi da xanh Vĩnh Long */}
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1734878511/buoi-dien-la-buoi-gi-cach-chon-mua-buoi-dien-ngon-mong-nuoc-202312212351302121_rmc98q.jpg"
              alt="Vườn bưởi da xanh Vĩnh Long"
              className=" p-5"
            />
            <h5
              id="keu-goi-dau-tu"
              className=" text-2xl p-5 text-center"
            >
              Lời kêu gọi đầu tư
            </h5>
            <div>
              Với tiềm năng phát triển của thị trường bưởi da xanh và lợi thế về
              thổ nhưỡng, khí hậu của Vĩnh Long, chúng tôi tin rằng dự án sẽ
              mang lại hiệu quả kinh tế cao và bền vững. Chúng tôi kêu gọi các
              nhà đầu tư cùng chung tay góp sức vào dự án, tạo nên những giá trị
              tốt đẹp cho cộng đồng và xã hội.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CrowdProject;
