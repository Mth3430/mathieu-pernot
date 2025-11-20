"use client";

import Image from "next/image";

const images = [
    "/erasmus1.jpg",
    "/erasmus2.jpg",
    "/erasmus3.jpg",
]; // remplace par tes images dans public/

export default function ErasmusPage() {
    return (
        <div className="min-h-screen p-10 bg-transparent text-gray-900 dark:text-gray-900">
            <h1 className="text-4xl font-bold mb-6">Mon Erasmus</h1>

            <p className="mb-6">
                Pendant mon Erasmus, j’ai découvert de nouvelles cultures et amélioré mes compétences professionnelles et linguistiques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={src}
                            alt={`Erasmus ${idx + 1}`}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            <p className="mt-6">
                Cette expérience m’a permis de développer mon adaptabilité, mon autonomie et ma capacité à collaborer efficacement avec des équipes internationales.
            </p>
        </div>
    );
}
