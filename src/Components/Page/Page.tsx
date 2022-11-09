import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "../../Types/NewsData";
import s from "./Page.module.scss";
import Button from "@mui/material/Button";
import { fetchOneItem } from "../../API/ServerAPI";
import { AppDispatch } from "../../Redux/Store";
import { store } from "../../Redux/Store";
import Paper from "@mui/material/Paper";
import { CommentData } from "../../Types/CommentData";
import Comment from "../Comment/Comment";
import { State } from "../../Types/State";

interface IPageProps {
  history?: any;
  id?: number;
}

const Page: FC<IPageProps> = (props) => {
  const id = Number(props.history.location.pathname.replace(/^\D+/g, ""));
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: State) => state);
  const [commData, setCommData] = useState<CommentData[] | null>(null);
  const data = store
    .getState()
    .toolkit.news.filter((obj: NewsData) => obj.id === id)[0];

  useEffect(() => {
    data.kidsIds
      ? data.kidsIds.forEach((kid: number) => dispatch(fetchOneItem(kid)))
      : "";
  }, []);

  useEffect(() => {
    setCommData(data.kids);
  }, [state]);

  return (
    <Paper elevation={3}>
      <div className={s.Page}>
        <Button
          className={s.back}
          variant="outlined"
          size="small"
          onClick={props.history.goBack}
        >
          &#60; Back
        </Button>
        Source:{" "}
        <a href={data.url} className={s.link}>
          {data.url}
        </a>
        <h2 className={s.title}>{data.title}</h2>
        <div className={s.info}>
          <span className={s.nickname}>
            Posted by <strong>{data.username}</strong>
          </span>
          <span className={s.pub_date}>{data.date}</span>
        </div>
        <hr />
        <div className={s.comments}>
          <div className={s.counter}>Comments: {data.descendants}</div>
          {commData && (
            <>
              {commData.map((comment: CommentData) =>
                comment.text ? <Comment key={comment.id} data={comment} /> : ""
              )}
            </>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default Page;
