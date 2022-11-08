import { NewsData } from "./NewsData";

export type State = {
  status: string;
  news: NewsData[];
  lastNewsIDs: number[];
};
