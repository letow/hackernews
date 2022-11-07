import { FullDateTime } from "./FullDateTime";

export type NewsData = {
  id: number;
  rating: number;
  username: string;
  date: FullDateTime;
  title: string;
};
