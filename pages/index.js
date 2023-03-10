/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Avatar from "@/components/Avatar";
import { HiMicrophone, HiViewGrid } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center  justify-center h-[100%]">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between w-full p-5 text-lg text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <HiViewGrid className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://lh3.googleusercontent.com/p/AF1QipO8sZemvI9NN4VbE6s6e0f0Yk1L9J0s6xCpcga5=s680-w680-h510" />
        </div>
      </header>

      <form
        action=""
        className="flex flex-col items-center mt-44 flex-grow w-4/5"
      >
        <Image src="/google.webp" alt="" height={70} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg  focus-within:shadow-lg max-w-md rounded-full border-gray-200 py-3 px-5 items-center sm:max-w-xl lg:max-w-2xl">
          <BiSearch className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <HiMicrophone className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
