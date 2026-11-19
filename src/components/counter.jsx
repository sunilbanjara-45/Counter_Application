
import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counter");
    return savedCount !== null ? Number(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
            🔢
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Counter App sk
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Your count is saved automatically
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-gray-50 py-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400">
            Current Count
          </p>
          <h2 className="text-6xl font-bold text-indigo-600">
            {count}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={decrement}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500 text-3xl font-bold text-white shadow-lg transition hover:bg-red-600 active:scale-95"
          >
            −
          </button>

          <button
            onClick={reset}
            className="rounded-xl bg-gray-200 px-5 py-4 font-semibold text-gray-700 transition hover:bg-gray-300 active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-3xl font-bold text-white shadow-lg transition hover:bg-indigo-700 active:scale-95"
          >
            +
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default App;
