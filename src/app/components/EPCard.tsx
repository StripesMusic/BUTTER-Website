import { motion } from "motion/react";
import { Play, Music2 } from "lucide-react";
import type { Release } from "./ReleaseDialog";

interface EPCardProps {
  release: Release;
  index: number;
  onClick: () => void;
}

export function EPCard({
  release,
  index,
  onClick,
}: EPCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer col-span-1 md:col-span-2"
      onClick={onClick}
    >
      {/*
        aspect-[2/1] in a 2-column grid = same height as aspect-square in a 1-column grid.
        This makes the EP card match the height of a regular single card exactly.
      */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[2.09/1]">
        {/* Cover image — fills entire area */}
        {release.coverImage ? (
          <img
            src={release.coverImage}
            alt={release.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${release.coverGradient} transition-transform duration-500 group-hover:scale-110`}
          />
        )}

        {/* Same gradient design as regular card dialogs */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent" />

        {/* Hover overlay with play button — matches regular cards exactly */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center"
          >
            <Play className="text-white ml-1" size={24} />
          </motion.div>
        </div>

        {/* EP badge */}

        {/* Bottom content overlaid on gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-5">
          {/* Left: label + title */}
          <div className="flex-none">
            <p
              className="text-xs text-purple-400 uppercase tracking-widest mb-1"
              style={{
                textShadow:
                  "0 0 12px rgba(168, 85, 247, 0.8), 0 2px 6px rgba(0,0,0,0.9)",
              }}
            >
              {release.label}
            </p>
            <h2 className="text-white text-xl leading-tight">
              {release.title}
            </h2>
          </div>

          {/* Vertical divider */}
          <div className="w-px self-stretch bg-white/15 flex-shrink-0" />

          {/* Right: tracklist */}
          {release.tracks && release.tracks.length > 0 && (
            <div className="flex-1 space-y-1.5 min-w-0">
              {release.tracks.map((track) => (
                <div
                  key={track.trackNumber}
                  className="flex items-center gap-2.5 group/track"
                >
                  <span className="text-gray-500 text-[11px] tabular-nums w-4 text-right flex-shrink-0">
                    {String(track.trackNumber).padStart(2, "0")}
                  </span>
                  <span className="text-gray-200 text-sm truncate flex-1 group-hover/track:text-white transition-colors duration-150">
                    {track.title}
                    {track.featuring && (
                      <span className="text-gray-500 text-xs ml-1.5">
                        ft. {track.featuring}
                      </span>
                    )}
                  </span>
                  {track.bpm && null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Below image — identical to regular card pattern */}
      <h3 className="text-white text-lg mb-1 group-hover:text-purple-400 transition-colors duration-300">
        {release.title}
      </h3>
      <p className="text-gray-500 text-sm">{release.year}</p>
    </motion.div>
  );
}