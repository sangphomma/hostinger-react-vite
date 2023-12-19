import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center  py-3 bg-slate-100 px-[10%] md:px-[7%] fixed top-0 left-0 overflow-hidden z-50">
        <div className="">
          <span className="py-2 px-4 bg-slate-200 hover:bg-slate-100 hover:underline  rounded">
            Best-Selected.Shop
          </span>
          <span className="text-teal-800 font-semibold">
            &nbsp; Samsung Galaxy Tab S6 Pro 128G
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to="/products"
            className="py-2 px-4 bg-slate-200 hover:bg-slate-100 hover:underline  rounded"
          >
            Products
          </Link>
          <Link
            to="/products/show"
            className="py-2 px-4 bg-slate-200 hover:bg-slate-100 hover:underline  rounded"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
