import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import s from "./Page.module.scss";
import Button from "@mui/material/Button";
import fetchNews from "../../API/ServerAPI";
import { AppDispatch } from "../../Redux/Store";

interface IPageProps {
  history?: any;
  data: NewsData;
}

const Page: FC<IPageProps> = (props) => {
  const news = useSelector((state: any) => state.toolkit.news);
  const dispatch = useDispatch<AppDispatch>();
  const { history, data } = props;
  return (
    <div className={s.Page}>
      <Button
        className={s.back}
        variant="outlined"
        size="small"
        onClick={history.goBack}
      >
        &#60; Back
      </Button>
      <a href="#" className={s.link}>
        https://hacker-news.firebaseio.com/v0/
      </a>
      <h2 className={s.title}>{data.title}</h2>
      <div className={s.info}>
        <span className={s.nickname}>Posted by {data.username}</span>
        <span className={s.pub_date}>{data.date}</span>
      </div>
      <hr />
    </div>
  );
};

export default Page;
