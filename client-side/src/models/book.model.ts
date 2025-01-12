export interface IBook {
  _id: string;
  book_name: string;
  author_name: string;
  pdf_file: string;
  cover_image: string;
}

export interface IAddBook {
  _id: string;
  book_name: string;
  author_name: string;
  pdf_file: string;
  cover_image: string;
}

export interface IBookResponse {
  message: string;
  data: IBook[];
  success: boolean;
}
