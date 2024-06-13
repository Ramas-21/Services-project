'use client'
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Api from "./_services/Api";
import BusinessList from "./_components/BusinessList";
import Hero3 from "./_components/Hero3";





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
      <Hero3/>
      <CategoryList categoryList={categoryList}/>
      <BusinessList businessList={businessList}/>
    </div>
  );
}
