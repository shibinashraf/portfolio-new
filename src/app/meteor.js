import clsx from "clsx";
import React from "react";

export const Meteors = ({ number }) => {
  const meteorsCount = Math.min(number || 20, 10); // Limit the number of meteors on mobile screens

  return (
    <div className="">
      {Array.from({ length: meteorsCount }).map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: `${Math.floor(Math.random() * 90)}%`, // Adjust the top position as a percentage
            left: `${Math.floor(Math.random() * 90)}%`, // Adjust the left position as a percentage
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
