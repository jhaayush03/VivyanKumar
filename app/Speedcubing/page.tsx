"use client";

import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";

export default function SpeedcubingPage() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const certificates = [
    {
      image: "/certificate1.jpg",
      title: "World Cube Association Competition Certificate",
    },
    {
      image: "/certificate2.jpg",
      title: "Regional Speedcubing Championship - 1st Place",
    },
    {
      image: "/certificate3.jpg",
      title: "National Rubik's Cube Competition Achievement",
    },
  ];

  const images = [
    { src: "/speedcubing1.jpg" },
    { src: "/speedcubing2.jpg" },
    { src: "/speedcubing1.jpg" },
  ];

  const videos = [
    {
      src: "/v3.mp4",
      thumbnail: "",
    },
    {
      src: "/v1.mp4",
      thumbnail: "",
    },
    {
      src: "/v2.mp4",
      thumbnail: "",
    },
  ];

  const handleVideoHover = (index: number, isHovering: boolean) => {
    setHoveredVideo(isHovering ? index : null);
    const video = videoRefs.current[index];
    if (video) {
      if (isHovering) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Speedcubing</h1>
            <p className="text-lg text-muted-foreground">
              My journey through competitions, achievements, and solving moments
            </p>
          </div>

          {/* Certificates Section - 3 boxes with headlines */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3ECertificate %23' +
                          (index + 1) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="font-semibold text-center text-sm">
                      {cert.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Images Section - 3 boxes, no text */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EImage %23' +
                          (index + 1) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Videos Section - 2 boxes, autoplay on hover */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => handleVideoHover(index, true)}
                  onMouseLeave={() => handleVideoHover(index, false)}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-contain"
                      loop
                      muted
                      playsInline
                      poster={video.thumbnail}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLVideoElement;
                        target.poster =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect width="640" height="360" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EVideo %23' +
                          (index + 1) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {hoveredVideo !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
