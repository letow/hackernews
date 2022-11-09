import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import NewsItem from "../NewsItem/NewsItem";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import s from "./Main.module.scss";
import { Link } from "react-router-dom";
import { fetchOneItem } from "../../API/ServerAPI";
import { AppDispatch } from "../../Redux/Store";

interface IMainProps {
  data?: NewsData;
}

const Main: FC<IMainProps> = () => {
  const news: NewsData[] = useSelector((state: any) => state.toolkit.news);
  const lastNews = useSelector((state: any) => state.toolkit.lastNewsIDs);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={s.Main}>
      <Button
        onClick={() =>
          lastNews.forEach((item: number) => dispatch(fetchOneItem(item)))
        }
      >
        Hello there reload
      </Button>
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
