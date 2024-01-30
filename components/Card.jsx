import { BlogData } from "@/data/BlogData";
import Link from "next/link";

export function Card() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {BlogData.map((blog) => (
          <CardDesign key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function CardDesign({ blog }) {
  return (
    <Link
      href={blog.link}
      className=" :gap-4 flex flex-col rounded-md border p-4 hover:bg-slate-50 hover:dark:border-neutral-300 "
    >
      <img src={blog.image} className="aspect-video rounded-md object-cover" />
      <div className="col-span-2 p-2">
        <span className="mb-4 inline-block rounded-md bg-[#4B6BFB0D] px-[10px] py-2 text-[#4B6BFB]">
          {blog.tag}
        </span>
        <h2 className="mb-5 font-bold">{blog.title}</h2>
        <p className="text-[#97989F]">{blog.uploadedDate}</p>
      </div>
    </Link>
  );
}
