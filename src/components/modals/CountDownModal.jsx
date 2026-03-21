import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CountDownModal() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/game");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div className="bg-gray-800 max-w-87.5 p-8 rounded-lg shadow-xl">
        <div className="flex justify-center items-center flex-col gap-4 px-2">
          <p className="text-white text-3xl font-semibold mt-2">
            Game Starting in:
          </p>
          <div className="mt-2 text-4xl font-bold">
            <p
              className={
                count == 3
                  ? `text-orange-400 `
                  : count == 2
                    ? `text-yellow-500`
                    : `text-red-500`
              }
            >
              {count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDownModal;
