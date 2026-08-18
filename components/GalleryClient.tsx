'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const videos = [
  '/gallery-1.mp4',
  '/gallery-2.mp4',
  '/gallery-3.mp4',
  '/gallery-4.mp4',
  '/gallery-5.mp4',
  '/gallery-6.mp4',
  '/gallery-7.mp4',
  '/gallery-8.mp4',
];

const posterFor = (src: string) => src.replace('/gallery-', '/posters/gallery-').replace('.mp4', '.jpg');

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const userPaused = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          el.play();
          setPaused(false);
        } else {
          el.pause();
          setPaused(true);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.play();
      setPaused(false);
    } else {
      userPaused.current = true;
      el.pause();
      setPaused(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      aria-label={paused ? 'Play video' : 'Pause video'}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-[28px] border border-black/[0.08] bg-black shadow-sm outline-none transition-shadow duration-300 hover:shadow-[0_30px_80px_-40px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      <video
        ref={videoRef}
        src={src}
        poster={posterFor(src)}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />

      {/* Pause overlay — only shows when paused */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
          paused ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] shadow-lg">
          <svg className="ml-1 h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Gold accent ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#D4AF37]/0 transition duration-300 group-hover:ring-[#D4AF37]/40" />
    </motion.div>
  );
}

export default function GalleryClient() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 py-16 sm:px-6 sm:py-24 md:px-12">
        <div className="relative mx-auto max-w-6xl space-y-5 text-center sm:space-y-6">
          <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Gallery</span>
          <h1 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-5xl">
            See Our Properties Come to Life
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B6860]">
            Explore video walkthroughs of our premium residential developments across Bangalore — crafted by Ariston Developers.
          </p>
          <p className="text-sm text-[#9B9890]">Tap any video to pause · tap again to play</p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {videos.map((src, index) => (
              <VideoCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
