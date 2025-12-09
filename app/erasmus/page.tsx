"use client";

import Image from "next/image";

const images = [
    "/erasmus1.jpg",
    "/erasmus2.jpg",
    "/erasmus3.jpg",
]; // remplace par tes images dans public/

export default function ErasmusPage() {
    return (
                <div className="min-h-screen flex items-center justify-center text-gray-900 text-2xl font-semibold">
  <span className="bg-green-200 px-6 py-3 rounded-xl shadow-lg animate-pulse">
    En Développement 🚧
  </span>
</div>
    );
}
