// src/components/Hero.tsx
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

// Load Josefin Sans (weights 400 & 700)
const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

export function Hero() {
  return (
    <section
      className="
        relative h-screen w-full flex flex-col items-center justify-center
        text-center bg-center bg-cover
        px-[20px] py-[60px]
        fade-slide fade-delay-4
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(18,18,18,0.7), rgba(18,18,18,0.95)), url('/assets/images/saudade-hero-bg.JPG')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Title in Josefin Sans */}
      <h1
        className={`
          ${josefin.className}
          fade-slide fade-delay-4
          font-[700] text-[6.5rem] text-white
          mb-[15px] tracking-[3px]
          drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]
        `}
      >
        SAUDADE
      </h1>

      {/* Tagline in Josefin Sans */}
      <p
        className={`
          ${josefin.className}
          fade-slide fade-delay-5
          font-[400] text-[1.5rem] text-[#d0d0d0]
          mb-[40px] tracking-[1px]
          drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
          min-h-[1.5em]
        `}
      >
        Feel the Rhythm, Share the Vibe
      </p>

      {/* CTA in system UI */}
      <Link
        href="/events#upcoming"
        className="
          fade-slide fade-delay-6
          inline-block bg-transparent text-[#b8860b]
          border-[2px] border-[#b8860b]
          px-[35px] py-[14px] mt-[20px]
          rounded-[30px] font-[700] text-[1.1rem]
          no-underline
          transition-all duration-300 ease
          hover:bg-[#b8860b] hover:text-[#121212]
          hover:-translate-y-[3px]
          hover:shadow-[0_5px_15px_rgba(184,134,11,0.3)]
        "
      >
        View Upcoming Events
      </Link>

      {/* Animated scroll indicator */}
      <div className="scroll-indicator fade-slide fade-delay-7">↓</div>
    </section>
  );
}
