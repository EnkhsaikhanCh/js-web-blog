import { Logo } from "../images/Logo";
import { FooterMenu } from "./FooterMenu";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { Policy } from "./Policy";
import { Email_Phone } from "./Email_Phone";
import { About } from "./About";
import { Copyright } from "./Copyright";

export function Footer() {
  return (
    <div className="mb-4">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="mx-4 flex flex-col gap-[50px] divide-y divide-[#ADBAC7] rounded-xl bg-[#2D333B] px-8 pb-[20px] pt-[30px] dark:bg-[#2D333B]">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="hidden flex-col gap-5 md:flex">
              <About />
              <Email_Phone />
            </div>
            <FooterMenu />
            <SocialMediaLinks />
          </div>
          <div className="flex items-center justify-center pt-[20px] text-[#ADBAC7] md:justify-between">
            <div className="hidden lg:flex">
              <Logo />
            </div>
            <Copyright />
            <Policy />
          </div>
        </div>
      </div>
    </div>
  );
}
