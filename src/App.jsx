import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/top";
import Herozone from "./components/Herozone";
import IconsPage from "./components/IconsPage";
import Products from "./pages/products";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen justify-between">
        {/* <div className="w-full h-10 bg-[#1876f2] "></div> */}

        <Top />
        <Herozone />

        {/* >> content block << */}
        <div className="container max-w-6xl  mx-auto my-2 h-full flex flex-col flex-1 relative">
         

          {/* >> Content Zone << */}

          <Routes>
            <Route path="/" element={<div> Welcome to my page.</div>} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/:productId/show"
              element={<ProductDetail />}
            />
          </Routes>

          {/* >>end Content Zone << */}

          {/* >> below -of- content<< */}
          <div>
            <p className="font-thin text-xs p-3 bg-orange-200 ">
              Click on the Vite and React logos to learn more
            </p>
          </div>
          {/* >> end below -of- content<< */}
        </div>
        <div className="w-full m-auto py-3 bg-[#1876f2] relative flex ">
          <div className="container max-w-4xl mx-auto my-2 h-full flex flex-col flex-1 relative">
            <span className=" text-white font-light">Footer</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
