"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPlay, FaSpotify, FaHeadphones, FaArrowLeft } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";

import { FloatingNav } from "@/components/ui/floating-nav";
import { Spotlight } from "@/components/ui/spotlight";
import { navItems } from "@/data";
import performancesData from "@/data/performances.json";

const performances = performancesData;

// SVG Pattern component for cards
const MusicPattern = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="musicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
      </linearGradient>
    </defs>
    {/* Sound wave lines */}
    <path
      d="M20 100 Q50 60, 80 100 T140 100 T200 100"
      fill="none"
      stroke="rgba(139, 92, 246, 0.2)"
      strokeWidth="2"
    />
    <path
      d="M0 120 Q40 80, 80 120 T160 120 T240 120"
      fill="none"
      stroke="rgba(168, 85, 247, 0.15)"
      strokeWidth="1.5"
    />
    <path
      d="M10 80 Q50 40, 90 80 T170 80 T250 80"
      fill="none"
      stroke="rgba(99, 102, 241, 0.1)"
      strokeWidth="1"
    />
    {/* Music notes scattered */}
    <text x="30" y="50" fill="rgba(139, 92, 246, 0.2)" fontSize="20">♪</text>
    <text x="150" y="70" fill="rgba(168, 85, 247, 0.15)" fontSize="16">♫</text>
    <text x="80" y="160" fill="rgba(99, 102, 241, 0.2)" fontSize="18">♪</text>
    <text x="170" y="140" fill="rgba(139, 92, 246, 0.1)" fontSize="14">♬</text>
  </svg>
);

