import { CommentData } from "./CommentData";
import { FullDateTime } from "./FullDateTime";

export type NewsData = {
  id: number;
  rating: number;
  username: string;
  date: FullDateTime;
  title: string;
  kidsIds?: number[];
  kids: CommentData[];
  descendants: number;
  url: string;
};
