import React, { useRef, useState } from "react";
import { BsCopy } from "react-icons/bs";
import { Logo } from "./images/Logo";
import { socialData } from "@/data/socialDate";
import { policyMenuData } from "@/data/policyMenuData";
import { menuData } from "@/data/menuData";

const CopyButton = ({ label, refObj }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refObj.current.innerText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  function CopiedPopup() {
    return (
      <div
        className="relative rounded border border-green-400 bg-green-100 px-4 py-2 text-green-700 md:w-[300px]"
        role="alert"
      >
        <strong class="font-bold">Copied</strong>
      </div>
    );
  }

  return (
    <>
      <button
        className="flex items-center justify-between gap-1 rounded-md p-2 hover:bg-slate-700 md:w-[300px]"
        onClick={copyToClipboard}
      >
        <div>{label}</div>
        <div className="text-blue-300" ref={refObj}>
          {label === "Email" ? "email@gmail.com" : "+976 0000-0000"}
        </div>
        <BsCopy />
      </button>
      {isCopied && <CopiedPopup />}
    </>
  );
};

const AboutSection = () => (
  <div className="hidden flex-col gap-1 md:flex">
    <h2 className="text-lg font-bold text-blue-400">About</h2>
    <p className="text-justify text-[#ADBAC7]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo quae
      qui et. Dolorum nisi inventore aspernatur hic! Sequi reprehenderit aliquam
      ea provident fugiat ducimus voluptate iure vitae laborum quae.
    </p>
  </div>
);

const ContactInfo = () => {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  return (
    <div className="hidden w-full flex-col gap-1 rounded-md text-[#ADBAC7] md:flex">
      <CopyButton label="Email" refObj={emailRef} />
      <CopyButton label="Phone" refObj={phoneRef} />
    </div>
  );
};

const MenuLinks = ({ data, title }) => (
  <div className="flex flex-col items-center gap-2">
    <h2 className="w-[90px] items-start text-lg font-bold text-blue-400">
      {title}
    </h2>
    <ul className="flex h-full w-[90px] flex-col gap-2 text-[#ADBAC7]">
      {data.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="hover:underline hover:underline-offset-2"
        >
          {item.label}
        </a>
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <div className="mb-4">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="mx-4 flex flex-col gap-[50px] divide-y divide-[#ADBAC7] rounded-xl bg-[#2D333B] px-8 pb-[20px] pt-[30px] dark:bg-[#2D333B]">
          <div className="flex justify-center md:grid md:grid-cols-2 md:gap-40">
            <div className="flex flex-col gap-5">
              <AboutSection />
              <ContactInfo />
            </div>
            <div className="flex justify-center gap-[30%]">
              <MenuLinks data={menuData} title="Menu" />
              <MenuLinks data={socialData} title="Follow Us" />
            </div>
          </div>
          <div className="flex items-center justify-center pt-[20px] text-[#ADBAC7] md:justify-between">
            <div className="hidden lg:flex">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm md:text-base">
              Copyright © 2024 MetaBlog Inc. All rights reserved.
            </p>
            <div className="hidden gap-5 md:flex">
              {policyMenuData.map((policy) => (
                <a
                  key={policy.id}
                  href={policy.link}
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
