"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/yoga/subhangi_yoga_${i + 1}.webp`,
    alt: `Gallery Thumb ${i + 1}`,
  }));

  return (
    <>
      <div className="section bg-transparent border-top mb-0">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="heading-block border-bottom-0 mb-0"
              style={{ maxWidth: "700px" }}
            >
              <div className="fancy-title title-border mb-3">
                <h5 className="fw-normal color font-body text-uppercase ls-1">
                  Beautiful Captured
                </h5>
              </div>
              <h2
                className="fw-bold mb-2 text-transform-none"
                style={{ fontSize: "42px", letterSpacing: "-1px" }}
              >
                Our <span>Yoga</span> Gallery.
              </h2>
              <p className="lead mb-0">
                Energistically syndicate team building synergy after efficient
                human capital. Assertively underwhelm sticky solutions.
              </p>
            </div>
            <Image
              src="/demos/yoga/images/yoga-2.svg"
              alt="Yoga Image"
              width={300}
              height={300}
              className="d-none d-sm-flex"
            />
          </div>
        </div>
      </div>
      <div className="section p-0 m-0">
        <div
          ref={galleryRef}
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4"
        >
          {galleryImages.map((image) => (
            <a
              key={image.id}
              href="#"
              className="mb-4 block break-inside-avoid cursor-zoom-in"
              onClick={(e) => {
                e.preventDefault();
                setLightboxIndex(image.id - 1);
              }}
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
            </a>
          ))}
        </div>
        <div className="section bg-transparent text-center pt-4 pb-0">
          <Link
            href="/gallery"
            className="button button-rounded button-border button-dark px-5"
          >
            View More Photos
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={galleryImages.map((img) => ({ src: img.src }))}
        />
      )}
    </>
  );
}