export default function NotesbyAryan() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black-100">
      <FloatingNav navItems={navItems} />

      {/* Spotlights - matching main portfolio */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid - same as main */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black-100 bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Floating music notes animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              rotate: 360,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            <BsMusicNoteBeamed className="text-2xl md:text-4xl" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-16 md:pb-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-purple hover:text-white transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center md:mb-24"
        >
          {/* Profile image with glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative mx-auto mb-8 h-52 w-44 md:h-64 md:w-52"
          >
            <div className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-r from-purple via-violet-500 to-indigo-500 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-purple/50 bg-black-100">
              <Image
                src="/dp.jpg"
                alt="Aryan Jaiswal"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 78%' }}
                priority
              />
            </div>
            {/* Music note badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple to-violet-600 text-white shadow-lg"
            >
              <IoMusicalNotes className="text-lg" />
            </motion.div>
          </motion.div>

          {/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="mb-2 text-4xl font-bold md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white to-purple bg-clip-text text-transparent">notes</span>
              <span className="text-purple">by</span>
              <span className="bg-gradient-to-l from-white to-violet-400 bg-clip-text text-transparent">aryan</span>
            </h1>
            <p className="text-sm tracking-widest text-white-200/60 md:text-base">
              MUSICIAN • SINGER • DREAMER
            </p>
          </motion.div>

          {/* Bio - personal, emotional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 max-w-lg"
          >
            <p className="text-lg text-white-100 md:text-xl">
              <span className="mr-1 text-2xl text-purple">&ldquo;</span>
              i sing what i can&apos;t express
              <span className="ml-1 text-2xl text-purple">&rdquo;</span>
            </p>
            <p className="mt-3 text-sm text-white-200/70 md:text-base">
              कुछ अल्फ़ाज़ जो ज़ुबान पे नहीं आते, वो गीतों से बयां हो जाते हैं ✨
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10"
          >
            <Link
              href="https://www.instagram.com/notesbyaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple/20 to-violet-600/20 px-8 py-4 transition-all duration-300 hover:from-purple/30 hover:to-violet-600/30"
            >
              <span className="absolute inset-0 rounded-full border border-purple/50 transition-all duration-300 group-hover:border-purple" />
              <FaInstagram className="text-xl text-purple transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium text-white">Follow the journey</span>
              <span className="text-sm text-white-200/60">@notesbyaryan</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Now Playing Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4 text-sm text-white-200/60"
        >
          <FaSpotify className="text-green-500" />
          <span>Currently vibing to</span>
          <span className="font-medium text-purple">
            Tum Ho Toh • Saiyaara
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-green-500"
          />
        </motion.div>

        {/* Performances Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-4 text-center text-xl font-light tracking-wider text-white-200/80"
          >
            <span className="text-purple">♪</span> LATEST DROPS{" "}
            <span className="text-purple">♪</span>
          </motion.h2>
          <p className="mb-12 text-center text-sm text-white-200/50">
          From My Heart to Your Soul
          </p>

          {/* Performance Cards with reusable pattern design */}
          <div className="grid gap-8 md:grid-cols-2">
            {performances.map((perf, index) => (
              <motion.a
                key={perf.id}
                href={perf.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl border border-purple/20"
              >
                {/* Background with pattern */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-purple/10 via-black-100 to-violet-600/10"
                  style={{ background: perf.pattern }}
                >
                  {/* SVG Pattern overlay */}
                  <MusicPattern className="absolute inset-0 h-full w-full opacity-50" />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/60 to-transparent" />
                  
                  {/* Animated sound wave effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <motion.div
                      animate={{
                        scaleY: [1, 1.5, 1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-end gap-1"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scaleY: [1, 1.5 + Math.random(), 1],
                          }}
                          transition={{
                            duration: 0.8 + Math.random() * 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className={`h-16 w-2 rounded-full bg-gradient-to-t ${perf.accent}`}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                    {/* Play button */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple/20 backdrop-blur-md transition-all duration-300 group-hover:bg-purple group-hover:scale-110"
                    >
                      <FaPlay className="ml-1 text-lg text-white" />
                    </motion.div>

                    {/* Hindi title */}
                    <span className="mb-2 text-sm font-medium text-purple">
                      {perf.titleHindi}
                    </span>

                    {/* Main title */}
                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-purple md:text-3xl">
                      {perf.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 text-sm text-white-200">
                      {perf.description}
                    </p>

                    {/* Vibe text */}
                    <p className="flex items-center gap-2 text-sm italic text-white-200/60">
                      <HiSparkles className="text-purple" />
                      {perf.vibe}
                    </p>

                    {/* Watch indicator */}
                    <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-sm text-purple backdrop-blur-sm transition-all duration-300 group-hover:bg-purple/20">
                      <FaInstagram />
                      <span>Watch on Instagram</span>
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border border-purple/0 transition-all duration-500 group-hover:border-purple/50 group-hover:shadow-[0_0_30px_rgba(203,172,249,0.2)]" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quote Section - Poetic escape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl border border-purple/10 bg-gradient-to-br from-purple/5 via-transparent to-violet-600/5 p-8 text-center backdrop-blur-sm md:p-12"
        >
          <FaHeadphones className="mx-auto mb-6 text-4xl text-purple/50" />
          <blockquote className="text-lg italic text-white-100 md:text-xl">
            &ldquo;In a world full of noise, music is my silence —
            <br className="hidden md:block" />
            <span className="text-purple"> a place where my soul breathes free</span>&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-white-200/50">
          — just a guy with a mic giving his soul a voice
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 border-t border-white/5 pt-10 md:flex-row md:gap-10"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-white-200/60 transition-colors hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Portfolio</span>
          </Link>

          <span className="hidden text-white/10 md:inline">•</span>

          <Link
            href="https://www.instagram.com/aryanjstar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white-200/60 transition-colors hover:text-purple"
          >
            <FaInstagram />
            <span>Personal IG: @aryanjstar</span>
          </Link>

          <span className="hidden text-white/10 md:inline">•</span>

          <span className="text-xs text-white-200/30">
          Made with 💜 and Sleepless Emotions
          </span>
        </motion.div>
      </div>
    </main>
  );
}
