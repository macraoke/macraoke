import VideosJson from "../assets/videos.json";

export interface IVideos {
  id: string;
}

export const Videos: IVideos[] = VideosJson as IVideos[];

export const getRandomVideo = (exclude?: string): string => {
  const searchFrom = Videos.filter((v) => v.id !== exclude);
  return searchFrom[Math.floor(Math.random() * searchFrom.length)].id;
};

