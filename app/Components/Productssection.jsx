"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "@/app/Components/ProductsList";
import ProductsApi from "../_utils/ProductsApi";
// import {ArrowRight} from 'lucide-react'


function Productssection() {
  // const [productList,setProductList]= useState([])
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductsApi.getLatestProducts().then((res) => {
      console.log(res.data.data);
      // setProductList(res.data.data)
    });
  };
  return (
    <div>
      <ProductsList productList={productList}/>
    </div>
  );
}

export default Productssection;
