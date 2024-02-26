import React, { useRef, useState } from "react";
import { Logo } from "./images/Logo";
import { CopiedPopup } from "./CopiedPopup";
import { BsCopy } from "react-icons/bs";
import { socialData } from "@/data/socialDate";
import { MenuData } from "@/data/MenuData";
import { policyMenuData } from "@/data/policyMenuData";

const CopyPopup = ({ isVisible }) => {
  return (
    isVisible && (
      <div>
        <CopiedPopup />
      </div>
    )
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
    document.execCommand("copy");
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
              <div className="${isCopied ? 'copied-animation' : ''}`} flex w-full flex-col gap-1 rounded-md text-[#ADBAC7] md:w-[300px]">
                <button
                  className="flex items-center justify-between gap-1 rounded-md p-2 hover:bg-slate-700"
                  onClick={() => copyToClipboard(emailRef)}
                >
                  <div className="pl-2">Email</div>
                  <div className="text-blue-300" ref={emailRef}>
                    email@gmail.com
                  </div>
                  <BsCopy />
                </button>
                <button
                  className="flex items-center justify-between gap-1 rounded-md p-2 hover:bg-slate-700"
                  onClick={() => copyToClipboard(phoneRef)}
                >
                  <div className="pl-2">Phone</div>
                  <div className="text-blue-300" ref={phoneRef}>
                    +976 0000-0000
                  </div>
                  <BsCopy />
                </button>
              </div>
              <CopyPopup isVisible={isCopied} />
            </div>

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
            <div className="flex flex-col items-center gap-2">
              <ul className="flex h-full w-[80px] flex-col gap-2 text-[#ADBAC7]">
                {socialData.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-2"
                  >
                    {social.label}
                  </a>
                ))}
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
              {policyMenuData.map((policy) => (
                <a
                  key={policy.id}
                  href={policy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-2"
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
