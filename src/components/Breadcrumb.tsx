import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-current="page">Features</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
