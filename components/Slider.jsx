import { BlogData } from "@/data/BlogData";
import { Forward_icon } from "./images/icons/Forward_icon";
import { Back_icon } from "./images/icons/Back_icon";
import Link from "next/link";

export function Slider() {
  return (
    <div className="container mx-auto mt-[20px] flex flex-col gap-3 px-4 py-4">
      {/* <SliderCard /> */}

      <SliderCard blog={BlogData[0]} />

      <div className="hidden gap-1 self-end md:flex">
        <button className="rounded-md transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700">
          <Back_icon />
        </button>
        <button className="rounded-md transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700">
          <Forward_icon />
        </button>
      </div>
    </div>
  );
}

function SliderCard({ blog }) {
  // const { id, title, tag, uploadedDate, image, link } = props;

  return (
    <Link href={blog.link} key="" className="relative rounded-md">
      <img
        src={blog.image}
        className="aspect-video h-[300px] w-full rounded-md border object-cover md:h-[450px] lg:h-[600px]"
      />
      <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors lg:bottom-2 lg:left-2 lg:right-2 lg:w-[600px] lg:border lg:border-transparent lg:bg-white lg:from-inherit lg:text-black">
        <div className="flex flex-col gap-[16px]">
          <p className="md:py-[4px]text-white flex w-[97px] items-center justify-center rounded-md bg-[#4B6BFB] text-white md:px-[10px]">
            {blog.tag}
          </p>
          <h1 className="md:text-4xl">{blog.title}</h1>
        </div>
        <p className="hidden md:flex">{blog.uploadedDate}</p>
      </div>
    </Link>
  );
}
