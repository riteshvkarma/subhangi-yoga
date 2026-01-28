"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  src: `/yoga/shubhangi_yoga_${i + 1}.webp`,
  alt: `Yoga Gallery Image ${i + 1}`,
}));

export default function GalleryPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <div className="heading-block center mb-5">
          <h2>
            Yoga Gallery <span>| योग गॅलरी</span>
          </h2>
          <span>
            Moments from our yoga sessions. <br />
            आमच्या योग सत्रांतील सुंदर क्षण.
          </span>
        </div>

        {/* Gallery */}
        <div className="section p-0 m-0">
          <div
            ref={galleryRef}
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4"
          >
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                className="mb-4 block w-full break-inside-avoid cursor-zoom-in bg-transparent border-0 p-0 text-left"
                onClick={() => setLightboxIndex(image.id - 1)}
              >
                <div className="w-full overflow-hidden rounded-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-auto"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-5">
          <Link href="/" className="button button-rounded">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          open
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={galleryImages.map((img) => ({ src: img.src }))}
        />
      )}
    </section>
  );
}
