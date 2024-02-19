import Link from "next/link";

export function CardUI({ article, hasProfile }) {
  return (
    <Link
      href={article.path}
      className="flex flex-col gap-4 rounded-md border p-4 hover:border-orange-300 hover:bg-orange-50 dark:border-[#242933] dark:bg-[#242933] dark:hover:border-orange-300 dark:hover:bg-[#212630]"
    >
      <img
        src={article.social_image}
        className="aspect-video rounded-md object-cover"
      />
      <div className="col-span-2 flex h-full flex-col justify-between p-2">
        {/* title, tag */}
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            {article.tag_list.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded border border-orange-300 bg-orange-50 px-[10px] py-1 text-sm text-orange-600 dark:border-orange-500 dark:bg-[#4B6BFB0D] dark:text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mb-5 font-bold dark:text-[#b2cdd6]">
            {article.title}
          </h2>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between">
          {hasProfile && (
            <div className="flex items-center gap-2">
              <img
                src={article.user.profile_image}
                alt=""
                className="h-[25px] w-[25px] rounded-full"
              />
              <p className="text-[#97989F]">{article.user.username}</p>
            </div>
          )}

          <p className="text-[#97989F]">{article.readable_publish_date}</p>
        </div>
      </div>
    </Link>
  );
}
