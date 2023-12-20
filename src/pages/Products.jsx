import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import IconsPage from "../components/IconsPage";
import axios from "axios";

const Products = () => {
  const BASE_URL = "https://info-of.com";
  const [products, setProducts] = useState([]);
  const itemPerPage = 10;
  const [itemsOffSet, setItemOffSet] = useState(0);
  const endOffSet = itemsOffSet + itemPerPage;
  const currentItems = products.slice(itemsOffSet, endOffSet);
  //console.log(currentItems);
  const pageCount = Math.ceil(products.length / itemPerPage);
  // //console.log(pageCount);
  const [loading, setLoading] = useState(false);

  const handlePageClick = (e) => {
    console.log("you clik on .page." + e.selected);
    const newOffSet = (e.selected * itemPerPage) % products.length;
    //console.log(newOffSet);
    setItemOffSet(newOffSet);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/todos`);
      //console.log(BASE_URL);
      setProducts(res.data.data);
      //console.log(products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const useLink = (item) => {
    //console.log(item);
    navigate(`/products/${item.id}/show`, { state: item });
  };

  return (
    <div>
      {/* >> Hero icon zone << */}
      <IconsPage />
      {/* >> End-Of- Hero icon zone << */}

      <div className="mt-[120px] py-2 px-4 border-b-8 border-gray-400 bg-white ">
        <h1>รายชื่อจังหวัดของประเทศไทยเรียงตามพื้นที่</h1>
      </div>

      <div className="flex-1 md:flex  justify-between my-2 py-2 px-4 text-gray-600 text-xs font-normal leading-5  bg-white ">
        <div className="h-full w-[98%] md:w-[65%]">
          <div className="w-full aspect-square bg-slate-200 rounded flex flex-col gap-1">
            {currentItems.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex p-2 bg-slate-50 text-gray-600 rounded"
                >
                  <div className="flex gap-1 rounded-sm flex-shrink-0">
                    {/* <img
                      src={"http://info-of.com/storage/" + product.images[0]}
                      className="object-cover w-full"
                    /> */}
                    {product.images?.length > 0
                      ? product.images.map((img, index) => (
                          <div
                            key={index}
                            className="w-[80px] h-[80px] bg-slate-300 p-1 mr-2"
                          >
                            <img
                              src={`${BASE_URL}/storage/${img}`}
                              className="object-cover h-full w-full rounded mr-2"
                            />
                          </div>
                        ))
                      : ""}
                  </div>
                  <span className="bg-sky-100 px-2 py-1 rounded">
                    <Link
                      to={{
                        pathname: `/products/${product.id}/show`,
                        state: { korn: "Korn S" },
                      }}
                    >
                      {product.name}
                    </Link>

                    <div
                      onClick={() => useLink(product)}
                      className="bg-sky-100 px-2 py-1 rounded cursor-pointer text-red-500"
                    >
                      {product.name}
                    </div>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[98%] md:w-[33%]">
          <div className="w-full aspect-square bg-slate-200 rounded"></div>
        </div>
      </div>
      <div className="">
        <div className="my-2 bg-slate-50 rounded-lg p-5 content-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeClassName="actived"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
