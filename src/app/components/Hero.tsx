import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          muted
          className="banner__video posAbs ofCover w100 h100"
          src="https://main.buttermusic.dk/v9_1.mp4"
          playsInline
          autoPlay
          loop
        ></video>
        {/* Grain overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Logo - Mobile Center, Desktop Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        className="absolute md:top-8 md:left-8 top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 z-20"
      >
        <h1 className="text-[15vw] md:text-8xl font-black tracking-tighter text-white relative">
          <span className="relative inline-block">
            <img
              src="https://main.buttermusic.dk/final%20logo%20white.png"
              alt="BUTTER"
              className="h-[10vw] md:h-24 w-auto object-contain"
            />
            <motion.div
              className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-purple-400 to-blue-500"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </h1>
      </motion.div>

      {/* Tagline - Only visible on mobile below logo, desktop in center */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-32 md:bottom-auto md:top-1/2 left-0 right-0 z-20 text-center px-6"
      ></motion.div>

      {/* Featured Release Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-md"
      >
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-black/50 transition-all duration-500 group">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded flex-shrink-0 overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500">
              <img
                src="https://artworks.buttermusic.dk/LoseMyMindArtwork.jpg"
                alt="Lose My Mind cover art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Latest Release
              </p>
              <h3 className="text-white truncate">Lose My Mind</h3>
              <p className="text-xs text-gray-500 mt-1">
                Out Now
              </p>
            </div>
          </div>
        </div>

        {/* Collaborator chip */}
        <div className="flex justify-center mt-3"></div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      ></motion.div>
    </section>
  );
}