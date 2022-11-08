import { FC } from "react";
import { useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import NewsItem from "../NewsItem/NewsItem";
import Paper from "@mui/material/Paper";
import s from "./Main.module.scss";
import { Link } from "react-router-dom";

interface IMainProps {
  data?: NewsData;
}

const Main: FC<IMainProps> = () => {
  const news = useSelector((state: any) => state.toolkit.news);
  return (
    <div className={s.Main}>
      {news.map((item: NewsData) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          to={`/page/${item.id}`}
        >
          <Paper elevation={3}>
            <NewsItem data={item} />
          </Paper>
        </Link>
      ))}
    </div>
  );
};

export default Main;
