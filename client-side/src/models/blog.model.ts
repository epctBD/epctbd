export interface IBlog {
  title: string;
  content: string;
  author: string;
  tag: string;
  thumbnail: string;
  slug: string;
  createdAt: string;
}

export interface IBlogResponse {
  message: string;
  data: IBlog[];
  success: boolean;
}

export interface IAddBlog {
  title: string;
  content: string;
  author: string;
  tag: string;
  thumbnail: string;
}
