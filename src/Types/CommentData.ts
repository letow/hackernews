export type CommentData = {
  username: string;
  id: number;
  kidsIds?: number[];
  kids?: CommentData[];
  parent: number;
  text: string;
  time: string;
};
