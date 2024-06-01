import Image from "next/image";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {categoryList.length>0?categoryList.map((category, index) => (
        <div className={`flex flex-col items-center justify-center gap-2 bg-blue-100 p-2 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out` }>
          <Image src={category.icon.url} alt="icon" width={35} height={35} />
          <h2 className="text-sm text-primary">{category.name}</h2>
        </div>
      )):
      [1,2,3,4,5,6].map((item, index) =>(
        <div className="h-[80px] w-full bg-slate-200 animate-pulse rounded-lg">

        </div>
      ))
      }
    </div>
  );
};

export default CategoryList;