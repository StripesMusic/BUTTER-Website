import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Music2 } from "lucide-react";
import { useEffect } from "react";
import type { Release } from "./ReleaseDialog";

interface EPDialogProps {
  release: Release | null;
  onClose: () => void;
}

export function EPDialog({ release, onClose }: EPDialogProps) {
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
            key="ep-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            key="ep-dialog"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto"
          >
            <div
              className="pointer-events-auto w-full max-w-xl bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/70 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header: full-width cover with gradient overlay — matches ReleaseDialog */}
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

                {/* EP badge */}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200 z-10"
                >
                  <X size={16} />
                </button>

                {/* Title block overlaid on gradient */}
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
                  <h2 className="text-white text-3xl leading-tight">
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
                      label: "Tracks",
                      value: String(
                        release.tracks?.length ?? 0,
                      ),
                    },
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

                {/* Description */}
                {release.description &&
                  release.description !== "..." && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {release.description}
                    </p>
                  )}

                {/* Tracklist */}
                {release.tracks &&
                  release.tracks.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                        Tracklist
                      </p>
                      <div className="space-y-0 border border-white/6 rounded-xl overflow-hidden">
                        {release.tracks.map((track, i) => (
                          <div
                            key={track.trackNumber}
                            className={`flex items-center gap-3 px-4 py-3 ${
                              i < release.tracks!.length - 1
                                ? "border-b border-white/5"
                                : ""
                            } hover:bg-white/[0.03] transition-colors duration-150 group/track`}
                          >
                            <span className="text-gray-600 text-xs w-5 text-right flex-shrink-0 tabular-nums">
                              {String(
                                track.trackNumber,
                              ).padStart(2, "0")}
                            </span>
                            <span className="text-gray-200 text-sm flex-1 group-hover/track:text-white transition-colors">
                              {track.title}
                              {track.featuring && (
                                <span className="text-gray-500 text-xs ml-1.5">
                                  ft. {track.featuring}
                                </span>
                              )}
                            </span>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              {track.key && (
                                <span className="text-gray-600 text-[11px] hidden sm:block">
                                  {track.key}
                                </span>
                              )}
                              {track.bpm && (
                                <span className="text-gray-600 text-[11px] hidden sm:block">
                                  {track.bpm} BPM
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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