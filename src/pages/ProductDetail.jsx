import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import IconsPage from "../components/IconsPage";

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const url = "http://127.0.0.1:8000/api/v2/products/";
  const url2 = "http://127.0.0.1:8000/api/v1/tasks/";

  const getProduct = async () => {
    await fetch(url + productId)
      .then((res) => res.json())
      .then((json) => setProduct(json.data));
  };

  return (
    <div>
      {/* >> Hero icon zone << */}
      <IconsPage iconImg={"http://127.0.0.1:8000/storage/" + product.cover} />

      {/* >> End-Of- Hero icon zone << */}

      <div className="mt-[120px] py-2 px-4 border-b-8 border-gray-400 bg-white ">
        <h1>รายชื่อจังหวัดของประเทศไทยเรียงตามพื้นที่</h1>
      </div>
      <div className="flex-1 my-2 py-2 px-4 text-gray-600 text-xs font-normal leading-5  bg-white ">
        <h1 className="text-6xl px-6 py-2 bg-orange-200 rounded ">
          {product.name}- {productId}
        </h1>
      </div>
    </div>
  );
};

export default ProductDetail;
