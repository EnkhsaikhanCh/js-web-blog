import Link from "next/link";

export function Trending() {
  return (
    <div className="container mx-auto">
      <h1>Trending</h1>
      <div className="grid grid-cols-4">
        <TrendingCard />
      </div>
    </div>
  );
}

function TrendingCard({ blog }) {
  return (
    <Link href="/link" className="relative flex flex-col border">
      <img
        src="https://images.unsplash.com/photo-1703701008461-ce64767019d3"
        alt=""
      />
      <div className="absolute bottom-0 flex flex-col gap-2 bg-gradient-to-t from-slate-700 p-4 text-white">
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
