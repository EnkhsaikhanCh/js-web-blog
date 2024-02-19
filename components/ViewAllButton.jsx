export function ViewAllButton({ ViewAllButtonRender }) {
  return (
    ViewAllButtonRender && (
      <button className="dark:hover:bg rounded-md border px-4 h-[36px] w-[100px] ml-2 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] hover:border-orange-300 dark:hover:border-orange-300">
        <a href="/blog">View all</a>
      </button>
    )
  );
}
