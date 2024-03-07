import { menuData } from "@/data/menuData";
import { Logo } from "../images/Logo";
import { Menu } from "./Menu";
import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b-2 bg-[hsla(0,0%,100%,.9)] shadow-sm dark:border-[#383E47] dark:bg-[#2D333B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="https://pinecone-web-blog.vercel.app/"
              aria-label="Go to Pinecone Web Blog homepage"
            >
              <Logo />
            </Link>
          </div>

          {/* Menu */}
          <Menu items={menuData} />
        </div>
      </div>
    </div>
  );
}
