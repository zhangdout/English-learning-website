import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

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
