import { menuData } from "@/data/menuData";
import { Logo } from "../images/Logo";
import { Menu } from "./Menu";
import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-10 border-b-2 bg-[hsla(0,0%,100%,.9)] dark:border-[#383E47] dark:bg-[#2D333B]">
      <div className="mx-auto px-4 py-4 md:container md:px-0">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="https://pinecone-web-blog.vercel.app/"
            aria-label="Go to Pinecone Web Blog homepage"
          >
            <Logo />
          </Link>

          {/* Menu */}
          <Menu items={menuData} />
        </div>
      </div>
    </div>
  );
}
