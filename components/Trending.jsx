import { BlogData } from "@/data/BlogData";
import Link from "next/link";

export function Trending() {
  return (
    <div className="container mx-auto my-10 px-4 py-2">
      <h1 className="mb-5 text-3xl font-bold text-[#495057]">Trending</h1>
      <div className="grid grid-cols-4 gap-3">
        {BlogData.map((card, id) => (
          <TrendingCard key={id} {...card} />
        ))}
      </div>
    </div>
  );
}

const TrendingCard = (props) => {
  const { id, title, image, tag } = props;
  return (
    <Link
      key={id}
      href="/link"
      className="relative flex flex-col rounded-md border "
    >
      <img src={image} alt="" className="rounded-md" />
      <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-md bg-gradient-to-t from-slate-700 p-4 text-white">
        <div className="flex">
          <span className="inline-block rounded bg-blue-200 px-[10px] py-1 text-sm text-[#4B6BFB]">
            {tag}
          </span>
        </div>
        <p>{title}</p>
      </div>
    </Link>
  );
};
