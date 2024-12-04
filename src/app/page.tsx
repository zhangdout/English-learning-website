import React from "react";

// Breadcrumb component
const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li aria-current="page">Features</li>
      </ol>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <p>Authors: Evan Zhang and Mona Sun</p>
    </footer>
  );
};

// Home Page layout
export default function HomePage() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>English Learning Website</h1>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main Features */}
      <main className="features">
        <section>
          <h2>Vocabulary</h2>
        </section>
        <section>
          <h2>Reading</h2>
        </section>
        <section>
          <h2>Practice</h2>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
