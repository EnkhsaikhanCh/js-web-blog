import { Logo } from "./images/Logo";
import { Facebook_icon } from "./images/icons/Facebook_icon";
import { Instagram_icon } from "./images/icons/Instagram_icon";
import { Linkedin_icon } from "./images/icons/Linkedin_icon";
import { X_icon } from "./images/icons/X_icon";

export function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col gap-[50px] py-10">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
              quae qui et. Dolorum nisi inventore aspernatur hic! Sequi
              reprehenderit aliquam ea provident fugiat ducimus voluptate iure
              vitae laborum quae.
            </p>
            <div className="flex flex-col gap-1">
              <p>Email: email@gmail.com</p>
              <p>Phone: +976 0000-0000</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ul className="flex flex-col gap-2">
              <a href="http://localhost:3000/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </ul>
          </div>
          <div className="flex justify-center gap-[20px]">
            <Facebook_icon />
            <Instagram_icon />
            <X_icon />
            <Linkedin_icon />
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-5">
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
