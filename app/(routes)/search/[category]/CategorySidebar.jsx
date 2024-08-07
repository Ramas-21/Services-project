"use client";
import Api from "@/app/_services/Api";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = usePathname();
  params.split('/')[2];

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(()=>{
    params&&setSelectedCategory(params.split('/')[2])
  },[params])

  const getCategoryList = () => {
    Api.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };
  return (
    <div>
      <h2 className="font-bold mb-3 text-md">Services</h2>
      <div className="bg-green-500 p-5 rounded-md text-black">
        {categoryList.map((category, index) => (
          <Link href={'/search/'+category.name} key={index} className={`flex gap-2 p-3 border items-center rounded-lg mb-3 cursor-pointer hover:bg-blue-100 hover:shadow-md ${selectedCategory==category.name&&'border-primary bg-blue-100'}`}>
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
