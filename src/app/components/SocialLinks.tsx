import { motion } from "motion/react";
import {
  Instagram,
  Music2,
  Facebook,
  Mail,
} from "lucide-react";

export function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/buttermusicdk/",
    },
    {
      name: "Spotify",
      icon: Music2,
      url: "https://open.spotify.com/artist/5SOSqzQyhsHTTuxAMGPkaO",
    },
    {
      name: "SoundCloud",
      icon: Music2,
      url: "https://soundcloud.com/buttermusicdk",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/ButterMusic1",
    },
    {
      name: "Mail",
      icon: Mail,
      url: "mailto:management@buttermusic.dk",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-40 flex flex-col gap-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: -4 }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={social.name}
        >
          {social.name === "Spotify" ? (
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          ) : social.name === "SoundCloud" ? (
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.8,17.5h-1v-8.1c.3-.2.6-.4,1-.6v8.6ZM9.8,8.6v8.9h1V8M7.8,17.5h1v-8.8c-.5,0-.6,0-1,0v8.9ZM3,11.8v5.6s-1,0-1,0v-5.4M1.3,12.6c-.6.6-1,1.4-1,2.4s.4,1.8,1,2.4v-4.8ZM19.7,11.6c-.2-2.8-2.4-5.1-5.1-5.1s-2,.3-2.8.9v10.1h9.1c1.6,0,2.9-1.4,2.9-3.1s-1.3-3.1-2.9-3.1-.8,0-1.1.2c0,0-.1,0-.1,0ZM4.8,11.6c-.3,0-.5,0-1,.1v5.8h1s0-5.9,0-5.9Z" />{" "}
            </svg>
          ) : (
            <social.icon size={20} />
          )}
        </motion.a>
      ))}
    </motion.div>
  );
}