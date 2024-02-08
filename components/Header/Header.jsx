import { MenuData } from "@/data/MenuData";
import { Logo } from "../images/Logo";
import { Menu } from "./Menu";
import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-10  bg-[hsla(0,0%,100%,.9)]">
      <div className="mx-auto px-4 py-4 md:container md:px-0">
        <div className="flex items-center justify-between px-4">
          <Link href="http://localhost:3000/">
            <Logo />
          </Link>
          <Menu items={MenuData} />
        </div>
      </div>
    </div>
  );
}
