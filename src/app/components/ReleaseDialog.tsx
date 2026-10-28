import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export type Release = {
  id: number;
  title: string;
  year: string;
  coverImage?: string;
  coverGradient?: string;
  label: string;
  genre: string;
  bpm: number;
  key: string;
  description?: string;
  isEP?: boolean;
  tracks?: {
    trackNumber: number;
    title: string;
    featuring?: string;
    bpm?: number;
    key?: string;
  }[];
  collaborators?: {
    name: string;
    pfp: string;
    spotify: string;
  }[];
  streams: {
    name: string;
    url: string;
    icon: string;
    bg: string;
  }[];
};

interface ReleaseDialogProps {
  release: Release | null;
  onClose: () => void;
}

export function ReleaseDialog({
  release,
  onClose,
}: ReleaseDialogProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () =>
      document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (release) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [release]);

  return (
    <AnimatePresence>
      {release && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-lg bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover + close */}
              <div className="relative">
                <div className="w-full aspect-[16/9] overflow-hidden relative">
                  {release.coverImage ? (
                    <img
                      src={release.coverImage}
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${release.coverGradient}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent" />
                </div>

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200"
                >
                  <X size={16} />
                </button>

                <div className="absolute bottom-0 left-0 p-6">
                  <p
                    className="text-xs text-purple-400 uppercase tracking-widest mb-1"
                    style={{
                      textShadow:
                        "0 0 12px rgba(168, 85, 247, 1), 0 2px 6px rgba(0,0,0,0.9)",
                    }}
                  >
                    {release.label}
                  </p>
                  <h2 className="text-white text-3xl">
                    {release.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {release.year}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 pt-2 space-y-5">
                {/* Meta pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Genre", value: release.genre },
                    {
                      label: "BPM",
                      value: String(release.bpm),
                    },
                    { label: "Key", value: release.key },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-3 py-1"
                    >
                      <span className="text-gray-500 text-xs">
                        {item.label}
                      </span>
                      <span className="text-white text-xs">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {release.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {release.description}
                  </p>
                )}

                <div className="border-t border-white/8" />

                {/* Stream buttons */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Listen on
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {release.streams.map((stream) => (
                      <a
                        key={stream.name}
                        href={stream.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
                      >
                        <img
                          src={stream.icon}
                          alt={stream.name}
                          className="w-5 h-5 object-contain flex-shrink-0"
                        />
                        <span className="text-white text-sm flex-1">
                          {stream.name}
                        </span>
                        <ExternalLink
                          size={12}
                          className="text-gray-600 group-hover:text-gray-400 transition-colors"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}