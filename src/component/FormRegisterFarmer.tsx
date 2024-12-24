/** @format */
const FormRegisterFarmer = () => {
  return (
    <section className=" rounded-lg p-4 px-6  font-lexend bg-white w-3/4">
      <form
        action=""
        className=" space-y-3"
      >
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            {" "}
            Địa chỉ Email:
          </label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">Họ và Tên :</label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            {" "}
            Số điện thoại:
          </label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">Email :</label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-2 flex flex-col space-y-1">
          <label className=" text-sm font-bold text-primary">
            Loại nông sản :
          </label>
          <input
            className=" w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className=" py-10">
          <button className=" hover:bg-opacity-75 px-6 py-4 rounded-lg w-full  bg-primary text-white font-bold text-sm">
            Đăng kí ngay
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormRegisterFarmer;
