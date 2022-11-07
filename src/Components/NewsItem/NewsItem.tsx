import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/mainSlice";
import { NewsData } from "../../Types/NewsData";
import s from "./NewsItem.module.scss";
import Rating from "@mui/material/Rating";

interface INewsItemProps {
  data: NewsData;
}

const NewsItem: FC<INewsItemProps> = ({ ...props }: INewsItemProps) => {
  const { rating, username, date, title } = props.data;
  const dispatch = useDispatch();
  return (
    <div className={s.NewsItem} onClick={() => dispatch(increment())}>
      <div className={s.info}>
        <Rating value={rating} readOnly size="small" precision={0.1} />
        <span className={s.nickname}>Posted by {username}</span>
        <span className={s.pub_date}>{date}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default NewsItem;
