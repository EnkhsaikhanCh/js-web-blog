export function ContactUs() {
  return (
    <div className="container mx-auto my-[60px] flex flex-col items-center px-4 md:w-[600px]">
      <div className="flex flex-col items-center justify-center gap-5 ">
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-justify text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        {/* 2 */}
        <div className="flex w-full flex-col gap-5 md:grid md:grid-cols-2">
          <div className="flex  flex-col gap-2 rounded-md border p-4">
            <h2 className="text-lg font-bold">Address</h2>
            <p className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-md border p-4">
            <h2 className="text-lg font-bold">Contact</h2>
            <div>
              <p className="text-[#696A75]">info@email.com</p>
              <p className="text-[#696A75]">313-332-8662</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-[#F6F6F7] p-8">
          <h2 className="text-lg font-bold">Leave a message</h2>
          <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="full"
              rows="10"
              placeholder="Write a message"
              className="resize-none rounded-md border border-gray-300 p-2"
            ></textarea>
            <div className="mt-3 flex">
              <button className="inline-block rounded-md border bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
