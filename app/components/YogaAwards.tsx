"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AwardImage {
  filename: string;
  url: string;
}

const API_BASE = "/api/awards";

export default function YogaAwards() {
  const [images, setImages] = useState<AwardImage[]>([]);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const res = await fetch(API_BASE, {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();
        setImages(data.images || []);
      } catch (err) {
        console.error("Failed to fetch awards images", err);
      }
    };

    fetchAwards();
  }, []);

  const isEmpty = images.length === 0;

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="heading-block text-center mb-5">
          <h2>Awards & Recognition | पुरस्कार व सन्मान</h2>
          <span>
            Celebrating milestones and achievements in the yoga journey. <br />
            योग प्रवासातील महत्त्वाचे टप्पे आणि सन्मान.
          </span>
        </div>

        <div
          className="masonry-grid"
          style={{
            columnGap: "1.5rem",
          }}
        >
          {isEmpty ? (
            <div className="text-center text-muted">
              Awards images are loading or not available.
            </div>
          ) : (
            images.map((img, index) => (
              <div
                key={index}
                className="mb-4"
                style={{ breakInside: "avoid" }}
              >
                <div className="card shadow-sm border-0">
                  <Image
                    src={img.url}
                    alt="Yoga Award"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-100 rounded"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <style jsx>{`
        .masonry-grid {
          column-count: 1;
        }

        @media (min-width: 576px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (min-width: 992px) {
          .masonry-grid {
            column-count: 3;
          }
        }
      `}</style>
    </section>
  );
}
