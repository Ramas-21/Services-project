'use client'
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import Api from "./_services/Api";

export default function Home() {

  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList()
    getAllBusinessList()
  },[])

  const getCategoryList = () => {
    Api.getCategory().then(resp=>{
      setCategoryList(resp.categories)
    })
  }

  const getAllBusinessList = () => {
    Api.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
  }


  return (
    <div>
      <Hero/>
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
