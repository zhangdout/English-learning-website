import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 shadow-lg rounded-b-lg">
        <h1 className="text-4xl font-extrabold text-center tracking-tight">
          English Learning Website
        </h1>
        <p className="text-center mt-4 text-lg">
          Learn Vocabulary, Practice Reading, and Improve Every Day
        </p>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main Features */}
      <main className="flex-grow flex flex-col items-center py-10 space-y-10">
        <section className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 text-center transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Vocabulary
          </h2>
          <p className="text-gray-600">
            Expand your vocabulary with interactive exercises and word lists.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 text-center transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Reading
          </h2>
          <p className="text-gray-600">
            Practice reading skills with engaging articles and quizzes.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 text-center transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Practice
          </h2>
          <p className="text-gray-600">
            Test your knowledge and track your progress over time.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
