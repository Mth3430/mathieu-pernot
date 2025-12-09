"use client";

import Image from "next/image";

export default function StagePage() {
    const images = [
        "/stage1.jpg",
        "/stage2.jpg",
        "/stage3.jpg",
    ]; // place tes images dans public/

    return (
        <div className="min-h-screen flex items-center justify-center text-gray-900 text-2xl font-semibold">
  <span className="bg-green-200 px-6 py-3 rounded-xl shadow-lg animate-pulse">
    En Développement 🚧
  </span>
</div>

    );
}
