import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const movieData = {
  "night-of-the-living-dead": {
    title: "Night of the Living Dead",
    videoUrl: "https://www.youtube.com/embed/pElSu_ECJGM",
    genre: "Horror",
    description: "A classic 1968 public domain horror film about a zombie outbreak.",
  },
  "sherlock-holmes": {
    title: "Sherlock Holmes",
    videoUrl: "https://www.youtube.com/embed/P4I3pCt_Y1s",
    genre: "Mystery",
    description: "Vintage detective film featuring Sherlock Holmes solving a murder.",
  },
  "his-girl-friday": {
    title: "His Girl Friday",
    videoUrl: "https://www.youtube.com/embed/I8KXh8k_tGo",
    genre: "Comedy",
    description: "A fast-talking comedy classic from 1940 involving journalism and romance.",
  },
  "the-kid": {
    title: "The Kid",
    videoUrl: "https://www.youtube.com/embed/tUqL5oARsfg",
    genre: "Drama",
    description: "Charlie Chaplin’s silent masterpiece about a tramp who cares for an abandoned child.",
  },
  "plan-9": {
    title: "Plan 9 from Outer Space",
    videoUrl: "https://www.youtube.com/embed/mCqPIhN2iNQ",
    genre: "Sci-Fi",
    description: "An alien invasion sci-fi cult classic, so bad it’s good.",
  },
  "the-general": {
    title: "The General",
    videoUrl: "https://www.youtube.com/embed/f9yzsS5y8Qo",
    genre: "Action",
    description: "A Buster Keaton silent film classic with stunts and Civil War-era action.",
  },
};

export default function HomePage() {
  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen space-y-8">
      <h1 className="text-4xl font-bold mb-4">🎬 StreamFlex Movie Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(movieData).map(([slug, movie]) => (
          <div key={slug} className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-400">{movie.genre}</p>
            <p className="text-sm text-gray-500 mt-1">{movie.description}</p>
            <Link href={`/watch/${slug}`}>
              <Button className="mt-4 w-full">▶ Watch</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
