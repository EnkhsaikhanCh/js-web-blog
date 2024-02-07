import React from 'react';


export function LoadNext({ loadNext }) {
  return (
    <div className="mb-[70px] flex items-center justify-center">
      <button
        className="rounded-md border bg-slate-50 px-4 py-2 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
        onClick={loadNext}
      >
        Load more
      </button>
    </div>
  );
}