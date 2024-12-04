export interface IPortfolio {
  _id: string;
  title: string;
  subtitle: string;
  feature_image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPortfolioResponse {
  message: string;
  data: IPortfolio[];
  success: boolean;
}
