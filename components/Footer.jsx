import { Logo } from "./images/Logo";
import { Duplicate_icon } from "./images/icons/Duplicate_icon";
import { Facebook_icon } from "./images/icons/Facebook_icon";
import { Instagram_icon } from "./images/icons/Instagram_icon";
import { Linkedin_icon } from "./images/icons/Linkedin_icon";
import { X_icon } from "./images/icons/X_icon";

export function Footer() {
  return (
    <div className="mb-4">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="mx-4 flex flex-col gap-[50px] divide-y rounded-xl border bg-[#f5f5f5] px-8 pb-[20px] pt-[30px]">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="hidden flex-col gap-5 md:flex">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">About</h2>
                <p className="text-justify text-[#696A75]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  illo quae qui et. Dolorum nisi inventore aspernatur hic! Sequi
                  reprehenderit aliquam ea provident fugiat ducimus voluptate
                  iure vitae laborum quae.
                </p>
              </div>
              <div className="flex w-full flex-col rounded-md border md:w-[300px]">
                <button className="flex justify-between gap-1 p-2">
                  <div className="pl-2 text-[#696A75]">Email</div>
                  <div>email@gmail.com</div>
                  <Duplicate_icon />
                </button>
                <button className="flex justify-between gap-1 p-2">
                  <div className="pl-2 text-[#696A75]">Phone</div>
                  <div>+976 0000-0000</div>
                  <Duplicate_icon />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <ul className="flex h-full w-[80px] flex-col gap-2">
                <a
                  href="http://localhost:3000/"
                  className="hover:underline hover:underline-offset-2"
                >
                  Home
                </a>
                <a
                  href="/blog"
                  className="hover:underline hover:underline-offset-2"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="hover:underline hover:underline-offset-2"
                >
                  Contact
                </a>
                <a href="" className="hover:underline hover:underline-offset-2">
                  Contact
                </a>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ul className="flex h-full w-[80px] flex-col gap-2">
                <a
                  href="https://www.facebook.com/"
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/"
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </ul>
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-center pt-[20px] md:justify-between">
            <div className="hidden lg:flex">
              <Logo />
            </div>
            <div>Copyright © 2024 MetaBlog Inc. All rights reserved.</div>
            <div className="hidden gap-5 md:flex ">
              <a href="" className="hover:underline hover:underline-offset-2">
                Terms of Use
              </a>
              <a href="" className="hover:underline hover:underline-offset-2">
                Privacy Policy
              </a>
              <a href="" className="hover:underline hover:underline-offset-2">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
