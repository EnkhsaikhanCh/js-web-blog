import { BlogData } from "@/data/BlogData";
import { Forward_icon } from "./images/icons/Forward_icon";
import { Back_icon } from "./images/icons/Back_icon";

export function Slider() {
  return (
    <div className="container mx-auto mt-[20px] flex flex-col gap-3 px-4 py-4">
      {BlogData.map((card, id) => (
        <SliderCard key={id} {...card} />
      ))}
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

const SliderCard = (props) => {
  const { id, title, tag, uploadedDate, image } = props;

  return (
    <div key={id} className="relative">
      <img
        src={image}
        alt=""
        className="h-[300px] w-full rounded-md object-cover md:h-[600px]"
      />
      <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-white md:bottom-2 md:left-2 md:right-2 md:w-1/2 md:border md:border-transparent md:bg-white md:from-inherit md:text-black lg:w-[600px] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/50	">
        <div className="flex flex-col gap-[16px]">
          <p className="md:py-[4px]text-white flex w-[97px] items-center justify-center rounded-md bg-[#4B6BFB] text-white md:px-[10px]">
            {tag}
          </p>
          <h1 className="md:text-4xl">{title}</h1>
        </div>
        <p className="hidden md:flex">{uploadedDate}</p>
      </div>
    </div>
  );
};
