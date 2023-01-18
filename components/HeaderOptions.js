import HeaderOption from "./HeaderOption";
import { AiOutlinePlaySquare, AiOutlineSearch } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { GiNewspaper } from "react-icons/gi";
import { BiMap } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function HeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b"
    >
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={AiOutlineSearch} title="All" selected />
        <HeaderOption Icon={HiPhotograph} title="Images" />
        <HeaderOption Icon={AiOutlinePlaySquare} title="Vidios" />
        <HeaderOption Icon={GiNewspaper} title="News" />
        <HeaderOption Icon={BiMap} title="Maps" />
        <HeaderOption Icon={BsThreeDotsVertical} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}
export default HeaderOptions;
