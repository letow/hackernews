import { FC } from "react";
import { NewsData } from "../../Types/NewsData";
import s from "./NewsItem.module.scss";

interface INewsItemProps {
  data: NewsData;
}

const NewsItem: FC<INewsItemProps> = ({ ...props }: INewsItemProps) => {
  const { rating, username, date, title, kidsIds } = props.data;

  return (
    <div className={`${s.NewsItem} ${kidsIds ? s.counter : ""}`}>
      <div className={s.info}>
        <span className={s.rating}>&#9733; {rating}</span>
        <span className={s.nickname}>Posted by {username}</span>
        <span className={s.pub_date}>{date}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default NewsItem;
