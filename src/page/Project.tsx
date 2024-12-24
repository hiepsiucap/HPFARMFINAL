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
const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const { id } = useParams();
  return (
    <section className=" bg-white font-lexend">
      <section className=" mx-auto md:container py-12">
        <h2 className="text-2xl font-lexend text-center ">
          Dự án gọi vốn đầu tư cây dâu giống Australia
        </h2>
        <p className=" text-gray-600 text-center mt-2">
          Dự án gọi vốn đầu tư cây dâu giống Australia nhằm phát triển vườn dâu
          chất lượng cao!
        </p>
        <div className=" flex space-x-2 p-6 ">
          <div className=" w-7/12 min-h-96">
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711946/461464880_8334897423259941_3204258978248004038_n_d3ckoy.jpg"
              alt=""
              className=" rounded-xl"
            />
          </div>
          <div className=" w-5/12 p-5">
            <CustomLinearProgress
              variant="determinate"
              value={50}
            />
            <div className=" flex justify-end font-lexend pt-2 ">
              1.000.000.000/2.000.000.000 VNĐ
            </div>
            <div className=" text-3xl font-bold font-lexend">
              1.000.000.000 VNĐ
            </div>
            <div className=" text-gray-500 font-lexend pb-6">
              Tổng số tiền kêu gọi được{" "}
            </div>
            <div className=" text-3xl font-bold font-lexend">303</div>
            <div className=" text-gray-500 font-lexend pb-6">
              người tham gia{" "}
            </div>
            <div className=" text-3xl font-bold font-lexend">10</div>
            <div className=" text-gray-500 font-lexend pb-6">ngày còn lại </div>
            <div className=" flex space-x-4">
              <Link
                to="/crowdproject/subscription/2"
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
                Lý do lựa chọn cây dâu
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
              Chúng tôi hân hạnh giới thiệu Dự án Trồng Cây Dâu Giống Australia
              – một dự án mang tính đột phá trong lĩnh vực nông nghiệp công nghệ
              cao, với mục tiêu cung cấp những sản phẩm dâu chất lượng cao cho
              thị trường nội địa và quốc tế. Cây dâu giống Australia nổi tiếng
              với năng suất vượt trội, khả năng chống chịu sâu bệnh tốt và hương
              vị thơm ngon, phù hợp với nhu cầu tiêu dùng hiện đại về thực phẩm
              sạch, an toàn và giàu dinh dưỡng.
            </div>
            <h5
              id="#ly-do"
              className=" text-2xl p-5 text-center"
            >
              Lý do lựa chọn cây dâu giống Australia
            </h5>
            <div>
              Giống dâu Australia được đánh giá cao nhờ vào phẩm chất ưu việt,
              từ chất lượng trái cho đến sự ổn định trong năng suất. Không chỉ
              cung cấp sản lượng lớn, dâu Australia còn có khả năng phát triển
              trong điều kiện khí hậu đa dạng, đặc biệt phù hợp với vùng đất
              Việt Nam. Điều này hứa hẹn mang lại lợi ích kinh tế lâu dài, góp
              phần vào phát triển bền vững cho ngành nông nghiệp nước nhà.
            </div>
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg"
              alt=""
              className=" p-5"
            />
            <h5
              id="#muc-tieu"
              className=" text-2xl p-5 text-center"
            >
              Mục tiêu dự án
            </h5>
            <div>
              Chúng tôi không chỉ tập trung vào việc sản xuất và phân phối dâu
              giống Australia mà còn chú trọng đến việc xây dựng một hệ sinh
              thái nông nghiệp xanh, an toàn và bền vững. Dự án hướng đến: Phát
              triển mô hình canh tác bền vững, hạn chế tối đa việc sử dụng thuốc
              bảo vệ thực vật hóa học. Đáp ứng nhu cầu ngày càng tăng của người
              tiêu dùng trong nước và quốc tế về các sản phẩm trái cây cao cấp,
              giàu dinh dưỡng và đảm bảo chất lượng. Mở rộng thị trường xuất
              khẩu, với định hướng đưa thương hiệu dâu Việt Nam vươn ra thế
              giới.
            </div>
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711946/461464880_8334897423259941_3204258978248004038_n_d3ckoy.jpg"
              alt=""
              className=" p-5"
            />
            <h5
              id="keu-goi-dau-tu"
              className=" text-2xl p-5 text-center"
            >
              Lời kêu gọi đầu tư
            </h5>
            <div>
              Chúng tôi tin rằng, với tiềm năng phát triển mạnh mẽ và đội ngũ
              chuyên gia am hiểu về cây dâu Australia, dự án này sẽ mang lại lợi
              nhuận hấp dẫn cho các nhà đầu tư. Không chỉ có tiềm năng về lợi
              nhuận, dự án còn đóng góp vào sự phát triển bền vững của nền nông
              nghiệp Việt Nam, cải thiện đời sống cho nông dân và tạo ra nhiều
              cơ hội việc làm. Chúng tôi rất mong nhận được sự quan tâm và hợp
              tác từ các nhà đầu tư để cùng hiện thực hóa tầm nhìn phát triển
              nông nghiệp hiện đại và bền vững.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Project;
