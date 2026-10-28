import { useState, useRef, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { SocialLinks } from "./components/SocialLinks";
import { Hero } from "./components/Hero";
import { MusicSection } from "./components/MusicSection";
import { TourSection } from "./components/TourSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<HTMLDivElement>(null);

  const sectionPaths: Record<string, string> = {
    home: '/',
    tour: '/tour',
    music: '/music',
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.history.pushState(null, '', sectionPaths[section] ?? '/');

    const refs: Record<
      string,
      React.RefObject<HTMLDivElement>
    > = {
      home: heroRef,
      music: musicRef,
      tour: tourRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 3;

      let newSection = "home";

      if (
        musicRef.current &&
        scrollPosition >= musicRef.current.offsetTop
      ) {
        newSection = "music";
      } else if (
        tourRef.current &&
        scrollPosition >= tourRef.current.offsetTop
      ) {
        newSection = "tour";
      }

      setActiveSection((prev) => {
        if (prev !== newSection) {
          window.history.replaceState(null, '', sectionPaths[newSection] ?? '/');
        }
        return newSection;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <SocialLinks />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={tourRef}>
        <TourSection />
      </div>

      <div ref={musicRef}>
        <MusicSection />
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-12 text-center">
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          © 2026 BUTTER. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}