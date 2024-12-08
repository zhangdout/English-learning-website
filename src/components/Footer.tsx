import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 shadow-inner mt-10">
      <div className="w-11/12 md:w-3/4 mx-auto text-center">
        {/* 网站名称 */}
        <h3 className="text-lg font-bold uppercase tracking-wide">
          English Learning Website
        </h3>

        {/* 分隔线 */}
        <div className="my-4 border-t border-white opacity-50"></div>

        {/* 作者信息 */}
        <p className="text-sm">
          Created with ❤️ by{" "}
          <span className="font-semibold">Evan Zhang</span> and{" "}
          <span className="font-semibold">Mona Sun</span>
        </p>

        {/* 版权信息 */}
        <p className="text-sm mt-2">
          © 2024 English Learning Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
