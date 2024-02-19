import Link from "next/link";

export function CardUI({ article, hasProfile }) {
  return (
    <Link
      href={article.path}
      className="flex flex-col gap-4 rounded-md border p-4 hover:border-blue-300 hover:bg-[rgba(0,0,0,.02)] dark:border-[#242933] dark:bg-[#242933] dark:hover:border-blue-500 dark:hover:bg-[#212630]"
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
                className="inline-block rounded border border-blue-100 bg-blue-100 px-[10px] py-1 text-sm text-blue-600 dark:border-blue-500 dark:bg-[#4B6BFB0D] dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mb-5 font-bold hover:underline hover:underline-offset-2 dark:text-[#ADBAC7]">
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
              <p className="text-[#ADBAC7]">{article.user.username}</p>
            </div>
          )}

          <p className="text-[#ADBAC7]">{article.readable_publish_date}</p>
        </div>
      </div>
    </Link>
  );
}
