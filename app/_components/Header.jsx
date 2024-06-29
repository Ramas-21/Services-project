"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="p-3 shadow-md flex justify-between bg-white sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={80} height={60} />
        <div className="hidden md:flex items-center gap-6">
          <Link href={'/'} className="hover:scale-105 cursor-pointer">Home</Link>
          <Link href={'/search/category'} className="hover:scale-105 cursor-pointer">Services</Link>
          <Link href={'/about'} className="hover:scale-105 cursor-pointer">About Us</Link>
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href={'/bookings'}>My Bookings</Link></DropdownMenuItem>
              <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Get Started</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
