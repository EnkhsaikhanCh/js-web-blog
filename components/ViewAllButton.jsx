export function ViewAllButton({ ViewAllButtonRender }) {
  return (
    ViewAllButtonRender && (
      <button className="dark:hover:bg rounded-md border px-4 py-1 hover:border-slate-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] hover:dark:border-orange-300">
        <a href="/blog">View all</a>
      </button>
    )
  );
}
