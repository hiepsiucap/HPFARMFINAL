/** @format */
import check from "../assets/img/checkgreen.png";
const PriceTable = () => {
  return (
    <section className=" md:container flex flex-col py-12 items-center mx-auto font-lexend">
      <h2 className=" text-3xl text-center pb-12">
        Các gói dịch vụ cho các nông trại
      </h2>
      <div className=" mx-auto flex space-x-12 w-full items-center">
        <div className=" flex w-1/3 shadow-md bg-white hover:shadow-2xl hover:scale-105  flex-col space-y-4  border-2 border-green-500 p-5 rounded-lg">
          <h1 className=" text-2xl font-semibold text-center">Gói Cơ bản</h1>
          <div>
            <h2 className="text-4xl text-green-500 font-bold text-center">
              499.000VNĐ
            </h2>
            <p className=" text-center">1 tháng</p>
          </div>
          <h3 className="text-gray-600 text-center">
            Các doanh nghiệp nhỏ mới bắt đầu mô hình OCOP,chưa quen thuộc với
            thương mại điện tử và muốn nâng cao hơn nữa khả năng cạnh tranh
          </h3>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Tính năng</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Quản lý bán hàng</p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Quản lý vận chuyển</p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Tính năng thanh toán.</p>
            </div>
          </div>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Quyền lợi</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">hỗ trợ kỹ thuật 24/7</p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">hỗ trợ import sản phẩm </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">TMĐT Kêu gọi đầu tư dự án</p>
            </div>
          </div>
          <div className=" w-full py-6">
            <button className="bg-button text-white w-full py-3 rounded-lg ">
              Đăng kí ngay giảm 30%
            </button>
          </div>
        </div>
        <div className=" flex w-1/3  py-12 shadow-2xl scale-105 hover:shadow-2xl hover:scale-110 flex-col space-y-4  border-2 border-green-500 p-5 rounded-lg">
          <h1 className=" text-2xl font-semibold text-center">
            Gói Tiêu chuẩn
          </h1>
          <div>
            <h2 className="text-4xl text-green-500 font-bold text-center">
              999.000VNĐ
            </h2>
            <p className=" text-center">1 tháng</p>
          </div>
          <h3 className="text-gray-600 text-center">
            Dành cho doanh nghiệp địa phương có nhu cầu mở rộng quy mô và phát
            triển thương hiệu mạnh hơn:
          </h3>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Tính năng</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Tất cả tính năng gói cơ bản</p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Hỗ trợ tổ chức các sự kiện Thương mại
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Tích hợp phương thức thanh toán đa dạng
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Quyền lợi</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Tất cả các tính năng của gói cơ bản</p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Hỗ trợ xây dựng bộ nhận diện thương hiệu{" "}
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">Xây dựng,tối ưu cơ bản các sàn TMĐT</p>
            </div>
          </div>
          <div className=" w-full py-6">
            <button className="bg-button text-white w-full py-3 rounded-lg ">
              Đăng kí ngay giảm 30%
            </button>
          </div>
        </div>
        <div className=" flex w-1/3 shadow-md flex-col space-y-4 hover:shadow-2xl hover:scale-105  border-2 border-green-500 p-5 rounded-lg">
          <h1 className=" text-2xl font-semibold text-center">Gói Nâng cao</h1>
          <div>
            <h2 className="text-4xl text-green-500 font-bold text-center">
              1.499.000VNĐ
            </h2>
            <p className=" text-center">1 tháng</p>
          </div>
          <h3 className="text-gray-600 text-center">
            Dành cho những đơn vị có quy mô lớn hơn, đã quen thuộc với thương
            mại điện tử và muốn nâng cao hơn nữa khả năng cạnh tranh
          </h3>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Tính năng</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Bao gồm tất cả tính năng của gói tiêu chuẩn
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Tùy chỉnh giao diện website theo yêu cầu
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Tự động hóa các chiến dịch email marketing
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start space-y-3">
            <p className=" font-semibold text-center">Quyền lợi</p>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Hỗ trợ tối ưu các gian hàng trên sàn TMĐT
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Phối hợp tổ chức các Buổi triển lãm NN{" "}
              </p>
            </div>
            <div className=" flex space-x-1 items-end text-sm">
              <img src={check} alt="" className=" w-6 h-6" />
              <p className=" font-bold">
                Hạn mức đầu tư dự án đối với các KH lẻ cao
              </p>
            </div>
          </div>
          <div className=" w-full py-6">
            <button className="bg-button text-white w-full py-3 rounded-lg ">
              Đăng kí ngay giảm 30%
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PriceTable;
