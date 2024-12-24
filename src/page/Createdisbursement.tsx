/** @format */

import React from "react";
export default function Createdisbursement() {
  return (
    <section className=" h-screen">
      <p className="text-2xl pb-6">Gửi yêu cầu giải ngân </p>
      <form
        action=""
        className="space-y-3"
      >
        <div className="py-2 flex flex-col space-y-1">
          <label className="text-sm font-bold text-primary">
            Cập nhật ảnh:
          </label>
          <input
            className="w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="file"
            accept="image/*"
          />
        </div>
        <div className="py-2 flex flex-col space-y-1">
          <label className="text-sm font-bold text-primary">Giai đoạn:</label>
          <input
            className="w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="text"
          />
        </div>
        <div className="py-2 flex flex-col space-y-1">
          <label className="text-sm font-bold text-primary">
            Số tiền cần giải ngân:
          </label>
          <input
            className="w-full py-2 bg-slate-50 border rounded-md border-slate-200"
            type="number"
          />
        </div>
        <div className="py-2 flex flex-col space-y-1">
          <label className="text-sm font-bold text-primary">
            Tiến độ hoàn thành có đúng hạn:
          </label>
          <select className="w-full py-2 bg-slate-50 border rounded-md border-slate-200">
            <option value="yes">Có</option>
            <option value="no">Không</option>
          </select>
        </div>
        <div className="py-10">
          <button className="hover:bg-opacity-75 px-6 py-4 rounded-lg w-full bg-primary text-white font-bold text-sm">
            Đăng kí ngay
          </button>
        </div>
      </form>
    </section>
  );
}
