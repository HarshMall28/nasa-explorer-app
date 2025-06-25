export interface ApodData {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string; // Optional HD image URL
  media_type: "image" | "video" | "gif" | "other";
  thumbnail_url?: string; // Sometimes available for videos
  copyright?: string; // Optional copyright information
  service_version?: string; // API version
}
