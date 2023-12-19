import React, { useState } from "react";

const IconsPage = ({ iconImg }) => {
  const [iconPage, setIconPage] = useState(
    "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png"
  );

  return (
    <div>
      <div className="w-[180px] h-[180px] p-2 rounded-md bg-slate-100 absolute top-[-100px] md:top-[-80px] left-[50px]">
        <img
          src={iconImg ? iconImg : iconPage}
          className="w-full object-cover rounded"
        />
      </div>
      <div
        className="hidden sm:block sm:w-[300px] md:w-[400px] lg:w-[600px]  h-[120px] 
          rounded-md bg-slate-300 absolute top-[-100px] md:top-[-80px] right-[50px]"
      ></div>
    </div>
  );
};

export default IconsPage;
