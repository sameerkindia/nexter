import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-primary col-span-full 2md:col-span-1 row-[1_/2] 2md:row-span-full flex justify-center max-2md:col-span-full max-2md:row-span-1 max-2md:items-center max-2md:justify-end">
      <button className="nav-btn border-none rounded-none bg-white h-0.5 w-[36px] 2lg:w-[45px] 2md:!mt-8 2lg:!mt-10 max-2md:mt-0 max-2md:!mr-[30px]"></button>
    </div>
  );
};

export default Sidebar;
