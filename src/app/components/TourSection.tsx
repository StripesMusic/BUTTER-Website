import { motion } from "motion/react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import tour from "../../content/tour.json";

type ShowStatus = "tickets" | "sold-out" | "coming-soon";

interface Show {
  date: string;
  city: string;
  venue: string;
  country: string;
  status: ShowStatus;
  ticketUrl?: string;
}

// Shows are edited in Pages CMS (src/content/tour.json).
const shows = tour.shows as Show[];

export function TourSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900/50 to-black py-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Tour
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </motion.div>

        <div className="space-y-1">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="group"
            >
              <div className="bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-sm border-b border-white/5 transition-all duration-300 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Date */}
                  <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                    <Calendar
                      className="text-gray-500 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-400 text-sm tracking-wider">
                      {show.date}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-gray-500 flex-shrink-0 mt-1"
                        size={18}
                      />
                      <div>
                        <h3 className="text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors duration-300">
                          {show.city}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {show.venue} · {show.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Button */}
                  {show.status === "sold-out" && (
                    <div className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center cursor-default">
                      <span className="text-gray-500 text-sm tracking-wider uppercase">
                        Sold Out
                      </span>
                    </div>
                  )}
                  {show.status === "coming-soon" && (
                    <div className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center cursor-default">
                      <span className="text-gray-500 text-sm tracking-wider uppercase">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  {show.status === "tickets" && (
                    <a
                      href={show.ticketUrl}
                      className="flex-shrink-0 group/btn"
                    >
                      <div className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full transition-all duration-300 flex items-center gap-2 group-hover/btn:border-blue-400 group-hover/btn:shadow-lg group-hover/btn:shadow-blue-500/20">
                        <span className="text-white text-sm tracking-wider uppercase">
                          Tickets
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-gray-400 group-hover/btn:text-blue-400 transition-colors"
                        />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600 text-sm">
            {tour.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}