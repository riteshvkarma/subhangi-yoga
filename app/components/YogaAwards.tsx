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

  if (images.length === 0) return null;

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

        <div className="row g-4">
          {images.map((img, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <Image
                  src={img.url}
                  alt="Yoga Award"
                  width={800}
                  height={600}
                  unoptimized
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
