import { MenuData } from "@/data/MenuData";
import { Logo } from "../images/Logo";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="px-4 py-4 md:px-0 md:container mx-auto">
      <div className="flex items-center justify-between">
        <Logo />
        <Menu items={MenuData} />
      </div>
    </div>
  );
}
