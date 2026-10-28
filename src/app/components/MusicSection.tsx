import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ReleaseDialog, type Release } from "./ReleaseDialog";
import { EPCard } from "./EPCard";
import { EPDialog } from "./EPDialog";
import music from "../../content/music.json";

export const PLATFORM_ICONS: Record<string, string> = {
  Spotify: "https://main.buttermusic.dk/Spotify.png",
  "Apple Music": "https://main.buttermusic.dk/AppleMusic.png",
  SoundCloud: "https://main.buttermusic.dk/SoundCloud.png",
  "YouTube Music":
    "https://main.buttermusic.dk/YouTubeMusic.png",
};

const PLATFORM_COLORS: Record<string, string> = {
  Spotify: "#1DB954",
  "Apple Music": "#fc3c44",
  SoundCloud: "#ff5500",
  "YouTube Music": "#ff0000",
};

// Releases are edited in Pages CMS (src/content/music.json). Stream links
// that are still empty or placeholders are left out.
const releases: Release[] = music.releases.map((release, index) => ({
  ...release,
  id: index,
  streams: release.streams
    .filter((stream) => stream.url.startsWith("http"))
    .map((stream) => ({
      name: stream.platform,
      url: stream.url,
      icon: PLATFORM_ICONS[stream.platform],
      bg: PLATFORM_COLORS[stream.platform],
    })),
}));

const FALLBACK_PFP =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23333'/%3E%3Ccircle cx='12' cy='9' r='3.5' fill='%23666'/%3E%3Cellipse cx='12' cy='19' rx='6' ry='4' fill='%23666'/%3E%3C/svg%3E";

export function MusicSection() {
  const [selected, setSelected] = useState<Release | null>(
    null,
  );

  const selectedEP = selected?.isEP ? selected : null;
  const selectedSingle =
    selected && !selected.isEP ? selected : null;

  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12 relative">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Music
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) =>
            release.isEP ? (
              <EPCard
                key={release.id}
                release={release}
                index={index}
                onClick={() => setSelected(release)}
              />
            ) : (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelected(release)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  {/* Cover Art */}
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center"
                    >
                      <Play
                        className="text-white ml-1"
                        size={24}
                      />
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  {release.coverGradient && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${release.coverGradient} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}
                    />
                  )}
                </div>

                <h3 className="text-white text-lg mb-1 group-hover:text-purple-400 transition-colors duration-300">
                  {release.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {release.year}
                </p>

                {/* Collaborator chips */}
                {release.collaborators &&
                  release.collaborators.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {release.collaborators.map((collab) => (
                        <a
                          key={collab.name}
                          href={collab.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-3 py-1 hover:border-white/25 hover:bg-white/10 transition-all duration-300 group/collab"
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/20 flex-shrink-0 bg-white/10">
                            <img
                              src={collab.pfp}
                              alt={collab.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (
                                  e.currentTarget as HTMLImageElement
                                ).src = FALLBACK_PFP;
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                            w/
                          </span>
                          <span className="text-xs text-gray-300 group-hover/collab:text-white transition-colors duration-200">
                            {collab.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
              </motion.div>
            ),
          )}
        </div>

        {/* Embedded Player Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        ></motion.div>
      </div>

      {/* Single Release Dialog */}
      <ReleaseDialog
        release={selectedSingle}
        onClose={() => setSelected(null)}
      />

      {/* EP Dialog */}
      <EPDialog
        release={selectedEP}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}