import Paper from "@mui/material/Paper";
import { FC } from "react";
import { CommentData } from "../../Types/CommentData";
import s from "./Comment.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Types/State";
import { fetchOneItem } from "../../API/ServerAPI";
import { AppDispatch } from "../../Redux/Store";

interface ICommentProps {
  data: CommentData;
}

const decodeHTML = (text: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};

const Comment: FC<ICommentProps> = ({ data }) => {
  const status = useSelector((state: State) => state.status);
  const dispatch = useDispatch<AppDispatch>();
  console.log(data.kidsIds);
  return (
    <div
    /* onClick={
        data.kidsIds
          ? () =>
              data.kidsIds!.forEach((kid: number) =>
                dispatch(fetchOneItem(kid))
              )
          : () => ""
      } */
    >
      <Paper elevation={3} className={s.Comment}>
        <div
          className={s.info}
          style={data.kidsIds ? { backgroundColor: "cyan" } : {}}
        >
          <span>
            <strong>{data.username}</strong>
          </span>
          <span className={s.time}>{data.time}</span>
        </div>
        <div className={s.text}>{decodeHTML(data.text)}</div>
      </Paper>
    </div>
  );
};

export default Comment;
