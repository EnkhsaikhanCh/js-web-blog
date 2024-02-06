export function ErrorPage() {
  return (
    <div className="container mx-auto flex h-[700px] items-center justify-center">
      <div className="flex flex-col gap-5 px-4 md:grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <h1 className="text-8xl">404</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:items-start">
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-justify">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-[#2870e4]">
            <a href="http://localhost:3000/">Back to Home</a>
          </button>
        </div>
      </div>
    </div>
  );
}
