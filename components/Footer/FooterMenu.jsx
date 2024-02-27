import { MenuData } from "@/data/MenuData";

export function FooterMenu() {
  return (
    <div className="flex flex-col items-center gap-2">
      <ul className="flex h-full w-[80px] flex-col gap-2 text-[#ADBAC7]">
        {MenuData.map((menu) => (
          <a
            key={menu.id}
            href={menu.link}
            className="hover:underline hover:underline-offset-2"
          >
            {menu.label}
          </a>
        ))}
      </ul>
    </div>
  );
}
