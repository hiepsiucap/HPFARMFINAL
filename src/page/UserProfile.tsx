/** @format */

import React, { useState } from "react";
import { User } from "lucide-react";

const UserProfileForm: React.FC = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  // Hàm xử lý khi người dùng chọn ảnh đại diện
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" mx-auto rounded-lg  px-16 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Thông tin cá nhân</h2>
      </div>

      <form className="space-y-4">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 mb-4">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar preview"
                className="w-full h-full rounded-full object-cover border-4 border-gray-200"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-100 border-4 border-gray-200 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            )}
          </div>
          <div className="w-full space-y-1">
            <label className="block text-sm font-semibold text-gray-700 text-center mb-2">
              Ảnh đại diện:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange} // Gọi hàm xử lý khi thay đổi ảnh
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">
            Họ và tên:
          </label>
          <input
            type="text"
            placeholder="Nhập họ và tên"
            defaultValue="Nguyễn Văn A"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            placeholder="Nhập email"
            defaultValue="nguyenvana@example.com"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">
            Số điện thoại:
          </label>
          <input
            type="tel"
            placeholder="Nhập số điện thoại"
            defaultValue="0987654321"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">
            Địa chỉ:
          </label>
          <textarea
            placeholder="Nhập địa chỉ"
            rows={3}
            defaultValue="123 Đường ABC, Quận 1, TP. Hồ Chí Minh"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cập nhật thông tin
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
