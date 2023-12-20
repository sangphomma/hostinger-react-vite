import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconsPage from "../components/IconsPage";

const ProductDetail = () => {
  const BASE_URL = "https://info-of.com";
  const { productId } = useParams();
  const { state } = useLocation();
  const { name, images, id, tags } = state;
  //console.log(state);
  const [cover, setCover] = useState(
    "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png"
  );

  return (
    <div>
      {/* >> Hero icon zone << */}

      <IconsPage
        iconImg={
          images?.length > 0 ? `${BASE_URL}/storage/${images[0]}` : cover
        }
      />

      {/* >> End-Of- Hero icon zone << */}

      <div className="mt-[120px] py-2 px-4 border-b-8 border-gray-400 bg-white ">
        <h1>{name}</h1>
      </div>
      <div className="flex-1 my-2 py-2 px-4 text-gray-600 text-xs font-normal leading-5  bg-white ">
        <h1 className="text-6xl px-6 py-2 bg-orange-200 rounded "></h1>
      </div>

      {images?.length > 0 ? (
        <div className="w-[80%] flex flex-col gap-2 m-auto ">
          {images.map((img, index) => (
            <div key={index} className=" bg-slate-300 p-1 mr-2">
              <img
                src={`${BASE_URL}/storage/${img}`}
                className="object-cover h-full w-full rounded mr-2"
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDetail;
