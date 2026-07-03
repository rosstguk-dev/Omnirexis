"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/hero.mp4";
const POSTER_SRC = "/images/hero-bg.jpg";

function shouldDeferVideo() {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  if (connection?.saveData) return true;
  if (
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  ) {
    return true;
  }

  return false;
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (shouldDeferVideo()) return;
    setUseVideo(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) return;

    const play = () => {
      void video.play().catch(() => {
        setUseVideo(false);
      });
    };

    if (video.readyState >= 2) {
      play();
      return;
    }

    video.addEventListener("loadeddata", play, { once: true });
    return () => video.removeEventListener("loadeddata", play);
  }, [useVideo]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={POSTER_SRC}
        alt=""
        fill
        priority
        className="object-cover object-[center_20%]"
        sizes="100vw"
      />

      {useVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[#081826]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081826] from-0% via-[#081826]/88 via-45% to-[#081826]/35 to-100%" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-[#081826]/20 to-[#081826]/65" />
    </div>
  );
}