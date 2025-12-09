"use client";

import Image from "next/image";

export default function StagePage() {
    const images = [
        "/stage1.jpg",
        "/stage2.jpg",
        "/stage3.jpg",
    ]; // place tes images dans public/

    return (
        <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
            <h1 className="text-4xl font-bold mb-6">Mon Stage</h1>

            <p className="mb-6">
                Pendant mon stage, j’ai travaillé sur différents projets professionnels, ce qui m’a permis de développer mes compétences techniques et organisationnelles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={src}
                            alt={`Stage ${idx + 1}`}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            <p className="mt-6">
                Cette expérience m’a permis de mettre en pratique mes connaissances et de mieux comprendre le fonctionnement d’une équipe professionnelle.
            </p>
        </div>
    );
}
