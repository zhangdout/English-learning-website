import React from "react";

const Breadcrumb = () => {
  return (
    <nav
      aria-label="breadcrumb"
      className="bg-gray-100 p-4 rounded-lg shadow-md w-11/12 md:w-3/4 mx-auto mt-6"
    >
      <ol className="flex items-center space-x-2 text-gray-600 text-sm">
        <li>
          <a
            href="/"
            className="text-blue-600 hover:underline font-medium transition"
          >
            Home
          </a>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li aria-current="page" className="font-semibold text-gray-800">
          Features
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
