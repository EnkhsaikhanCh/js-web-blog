import React from "react";

export function ContactUs() {
  return (
    <div className="px-4">
      <div className="container mx-auto my-[60px] flex flex-col items-center rounded-md border bg-white px-3 py-3 dark:border-[#2D333B] dark:bg-[#2D333B] md:w-[600px] md:px-[24px] md:py-[16px] lg:px-[48px] lg:py-[32px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <TitleInfo />
          <AddressContact />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

function TitleInfo() {
  return (
    <div className="flex flex-col gap-2 text-justify">
      <h1 className="my-3 text-2xl font-bold dark:text-blue-300">Contact Us</h1>
      <p className="text-[#696A75] dark:text-[#B2CDD6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
    </div>
  );
}

function AddressContact() {
  return (
    <div className="flex w-full flex-col gap-5 md:grid md:grid-cols-2">
      <div className="flex flex-col gap-2 rounded-md border p-4 dark:border-blue-300">
        <h2 className="text-lg font-bold dark:text-blue-300">Address</h2>
        <address className="not-italic text-[#696A75] dark:text-[#B2CDD6]">
          1328 Oak Ridge Drive, Saint Louis, Missouri
        </address>
      </div>
      <div className="flex flex-col gap-2 rounded-md border p-4 dark:border-blue-300">
        <h2 className="text-lg font-bold dark:text-blue-300">Contact</h2>
        <div>
          <a
            href="mailto:info@email.com"
            className="text-[#696A75] dark:text-[#B2CDD6]"
          >
            info@email.com
          </a>
          <a
            href="tel:313-332-8662"
            className="block text-[#696A75] dark:text-[#B2CDD6]"
          >
            313-332-8662
          </a>
        </div>
      </div>
    </div>
  );
}

function SendMessage() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-[#F6F6F7] p-8 dark:bg-[#242933]">
      <h2 className="text-lg font-bold dark:text-blue-300">Leave a message</h2>
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            aria-label="First Name"
            className="w-full rounded-md border border-gray-300 p-2 dark:border-[#3A4050] dark:bg-[#3A4050]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            aria-label="Last Name"
            className="w-full rounded-md border border-gray-300 p-2 dark:border-[#3A4050] dark:bg-[#3A4050]"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
          className="w-full rounded-md border border-gray-300 p-2 dark:border-[#3A4050] dark:bg-[#3A4050]"
        />
        <textarea
          name="message"
          id="message"
          cols="full"
          rows="10"
          placeholder="Write a message"
          aria-label="Write a message"
          className="resize-none rounded-md border border-gray-300 p-2 dark:border-[#3A4050] dark:bg-[#3A4050]"
        ></textarea>
        <div className="mt-3 flex">
          <button
            type="submit"
            className="inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
