import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import NewsItem from "../NewsItem/NewsItem";

interface IMainProps {
  data?: NewsData;
}

const Main: FC<IMainProps> = () => {
  const news = useSelector((state: any) => state.toolkit.news);
  return (
    <div>
      {news.map((item: NewsData) => (
        <NewsItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Main;
