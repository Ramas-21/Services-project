import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "sonner";
import { metadata } from './metadata'
import RootLayoutClient from "./RootLayoutClient";


const inter = Outfit({ subsets: ["latin"] });

export { metadata };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster />
            <RootLayoutClient>{children}</RootLayoutClient>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
