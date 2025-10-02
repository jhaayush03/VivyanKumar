"use client";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { X } from "lucide-react";

export default function SpeedcubingPage() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const certificates = [
    {
      image: "/speedcubing_c1.png",
      title: "World Cube Association Competition Certificate",
    },
    {
      image: "/speedcubing_c2.jpg",
      title: "Mathsoc Delhi Open 2020",
    },
    {
      image: "/speedcubing_c3.jpg",
      title: "PB Samashathon Delhi",
    },
    {
      image: "/speedcubing_c4.jpg",
      title: "PB Samashathon Delhi",
    },
    {
      image: "/speedcubing_c5.jpg",
      title: "Indian Nationals 2019",
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

  const openCertificate = (index: number) => {
    setSelectedCertificate(index);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Speedcubing</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Solved 2x2 through 7x7, pyraminx, skewb, and megaminx, showcasing
              spatial visualization abilities and knowledge of cubing
              algorithms.
            </p>

            {/* Key Achievements/Skills */}
            <div className="max-w-2xl mx-auto text-left">
              <ul className="space-y-4">
                {/* First Main Pointer */}
                <li className="flex items-start text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Average solve times (in competition) can be found here
                    </span>
                    <ul className="space-y-1.5 mt-2 ml-4">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>2x2: 4.11 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>3x3: 15.07 seconds, 38.48 (one handed)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>4x4: 1 minute 22.14 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Pyraminx: 8.77 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Skewb: 9.24 seconds</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Second Main Pointer */}
                <li className="flex items-start text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Unofficial solve times:
                    </span>
                    <ul className="space-y-1.5 mt-2 ml-4">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>5x5: ~4 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>6x6: ~10 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>7x7: ~20 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Megaminx: ~7 minutes</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Certificates Section - 3 boxes with headlines */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300"
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
                    <h3 className="font-semibold text-center text-sm mb-3">
                      {cert.title}
                    </h3>
                    <Button
                      onClick={() => openCertificate(index)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      View Certificate
                    </Button>
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

      {/* Certificate Modal */}
      {selectedCertificate !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeCertificate}
        >
          <div
            className="relative bg-background rounded-lg max-w-6xl max-h-[90vh] w-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="sticky top-4 left-full ml-4 z-10 p-2 bg-background rounded-full shadow-lg hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {certificates[selectedCertificate].title}
              </h3>
              <div className="flex justify-center">
                <img
                  src={certificates[selectedCertificate].image}
                  alt={certificates[selectedCertificate].title}
                  className="max-w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
