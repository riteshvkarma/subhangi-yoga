"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

// Mixed media: images + YouTube videos
const mediaItems = [
  ...Array.from({ length: 28 }, (_, i) => ({
    type: "image" as const,
    src: `/yoga/shubhangi_yoga_${i + 1}.webp`,
    alt: `Yoga Gallery Image ${i + 1}`,
  })),
  {
    type: "youtube" as const,
    youtubeId: "dQw4w9WgXcQ", // Replace with real video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    alt: "Yoga Award Ceremony Video",
  },
];

export default function GalleryPage() {
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
            Moments from our yoga sessions & special recognitions. <br />
            योग सत्रे आणि विशेष सन्मानाचे सुंदर क्षण.
          </span>
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className="mb-4 block w-full break-inside-avoid cursor-zoom-in bg-transparent border-0 p-0 text-left"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="w-full overflow-hidden rounded-md">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white text-3xl">▶</span>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
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
          plugins={[Video]}
          slides={mediaItems.map((item) =>
            item.type === "image"
              ? { src: item.src }
              : {
                  type: "video",
                  poster: item.thumbnail,
                  sources: [
                    {
                      src: `https://www.youtube.com/watch?v=${item.youtubeId}`,
                      type: "video/youtube",
                    },
                  ],
                },
          )}
        />
      )}
    </section>
  );
}
