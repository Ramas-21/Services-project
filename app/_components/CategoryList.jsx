import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mx-4 md:mx-22 lg:mx-51 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
      {categoryList.length>0?categoryList.map((category, index) => (
        <Link href={'/search/'+category.name} key={index} className={`flex flex-col items-center justify-center gap-2 bg-green-400 p-2 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out` }>
          <Image src={category.icon.url} alt="icon" width={35} height={35} />
          <h2 className="text-sm text-white">{category.name}</h2>
        </Link>
      )):
      [1,2,3,4,5,6,7].map((item, index) =>(
        <div key={index} className="h-[80px] w-full bg-slate-200 animate-pulse rounded-lg">

        </div>
      ))
      }
    </div>
  );
};

export default CategoryList;
