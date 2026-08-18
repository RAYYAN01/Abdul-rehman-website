'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import { rooms, totalRenders, type Render } from '@/lib/upcomingProject';
import { blurMap } from '@/lib/renderBlur';

function RenderCard({ render, index }: { render: Render; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_40px_90px_-60px_rgba(0,0,0,0.5)]">
        <motion.div style={{ y }} className="absolute inset-[-6%]">
          <Image
            src={render.src}
            alt={render.caption}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={72}
            priority={index === 0}
            placeholder={blurMap[render.src] ? 'blur' : 'empty'}
            blurDataURL={blurMap[render.src]}
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/[0.06]" />
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-semibold text-[#D4AF37]/25">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold text-[#1A1A18] sm:text-3xl">{render.title}</h4>
          <p className="text-lg leading-8 text-[#6B6860]">{render.caption}</p>
        </div>

        <ul className="grid gap-2.5">
          {render.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-[#4A4A40]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
              <span className="leading-7">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function UpcomingProjectClient() {
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveRoom(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    rooms.forEach((room) => {
      const el = document.getElementById(room.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-[#D4AF37]"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 md:px-12">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-sm uppercase tracking-[0.35em] text-[#D4AF37]"
          >
            Upcoming Project
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-5xl"
          >
            Interior Renders — Bengaluru Residence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-[#6B6860]"
          >
            A room-by-room walkthrough of the interior design for our next residence — four bedrooms,
            each with its own material story, captured across {totalRenders} detailed renders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            {rooms.map((room) => (
              <a
                key={room.id}
                href={`#${room.id}`}
                className="rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-sm font-medium text-[#4A4A40] transition hover:border-[#D4AF37] hover:text-[#1A1A18]"
              >
                {room.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky room nav */}
      <div className="sticky top-16 z-40 border-y border-black/[0.08] bg-[#FAF9F6]/85 backdrop-blur-md sm:top-20">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-6 md:px-12">
          {rooms.map((room) => (
            <a
              key={room.id}
              href={`#${room.id}`}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                activeRoom === room.id
                  ? 'bg-[#D4AF37] text-black'
                  : 'text-[#6B6860] hover:bg-black/5 hover:text-[#1A1A18]'
              }`}
            >
              {room.name}
            </a>
          ))}
        </div>
      </div>

      {/* Rooms */}
      {rooms.map((room, roomIndex) => (
        <section
          key={room.id}
          id={room.id}
          className={`scroll-mt-32 border-b border-black/[0.08] px-5 py-16 sm:px-6 md:px-12 md:py-24 ${
            roomIndex % 2 === 0 ? 'bg-[#FAF9F6]' : 'bg-[#F2EFE8]'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl space-y-4 md:mb-16"
            >
              <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                {String(roomIndex + 1).padStart(2, '0')} — {room.renders.length} Renders
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">
                {room.name}
              </h2>
              <p className="text-xl font-medium text-[#4A4A40]">{room.tagline}</p>
              <p className="text-lg leading-8 text-[#6B6860]">{room.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {room.palette.map((tone) => (
                  <span
                    key={tone}
                    className="rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#6B6860]"
                  >
                    {tone}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {room.renders.map((render, i) => (
                <RenderCard key={render.src} render={render} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#FAF9F6] px-5 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[32px] border border-black/[0.08] bg-white px-6 py-12 text-center shadow-[0_60px_140px_-90px_rgba(212,175,55,0.35)] sm:px-10 sm:py-16">
          <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Register Interest</span>
          <h2 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-4xl">
            Want the full details on this project?
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
            Speak with our team for floor plans, specifications and early-access availability on this
            upcoming residence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/919945726707?text=${encodeURIComponent(
                'Hello, I would like more information about your upcoming project in Bengaluru.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
            >
              Enquire on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-black/15 bg-black/5 px-8 py-4 text-sm font-semibold text-[#1A1A18] transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
