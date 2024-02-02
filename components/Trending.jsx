import Link from "next/link";

export function Trending() {
  return (
    <div className="container mx-auto my-10 px-4 py-2">
      <h1 className="mb-5 text-3xl font-bold text-[#495057]">Trending</h1>
      <div className="grid grid-cols-4">
        <TrendingCard />
      </div>
    </div>
  );
}

function TrendingCard() {
  return (
    <Link href="/link" className="relative flex flex-col rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1703701008461-ce64767019d3"
        alt=""
        className="rounded-md"
      />
      <div className="absolute bottom-0 flex flex-col gap-2 rounded-md bg-gradient-to-t from-slate-700 p-4 text-white">
        <span className="inline-block rounded-md bg-[#4B6BFB] px-[10px] py-1">
          Technology
        </span>
        <p>
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </Link>
  );
}
