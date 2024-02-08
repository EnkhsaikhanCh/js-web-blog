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
      <div className="hidden items-center gap-5 md:flex">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="font-semibold text-[#495057] hover:text-black"
          >
            {item.label}
          </Link>
        ))}
        <ThemeChanger />
        <input
          type="search"
          placeholder="Search"
          className="h-[36px] rounded-md bg-[#F4F4F5] pl-[16px] pr-[8px] "
        ></input>
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
        className={`fixed bottom-0 top-0 flex w-2/3 flex-col bg-white transition-all sm:w-2/5 ${
          visible ? "right-0" : "-right-full"
        } `}
      >
        <div>
          <button onClick={closeMenu}>
            <IoClose />
          </button>
        </div>
        <div className="px-4 py-4">
          <div className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="font-semibold text-[#495057] hover:text-black"
              >
                {item.label}
              </Link>
            ))}
            <input
              type="search"
              placeholder="Search"
              className="h-[36px] rounded-md bg-[#F4F4F5] pl-[16px] pr-[8px]"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
