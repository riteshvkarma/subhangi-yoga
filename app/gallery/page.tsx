"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

type ImageItem = {
  type: "image";
  src: string;
  alt: string;
};

type VideoItem = {
  type: "youtube";
  youtubeId: string;
  thumbnail: string;
  alt: string;
};

interface GalleryApiItem {
  id: string;
  type: "youtube" | "image";
  file_path: string | null;
  youtube_id: string | null;
  title: string | null;
  created_at: string;
}

interface GalleryApiResponse {
  media: GalleryApiItem[];
}

export default function GalleryPage() {
  const [mediaItems, setMediaItems] = useState<ImageItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data: GalleryApiResponse = await res.json();

        const videos: VideoItem[] =
          data?.media
            ?.filter(
              (item): item is GalleryApiItem & { youtube_id: string } =>
                item.type === "youtube" && typeof item.youtube_id === "string",
            )
            .map((item) => ({
              type: "youtube",
              youtubeId: item.youtube_id,
              thumbnail: `https://img.youtube.com/vi/${item.youtube_id}/hqdefault.jpg`,
              alt: item.title || "Yoga Video",
            })) || [];

        // Keep your 28 local images + API videos
        const images: ImageItem[] = Array.from({ length: 28 }, (_, i) => ({
          type: "image",
          src: `/yoga/shubhangi_yoga_${i + 1}.webp`,
          alt: `Yoga Gallery Image ${i + 1}`,
        }));

        // Store images and videos separately in state
        setMediaItems(images);
        setVideos(videos);
      } catch (error) {
        console.error("Gallery fetch error:", error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="section">
      <div className="container">
        {/* Video Section */}
        {videos.length > 0 && (
          <div className="mb-5">
            <div className="heading-block center mb-4">
              <h3>
                Yoga Videos <span>| योग व्हिडिओ</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {videos.map((item, index) => (
                <button
                  key={`video-${index}`}
                  type="button"
                  className="cursor-pointer border-0 bg-transparent p-0"
                  onClick={() => setLightboxIndex(mediaItems.length + index)}
                >
                  <div className="relative overflow-hidden rounded-md">
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
                </button>
              ))}
            </div>
          </div>
        )}
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto"
                />
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
          slides={[
            ...mediaItems.map((item) => ({
              src: item.src,
            })),
            ...videos.map((item) => ({
              type: "video" as const,
              poster: item.thumbnail,
              sources: [
                {
                  src: `https://www.youtube.com/watch?v=${item.youtubeId}`,
                  type: "video/youtube",
                },
              ],
            })),
          ]}
        />
      )}
    </section>
  );
}
