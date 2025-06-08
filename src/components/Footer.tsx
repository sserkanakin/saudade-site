// src/components/Footer.tsx
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Saudade — Enschede, NL</p>
      </div>
    </footer>
  );
}
