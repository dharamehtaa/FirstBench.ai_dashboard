import {
  Castle,
  ChartLine,
  ChevronDown,
  House,
  NotepadText,
  Sparkles,
  Zap,
  Bell,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="py-2 bg-gray-700 flex justify-evenly items-center">
      {/* Logo */}
      <Image src={"/image.png"} alt="" width={150} height={100} />

      {/* Navigation Links */}
      <div className="flex gap-7 text-white">
        <a className="flex items-center gap-1">
          <House size={17} />
          Dashboard
        </a>
        <a href="" className="flex items-center gap-1">
          <Sparkles size={17} />
          FirstGuru
        </a>
        <a href="" className="flex items-center gap-1">
          <Castle size={17} />
          TownHall
        </a>
        <a href="" className="flex items-center gap-1">
          <Zap size={17} />
          AI Evaluation
        </a>
        <a href="" className="flex items-center gap-1">
          <ChartLine size={17} />
          Performance
        </a>
        <a href="" className="active flex items-center gap-1 text-cyan-400">
          <NotepadText size={17} className="text-cyan-400" />
          Mock Test
        </a>

        <a href="" className=" text-white p-1 flex items-center ml-4">
          <Bell size={17} className="text-white gap-3 " />
          </a>
      </div>

      <div>
        <p className="bg-black rounded-md text-white p-1 flex items-center gap-2">
          <span className="text-black bg-red-200 px-2 pl-2">P</span>Profile
          <ChevronDown />
        </p>
      </div>
    </div>
  );
}

export default Header;
