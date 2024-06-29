"use client";

import { usePathname } from "next/navigation";
import Footer from "./_components/Footer";

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const hideFooter = pathname === "/bookings";

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
