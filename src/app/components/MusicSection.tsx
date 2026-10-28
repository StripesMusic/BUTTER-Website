import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ReleaseDialog, type Release } from "./ReleaseDialog";
import { EPCard } from "./EPCard";
import { EPDialog } from "./EPDialog";

export const PLATFORM_ICONS: Record<string, string> = {
  Spotify: "https://main.buttermusic.dk/Spotify.png",
  "Apple Music": "https://main.buttermusic.dk/AppleMusic.png",
  SoundCloud: "https://main.buttermusic.dk/SoundCloud.png",
  "YouTube Music":
    "https://main.buttermusic.dk/YouTubeMusic.png",
};

const releases: Release[] = [
  {
    id: 35,
    title: "Lose My Mind",
    year: "2026",
    coverImage:
      "https://artworks.buttermusic.dk/LoseMyMindArtwork.jpg",
    label: "Future House Music",
    genre: "Bass House/Future House",
    bpm: 130,
    key: "D# maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/4WJT5aBVraOmRxHr0dKbVI",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/lose-my-mind-single/6798644971",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/futurehousemusic/butter-lose-my-mind",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=IZf8YrLUnKc",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 34,
    title: "Changed The Way You Kiss Me (BUTTER, W3TT3R Remix)",
    year: "2026",
    coverImage:
      "https://artworks.buttermusic.dk/ChangedTheWayYouKissedMeRemixArtwork.jpg",
    label: "Unofficial Remix",
    genre: "Bass House/Future House",
    bpm: 130,
    key: "E minor",
    collaborators: [
      {
        name: "W3TT3R",
        pfp: "https://collaborators.buttermusic.dk/W3TT3R.jpg",
        spotify:
          "https://open.spotify.com/artist/3NQL8GCVvddd9FDyvGdvm0",
      },
      // Add more collaborators here: { name: "...", pfp: "...", spotify: "..." }
    ],
    streams: [
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/calvin-harris-outside-ft-ellie",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
    ],
  },
  {
    id: 33,
    title: "Outside (BUTTER Remix)",
    year: "2026",
    coverImage:
      "https://artworks.buttermusic.dk/OutsideRemixArtwork.jpg",
    label: "Unofficial Remix",
    genre: "Bass House",
    bpm: 132,
    key: "D minor",
    streams: [
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/calvin-harris-outside-ft-ellie",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
    ],
  },
  {
    id: 32,
    title: "Silence",
    year: "2026",
    coverImage:
      "https://artworks.buttermusic.dk/SilenceArtwork.jpg",
    label: "STMPD RCRDS",
    genre: "Bass House/Future House",
    bpm: 126,
    key: "D min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/4ji17rMLAU854Plh8Hx5D9",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/silence/1888445855?i=1888445857",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/butter-silence-radio-edit",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=I5i-ffyin4E",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 31,
    title: "Where I'm Found",
    year: "2026",
    coverImage:
      "https://artworks.buttermusic.dk/WhereImFoundArtwork.jpg",
    label: "DIMENSION BASS",
    genre: "Future Rave",
    bpm: 130,
    key: "G maj",
    collaborators: [
      {
        name: "Eloi Fajardo",
        pfp: "https://collaborators.buttermusic.dk/EloiFajardo.jpg",
        spotify:
          "https://open.spotify.com/artist/1GohZMFtDGI1XkhbyYb43c",
      },
      // Add more collaborators here: { name: "...", pfp: "...", spotify: "..." }
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/4Io0i5n111seBxUehYq3EQ",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/where-im-found/1875726580?i=1875726581",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
    ],
  },
  {
    id: 30,
    title: "Down & Dirty",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/DownAndDirtyArtwork.jpg",
    label: "Barong Family",
    genre: "Tech House",
    bpm: 130,
    key: "A# min",
    collaborators: [
      {
        name: "Lefris",
        pfp: "https://collaborators.buttermusic.dk/Lefris.jpg",
        spotify:
          "https://open.spotify.com/artist/3NxCFrrWRg6MVVNiPgPylF",
      },
      {
        name: "LexBlaze",
        pfp: "https://collaborators.buttermusic.dk/LexBlaze.jpg",
        spotify:
          "https://open.spotify.com/artist/6qfJBqhy4o6zpyuONoegri",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5Zk1XK2RQAW3JkMgVOIRWA",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/down-dirty-feat-lexblaze/1854430751?i=1854430755",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/lefris-sc/down-dirty-feat-lex-blaze",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=dMBnrnYSrQo",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 29,
    title: "Escape",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/EscapeArtwork.jpg",
    label: "Ensis Records",
    genre: "Bass House/Future House",
    bpm: 128,
    key: "G# min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5TTLZr9Z69fcP506gNlKcV",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/escape/1847952562?i=1847952567",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/ensismusicro/butter-escape-original-mix",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=7imHRug8Z8c",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 28,
    title: "Take Me Back",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/TakeMeBackArtwork.jpg",
    label: "Bass House Music",
    genre: "Bass House",
    bpm: 126,
    key: "B min",
    collaborators: [
      {
        name: "Amél",
        pfp: "https://collaborators.buttermusic.dk/Amel.jpg",
        spotify:
          "https://open.spotify.com/artist/6OHd6Z5k9ZmBJ91oqeSpDG",
      },
      {
        name: "Qaden James",
        pfp: "https://collaborators.buttermusic.dk/QadenJames.jpg",
        spotify:
          "https://open.spotify.com/artist/5dQFdCUQI9rxm6F78jWy5v",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/0FhPvLFeS5JFriirwgnfLe",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/take-me-back-single/1837417162",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/basshouse-music/butter-amel-qaden-james-take-me-back",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=SmZhKKfpY4g",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 27,
    title: "Boomerang",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/BoomerangArtwork.jpg",
    label: "Bass House Music",
    genre: "Bass House",
    bpm: 126,
    key: "F min",
    collaborators: [
      {
        name: "Admess",
        pfp: "https://collaborators.buttermusic.dk/Admess.jpg",
        spotify:
          "https://open.spotify.com/artist/3IsBIPeTi4vJggXuPoEKpb",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/3f8XEj5OPkpstRt4MpA3Kj",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/boomerang-single/1832218455",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/basshouse-music/butter-admess-boomerang",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=L9SLezcuzwg",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 26,
    title: "Can't Help",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/CantHelpArtwork.jpg",
    label: "Ensis Records",
    genre: "Future House",
    bpm: 128,
    key: "B min",
    collaborators: [
      {
        name: "Niiko Skies",
        pfp: "https://collaborators.buttermusic.dk/NiikoSkies.jpg",
        spotify:
          "https://open.spotify.com/artist/7DqD92l8Ga4QBPo5nFHAjP",
      },
      {
        name: "Simon Wiart",
        pfp: "https://collaborators.buttermusic.dk/SimonWiart.jpg",
        spotify:
          "https://open.spotify.com/artist/4w64FIWuxIGKlIEwpM3gov",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/7yvbDMq95p2QBVybOwHcwI",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/cant-help/1798481482?i=1798481483",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/ensismusicro/butter-niiko-skies-simon-1",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=Uu-qc3p-oZU",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 25,
    title: "Back To The",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/BackToTheArtwork.jpg",
    label: "Fly Over Records",
    genre: "Future House",
    bpm: 126,
    key: "B min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/52mv4o1LTlE5WKK3TMWaEq",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/back-to-the/1798768018?i=1798768020",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/butter51646/back-to-the",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=zi1ezsdE1qM",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 24,
    title: "Ghost Of You",
    year: "2025",
    coverImage:
      "https://artworks.buttermusic.dk/GhostOfYouArtwork.jpg",
    label: "Ensis Records",
    genre: "Future House",
    bpm: 128,
    key: "B min",
    collaborators: [
      {
        name: "Andrew A",
        pfp: "https://collaborators.buttermusic.dk/AndrewA.jpg",
        spotify:
          "https://open.spotify.com/artist/01BNEFdzawMyAXoHVdtyPx",
      },
      {
        name: "beno",
        pfp: "https://collaborators.buttermusic.dk/Beno.jpg",
        spotify:
          "https://open.spotify.com/artist/77KJdHxfLGGNmoGy0NZvlm",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/7LEgfuDZDT7F009SwE1DnT",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/ghost-of-you/1850728716?i=1850728717",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/ensismusicro/butter-andrew-a-feat-beno",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=1JV_nrO2jnw",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 23,
    title: "Obla",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/OblaArtwork.jpg",
    label: "Ensis Records",
    genre: "Bass House",
    bpm: 128,
    key: "D# maj",
    collaborators: [
      {
        name: "Daront",
        pfp: "https://collaborators.buttermusic.dk/Daront.jpg",
        spotify:
          "https://open.spotify.com/artist/3uX0RkLF4KplScNrzgPacW",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/1nQvHINLtq75LIPgJkGugo",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/obla/1780848322?i=1780848325",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/ensismusicro/butter-daront-obla",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=yFiD7DATls4",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 22,
    title: "Woush",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/WoushArtwork.jpg",
    label: "SKINK Records",
    genre: "Bass House",
    bpm: 128,
    key: "F maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2A9IqDEc0o8gtDS6X9AZX7",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/woush/1770972669?i=1770972670",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=7HZQBWVtE0Q",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 21,
    title: "MISS U",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/MISSUArtwork.jpg",
    label: "2Dutch Records",
    genre: "Bass House",
    bpm: 126,
    key: "F# maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/6na0qP2ojDB2zpdPe9yVV6",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/miss-u/1766740900?i=1766740901",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/2-dutch/butter-miss-u",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=t0vCtQijDUI",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 20,
    title: "Nights",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/NightsArtwork.jpg",
    label: "Darklight Recordings",
    genre: "Tech House",
    bpm: 126,
    key: "F# min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2EZkFNOkpRieFG44X0zYIB",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/nights-single/1764280744",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/darklightrec/nights",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=0xIA9xumhOA",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 19,
    title: "Moon",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/MoonArtwork.jpg",
    label: "Fantastic",
    genre: "Chill House",
    bpm: 106,
    key: "C# maj",
    collaborators: [
      {
        name: "Jack Dawson",
        pfp: "https://collaborators.buttermusic.dk/JackDawson.jpg",
        spotify:
          "https://open.spotify.com/artist/3uX0RkLF4KplScNrzgPacW",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/3sGfZ6AjLfSl3mdjkg3lon",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/song/moon-feat-jack-dawson/1747923506",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/itsfantastic/butter-ft-jack-dawson-moon",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=ePjaFJVfe6o",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 18,
    title: "Shake It",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/ShakeItArtwork.jpg",
    label: "Spinnin' Talent Pool",
    genre: "Bass House",
    bpm: 125,
    key: "D min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5N0p6vaK1JC1C6T6raVb8w",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/shake-it/1738508744?i=1738509383",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/shake-it",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=cKb7VUwrrRY",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 17,
    title: "Taka Taka",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/TakaTakaArtwork.jpg",
    label: "Darklight Recordings",
    genre: "Bass House",
    bpm: 125,
    key: "A maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/0NVYKISyo8GbUJ6ArFyKCy",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/taka-taka/1741344143?i=1741344144",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/darklightrec/butter-taka-taka",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=HzvOdgx1vY0",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 16,
    title: "Gonna Get Back",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/GonnaGetBackArtwork.jpg",
    label: "Ensis Records",
    genre: "Bass House",
    bpm: 126,
    key: "F# maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/62aIjxgjsYc4sYBiXzdTTC",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/gonna-get-back/1850729220?i=1850729221",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/ensismusicro/butter-gonna-get-back-original-mix",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=5GRrvT0kgHc",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 15,
    title: "Leaving",
    year: "2024",
    coverImage:
      "https://artworks.buttermusic.dk/LeavingArtwork.jpg",
    label: "SKINK Records",
    genre: "Bass House",
    bpm: 125,
    key: "F maj",
    collaborators: [
      {
        name: "Single Spark",
        pfp: "https://collaborators.buttermusic.dk/SingleSpark.jpg",
        spotify:
          "https://open.spotify.com/artist/2CHQJ8gVz5R8GPjcV1V7P9",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/1jMYyomHmE32xaSifYDego",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/leaving/1728880010?i=1728880011",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/skinkofficial/butter-single-spark-leaving",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=3W6wWOWi6j0",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 14,
    title: "Going Up",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/GoingUpArtwork.jpg",
    label: "2Dutch Records",
    genre: "Bass House",
    bpm: 126,
    key: "D maj",
    collaborators: [
      {
        name: "Daniel Best",
        pfp: "https://collaborators.buttermusic.dk/DanielBest.jpg",
        spotify:
          "https://open.spotify.com/artist/21X9VaLa5Ag1smk5QohqiO",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/0u1iigR4tFHXrNEnJEofp4",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/going-up/1713931898?i=1713931900",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/2-dutch/butter-daniel-best-going-up",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=UEfsD7qJcEw",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 13,
    title: "You Bring The Love",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/YouBringTheLoveArtwork.jpg",
    label: "SKINK Records",
    genre: "Bass House",
    bpm: 128,
    key: "A# min",
    collaborators: [
      {
        name: "ENDRATE",
        pfp: "https://collaborators.buttermusic.dk/ENDRATE.jpg",
        spotify:
          "https://open.spotify.com/artist/2lWiGZiesfzg7aeQMAVtQq",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2TSCgqOnwfLgPaKhxzVvc2",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/you-bring-the-love/1712113350?i=1712113351",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/skinkofficial/butter-endrate-you-bring-the-love",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=qbApNRNOvqg",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 12,
    title: "Here With You",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/HereWithYouArtwork.jpg",
    label: "Soncora Music",
    genre: "Bass House",
    bpm: 126,
    key: "C# min",
    collaborators: [
      {
        name: "VAMERO",
        pfp: "https://collaborators.buttermusic.dk/VAMERO.jpg",
        spotify:
          "https://open.spotify.com/artist/74GrV01oFcjJdLHCF9MWhr",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/3ofM6vMSZ9FWC0bUv6VzYg",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/here-with-you-single/1698349658",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=4NbpIsEvsKA",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 11,
    title: "Bella Ciao",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/BellaCiaoArtwork.jpg",
    label: "One Seven Music",
    genre: "Future House",
    bpm: 126,
    key: "D min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2OA2M9306nbRfDzfQv32vp",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/bella-ciao/1693343590?i=1693343594",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/butter51646/bella-ciao",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=6peIFAqS74o",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 10,
    title: "No Superstar",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/NoSuperstarArtwork.jpg",
    label: "One Seven Music",
    genre: "Bass House",
    bpm: 124,
    key: "B min",
    collaborators: [
      {
        name: "Boxter",
        pfp: "https://collaborators.buttermusic.dk/Boxter.jpg",
        spotify:
          "https://open.spotify.com/artist/65sT6Xz3nzLp3FXLjlLMoW",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/0wnMqxdG3qdOmmgLwTgFdC",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/hu/song/no-superstar-feat-boxter/1687353074",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/butter51646/no-superstar-feat-boxter",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=FnQc251HE_E",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 9,
    title: "Best Shot",
    year: "2023",
    coverImage:
      "https://artworks.buttermusic.dk/BestShotArtwork.jpg",
    label: "One Seven Music",
    genre: "Bass House",
    bpm: 126,
    key: "C# min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/0bNsRYvrZokG8s7rfK3LS4",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/hu/album/best-shot/1669260557?i=1669260577",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/butter51646/best-shot",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=NTYI5XD3ssk",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 8,
    title: "Blow It Up",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/BlowItUpArtwork.jpg",
    label: "SKINK Records",
    genre: "Bass House",
    bpm: 126,
    key: "F min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5SeoPOzpb5XKIlId8QBJo9",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/blow-it-up/1730324846?i=1730324847",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/skinkofficial/sk218-butter-blow-it-up",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=uyI3fRoxaBI",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 7,
    isEP: true,
    title: "This Is BUTTER",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/ThisIsBUTTERArtwork.jpg",
    label: "Ensis Records",
    genre: "Bass House",
    bpm: 127,
    key: "D min",
    tracks: [
      {
        trackNumber: 1,
        title: "This Is BUTTER",
        bpm: 126,
        key: "D min",
      },
      {
        trackNumber: 2,
        title: "Mansion",
        featuring: "Michael Shynes",
        bpm: 128,
        key: "E min",
      },
      {
        trackNumber: 3,
        title: "Crew",
        bpm: 128,
        key: "D# min",
      },
      {
        trackNumber: 4,
        title: "City Of Lights",
        bpm: 128,
        key: "C# min",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/1dbxBjOsditMdZRKS1cC2R",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/this-is-butter-ep/1850721955",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "replace",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nh43HAinO-903J3NUwgYbrqYiziMGLwaE",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 6,
    title: "Pieces",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/PiecesArtwork.jpg",
    label: "LoudKult",
    genre: "Slap House",
    bpm: 124,
    key: "F maj",
    collaborators: [
      {
        name: "NAJA",
        pfp: "https://collaborators.buttermusic.dk/NAJA.jpg",
        spotify:
          "https://open.spotify.com/artist/5upYH7rY7XhDuDIzzGuaIE",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5MrwrravPI5I8RI12AosT1",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/pieces-feat-naja/1625775640?i=1625775664",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/butter-piece-outro-final",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=KxHZeSy_pN4",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 5,
    title: "Castles In The Sky",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/CastlesInTheSkyArtwork.jpg",
    label: "Magic Records",
    genre: "Slap House",
    bpm: 122,
    key: "A maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/4VBJA8l4pu5qW8NUeb7QsR",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/castles-in-the-sky-single/1747073116",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/butter-castles-in-the-sky-master",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=dwU27H6Md-Q",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 4,
    title: "Pillow",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/PillowArtwork.jpg",
    label: "Ensis Records",
    genre: "Slap House",
    bpm: 126,
    key: "C maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/4OqDGhoO0HsNFVyjFi4oqO",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/pillow-single/1850721192",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/butter-pillow-radio-new",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=QFYPS0c3cU8",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 3,
    title: "With You",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/WithYouArtwork.jpg",
    label: "Ensis Records",
    genre: "Slap House",
    bpm: 122,
    key: "C# maj",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/23NLR2Wbyc41ow0PTfXmvT",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/ca/album/with-you-single/1850724262",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/buttermusicdk/butter-with-you",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=oV6U53LWcn8",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 2,
    title: "In The Air Tonight",
    year: "2022",
    coverImage:
      "https://artworks.buttermusic.dk/InTheAirTonightArtwork.jpg",
    label: "Future House Cloud",
    genre: "Future House",
    bpm: 126,
    key: "D min",
    collaborators: [
      {
        name: "Simon Kynde",
        pfp: "https://collaborators.buttermusic.dk/SimonKynde.jpg",
        spotify:
          "https://open.spotify.com/artist/6eyLjQu3WVc3NAA2DV7jg4",
      },
    ],
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2jbzKlv0X8olObtDRty6Zr",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/de/album/in-the-air-tonight/1606221206?i=1606221207&at=1001lbRT&ct=1155401",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/future-house-cloud/simon-kynde-butter-in-the-air-tonight",
        icon: PLATFORM_ICONS["SoundCloud"],
        bg: "#ff5500",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=0wRHNDFLfNo",
        icon: PLATFORM_ICONS["YouTube Music"],
        bg: "#ff0000",
      },
    ],
  },
  {
    id: 1,
    title: "Ghost",
    year: "2021",
    coverImage:
      "https://artworks.buttermusic.dk/GhostArtwork.jpg",
    label: "SLAP HOUSE MAFIA",
    genre: "Slap House",
    bpm: 128,
    key: "G min",
    streams: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/5OgGtrXr2tyAYw5oRH0Pmr",
        icon: PLATFORM_ICONS["Spotify"],
        bg: "#1DB954",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/album/ghost-single/1600592346",
        icon: PLATFORM_ICONS["Apple Music"],
        bg: "#fc3c44",
      },
    ],
  },
];

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