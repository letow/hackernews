import { FC } from "react";
import { useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import NewsItem from "../NewsItem/NewsItem";
import Paper from "@mui/material/Paper";
import s from "./Main.module.scss";

interface IMainProps {
  data?: NewsData;
}

const Main: FC<IMainProps> = () => {
  const news = useSelector((state: any) => state.toolkit.news);
  return (
    <div className={s.Main}>
      {news.map((item: NewsData) => (
        <Paper key={item.id} elevation={3}>
          <NewsItem data={item} />
        </Paper>
      ))}
    </div>
  );
};

export default Main;
