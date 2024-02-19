import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import { MenuData } from "@/data/MenuData";
import { useState } from "react";
import Link from "next/link";
import { ThemeChanger } from "../ThemeChanger";

export function Menu({ items }) {
  return (
    <>
      <div className="hidden items-center gap-1 md:flex">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex h-[36px] items-center justify-center rounded-[4px] px-3 hover:bg-[#f4f4f5] dark:text-[#ADBAC7] dark:hover:bg-[#3a4050] dark:hover:text-blue-300"
          >
            {item.label}
          </Link>
        ))}
        <div className="flex gap-3 pl-[10px]">
          <ThemeChanger />
          <input
            type="search"
            placeholder="Search"
            className="h-[36px] rounded-md bg-[#F4F4F5] pl-[16px] pr-[8px] dark:bg-[#3a4050]"
          ></input>
        </div>
      </div>
      <MobileMenu items={MenuData} />
    </>
  );
}

function MobileMenu({ items }) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  return (
    <>
      <button className="sm:flex md:hidden" onClick={openMenu}>
        <HiOutlineMenu className="h-[32px] w-[32px]" />
      </button>
      {visible && <div className="fixed inset-0 bg-gray-200/70"></div>}
      <div
        className={`fixed bottom-0 top-0 flex w-2/3 flex-col gap-2 bg-white px-2 pt-2 transition-all dark:bg-[#2a303c] sm:w-2/5 ${
          visible ? "right-0" : "-right-full"
        } `}
      >
        <div className="flex justify-between">
          <button
            onClick={closeMenu}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-md bg-[#f4f4f5] dark:bg-[#3b4050] dark:text-white"
          >
            <IoClose />
          </button>
          <ThemeChanger />
        </div>
        <div className="">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="font-semibold text-[#495057] hover:text-blue-300 dark:text-[#adbac7]"
              >
                {item.label}
              </Link>
            ))}
            <input
              type="search"
              placeholder="Search"
              className="h-[36px] rounded-md bg-[#F4F4F5] pl-[16px] pr-[8px] dark:bg-[#3b4050]"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
