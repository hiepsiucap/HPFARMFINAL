/** @format */
import { Basic, BasicBar, BasicLine, BasicPie } from "../component";
import useIntersectionObserver from "../utilz/Observer";
const Chart = () => {
  const isLineChartVisibleLine = useIntersectionObserver({
    threshold: 0,
    id: "line-chart",
  });
  const isLineChartVisiblePie = useIntersectionObserver({
    threshold: 0,
    id: "pie-chart",
  });
  const categories = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  const data = [20, 30, 40, 50, 60];
  const data2 = [30, 40, 50, 40, 30, 40, 80, 85, 100];
  const data3 = [30, 40, 50, 25, 70, 40, 80, 60, 90];
  const cate = [
    "Măng cụt bình dương",
    "Bưởi da xanh",
    "Chè thái nguyên",
    "Sầu riêng Ri6",
    "Đào Huế",
    "Nhãn Hưng Yên",
    "Vãi lồng Nha Trang",
  ];
  const data1 = [60, 50, 30, 20, 10, 10, 5];
  return (
    <section className=" ">
      <div className=" text-2xl pb-12 ">Thống kê chỉ số</div>
      <div className=" flex flex-col items-center space-x-4">
        <div className=" text-xl">Số vốn gọi được theo tháng (triệu đồng)</div>
        <Basic
          categories={categories}
          data={data}
        ></Basic>
      </div>
      <div className=" relative z-1 flex flex-col items-center space-x-4 py-8">
        <div className=" text-xl">
          Top sản phẩm có tỉ lệ gọi vốn cao nhất(triệu động)
        </div>
        <BasicBar
          categories={cate}
          data={data1}
        ></BasicBar>
      </div>
      <div
        id="line-chart"
        className=" relative z-1 flex flex-col items-center space-x-4 py-8"
      >
        <div className=" text-xl">So sánh doanh thu các loại trái cây</div>
        <div className=" flex w-full pr-6 justify-center items-center space-x-2 py-6">
          <select
            name=""
            className=" bg-background shadow-sm py-3 px-6 text-sm border border-primary border-opacity-25 rounded-lg"
            id=""
          >
            <option value="">Dâu Australia</option>
            <option value="">Buởi Hiệp Đức</option>
          </select>
          <div> và</div>
          <select
            name=""
            className=" bg-background shadow-sm py-3 px-6 text-sm border border-primary border-opacity-25 rounded-lg"
            id=""
          >
            <option value="">Buởi Hiệp Đức</option>
            <option value="">Buởi Hiệp Đức</option>
          </select>
        </div>
        {isLineChartVisibleLine && (
          <BasicLine
            categories={categories}
            data={data2}
            data1={data3}
          />
        )}
      </div>
      <div
        id="pie-chart"
        className=" relative z-1 flex flex-col items-center space-x-4 py-8"
      >
        <div className=" text-xl">
          Bảng tổng quan doanh thu các loại trái cây
        </div>
        <div className=" flex w-full pr-6 justify-center ml-12 items-center space-x-4 py-8">
          <select
            name=""
            className=" bg-background shadow-sm py-3 px-6 text-sm border border-primary border-opacity-25 rounded-lg"
            id=""
          >
            <option value="">Tháng 9</option>
            <option value="">Buởi Hiệp Đức</option>
          </select>
          <select
            name=""
            className=" bg-background shadow-sm py-3 px-6 text-sm border border-primary border-opacity-25 rounded-lg"
            id=""
          >
            <option value="">Năm 2024</option>
            <option value="">Buởi Hiệp Đức</option>
          </select>
        </div>
        {isLineChartVisiblePie && (
          <BasicPie
            categories={cate}
            data={data1}
          />
        )}
      </div>
    </section>
  );
};
export default Chart;
