import React, { useRef, useState } from "react";

import { CopiedPopup } from "./CopiedPopup";
import { BsCopy } from "react-icons/bs";

const CopyButton = ({ label, value, onCopy, emailRef }) => (
  <button
    className="flex items-center justify-between gap-1 rounded-md p-2 hover:bg-slate-700"
    onClick={onCopy}
  >
    <div className="pl-2">{label}</div>
    <div className="text-blue-300" ref={value}>
      {value === emailRef ? "email@gmail.com" : "+976 0000-0000"}
    </div>
    <BsCopy />
  </button>
);

const CopyPopup = ({ isVisible }) => isVisible && <CopiedPopup />;

export function Email_Phone() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (ref) => {
    const range = document.createRange();
    range.selectNode(ref.current);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    setIsCopied(true);
  };

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);

  return (
    <div
      className={`copied-animation ${isCopied ? "copied-animation" : ""} flex w-full flex-col gap-1 rounded-md text-[#ADBAC7] md:w-[300px]`}
    >
      <CopyButton
        label="Email"
        value={emailRef}
        onCopy={() => copyToClipboard(emailRef)}
        emailRef={emailRef}
      />
      <CopyButton
        label="Phone"
        value={phoneRef}
        onCopy={() => copyToClipboard(phoneRef)}
      />
      <CopyPopup isVisible={isCopied} />
    </div>
  );
}
