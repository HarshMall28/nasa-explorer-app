export interface ApodData {
    date: string;
    title: string;
    explanation: string;
    url: string;
    hdurl?: string;
    media_type: "image" | "video" | "gif" | "other";
    thumbnail_url?: string;
    copyright?: string;
    service_version?: string;
}
