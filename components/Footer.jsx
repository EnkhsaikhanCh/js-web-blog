import React, { useRef, useState } from 'react';
import { Logo } from "./images/Logo";
import { Duplicate_icon } from "./images/icons/Duplicate_icon";
import { CopiedPopup } from './CopiedPopup';

const CopyPopup = ({ isVisible }) => {
  return isVisible && (
    <div>
      <CopiedPopup />
    </div>
  );
};

export function Footer() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);


  const copyToClipboard = (ref) => {
    const range = document.createRange();
    range.selectNode(ref.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setIsCopied(true);
  };

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);

  return (
    <div className="mb-4">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="mx-4 flex flex-col gap-[50px] divide-y divide-[#ADBAC7] rounded-xl bg-[#242933] px-8 pb-[20px] pt-[30px] dark:bg-[#242933]">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="hidden flex-col gap-5 md:flex">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold text-blue-400">About</h2>
                <p className="text-justify text-[#ADBAC7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  illo quae qui et. Dolorum nisi inventore aspernatur hic! Sequi
                  reprehenderit aliquam ea provident fugiat ducimus voluptate
                  iure vitae laborum quae.
                </p>
              </div>
              <div className="flex w-full flex-col gap-1 rounded-md text-[#ADBAC7] md:w-[300px] ${isCopied ? 'copied-animation' : ''}`}">
                <button
                  className="flex justify-between gap-1 rounded-md p-2 hover:bg-slate-700"
                  onClick={() => copyToClipboard(emailRef)}
                >
                  <div className="pl-2">Email</div>
                  <div className="text-blue-300" ref={emailRef}>email@gmail.com</div>
                  <Duplicate_icon />
                </button>
                <button
                  className="flex justify-between gap-1 rounded-md p-2 hover:bg-slate-700"
                  onClick={() => copyToClipboard(phoneRef)}
                >
                  <div className="pl-2">Phone</div>
                  <div className="text-blue-300" ref={phoneRef}>+976 0000-0000</div>
                  <Duplicate_icon />
                </button>
              </div>
              <CopyPopup isVisible={isCopied} />
            </div>

            <div className="flex flex-col items-center gap-2">
              <ul className="flex h-full w-[80px] flex-col gap-2 text-[#ADBAC7]">
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
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ul className="flex h-full w-[80px] flex-col gap-2 text-[#ADBAC7]">
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
          <div className="flex items-center justify-center pt-[20px] text-[#ADBAC7] md:justify-between">
            <div className="hidden lg:flex">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm md:text-base">
              Copyright © 2024 MetaBlog Inc. All rights reserved.
            </p>
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
