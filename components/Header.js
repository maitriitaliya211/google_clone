import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { GrClose } from "react-icons/gr ";
import { GrClose } from "react-icons/gr";
import { HiMicrophone } from "react-icons/hi";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/google.webp"
          alt=""
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex px-6 py-3 ml-10 mr-5 flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <span className=" sm:mr-3 text-gray-300 cursor-pointer transition duration-100 transform hover:scale-125">
            <GrClose onClick={() => (searchInputRef.current.value = "")} />
          </span>

          <span className="mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300">
            <HiMicrophone />
          </span>
          <span className="mr-3 text-blue-500 hidden sm:inline-flex">
            <AiOutlineSearch />
          </span>
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://lh3.googleusercontent.com/p/AF1QipO8sZemvI9NN4VbE6s6e0f0Yk1L9J0s6xCpcga5=s680-w680-h510"
        />
      </div>

      {/* HeaderOptopns */}
      <HeaderOptions />
    </header>
  );
}
export default Header;
