import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { menuData } from "@/data/menuData";
import { useState } from "react";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";

const SearchInput = () => (
  <input
    type="search"
    aria-label="Search"
    placeholder="Search"
    className="h-[36px] rounded-md bg-[#F4F4F5] pl-[16px] pr-[8px] dark:bg-[#3a4050]"
  />
);

export function Menu({ items }) {
  return (
    <>
      <div className="hidden items-center gap-1 md:flex">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="text-md flex h-[40px] items-center justify-center rounded-md border border-transparent px-4 py-2 font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400"
          >
            {item.label}
          </Link>
        ))}
        <div className="flex gap-3 pl-[10px]">
          <ThemeChanger />
          <SearchInput />
        </div>
      </div>

      <div className="flex gap-2 md:hidden">
        <ThemeChanger />
        <MobileMenu items={menuData} />
      </div>
    </>
  );
}

const MobileMenu = ({ items }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="sm:flex md:hidden"
        aria-label="Open menu"
      >
        <HiOutlineMenu className="h-[32px] w-[32px] dark:text-[#ADBAC7]" />
      </button>
      {visible && (
        <div
          className="fixed inset-0 bg-gray-200/70"
          onClick={() => setVisible(false)}
          aria-hidden="true"
        ></div>
      )}
      <div
        className={`fixed bottom-0 top-0 flex w-2/3 flex-col gap-2 bg-white px-2 pt-2 transition-all dark:bg-[#2a303c] sm:w-2/5 ${visible ? "right-0" : "-right-full"}`}
      >
        <div className="flex justify-between">
          <button
            onClick={() => setVisible(false)}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-md bg-[#f4f4f5] dark:bg-[#3b4050] dark:text-white"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
          <ThemeChanger />
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="ml-2 font-semibold text-[#495057] hover:text-blue-300 dark:text-[#adbac7]"
            >
              {item.label}
            </Link>
          ))}
          <SearchInput />
        </div>
      </div>
    </>
  );
};
