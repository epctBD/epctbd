export interface IPodcast {
  _id: string;
  podcast_name: string;
  podcast_url: string;
}

export interface IAddPodcast {
  _id: string;
  podcast_name: string;
  podcast_url: string;
}

export interface IPodcastResponse {
  message: string;
  data: IPodcast[];
  success: boolean;
}
