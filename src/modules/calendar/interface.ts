export interface IStory {
   image: string;
   border?: boolean;
   status: string;
}

export enum EStoryStatus {
   free = "free",
   video = "video",
   music = "music",
}

export interface IPost {
   id: string | number;
   images: string[];
   description: string;
   date: Date[];
   tag: string[];
}
