/** @format */

import { useEffect, useState } from "react";

const useIntersectionObserver = ({
  threshold = 0,
  id,
}: {
  threshold: number;
  id: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ngừng quan sát khi đã hiển thị
        }
      },
      {
        threshold,
      }
    );

    const element = document.querySelector(`#${id}`); // Phần tử cần quan sát
    if (element) {
      observer.observe(element); // Bắt đầu quan sát
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Ngừng quan sát khi component bị hủy
      }
    };
  }, [id, threshold]);

  return isVisible; // Trả về trạng thái hiển thị
};

export default useIntersectionObserver;
