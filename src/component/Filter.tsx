/** @format */

const Filter = () => {
  return (
    <div className=" flex justify-between space-x-4">
      <div className=" flex space-x-4">
        <div className=" flex flex-col space-y-1">
          <label htmlFor="" className=" text-gray-600 text-sm">
            Địa điểm
          </label>
          <select
            name=""
            className="py-2.5 px-6 border rounded-lg  w-44   border-primary"
            id=""
          ></select>
        </div>
        <div className=" flex flex-col space-y-1">
          <label htmlFor="" className=" text-gray-600 text-sm">
            Thời gian
          </label>
          <input
            type="date"
            name=""
            className="py-2 px-6 border rounded-lg  w-60  border-primary"
            id=""
          ></input>
        </div>
      </div>
      <div className=" flex flex-col space-y-1">
        <label htmlFor="" className=" text-gray-600 text-sm">
          Khoảng giá
        </label>
        <input
          type="date"
          name=""
          className="py-2 px-6 border rounded-lg  w-60  border-primary"
          id=""
        ></input>
      </div>
    </div>
  );
};
export default Filter;
