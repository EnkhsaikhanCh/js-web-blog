export function ViewAllButton({ ViewAllButtonRender }) {
  return (
    ViewAllButtonRender && (
      <button className="dark:hover:bg ml-2 h-[36px] w-[100px] rounded-md border px-4 hover:border-blue-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] dark:hover:border-blue-300">
        <a href="/blog">View all</a>
      </button>
    )
  );
}
