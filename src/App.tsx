import "./App.css";
import Main from "./Components/Main/Main";
import Page from "./Components/Page/Page";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "./Redux/Store";
import { fetchNews, fetchOneItem } from "./API/ServerAPI";

function App() {
  const lastNewsIDs = useSelector(
    (state: RootState) => state.toolkit.lastNewsIDs
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    lastNewsIDs.forEach((item: number) => dispatch(fetchOneItem(item)));
  }, [lastNewsIDs]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("first");
      dispatch(fetchNews());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />

          {lastNewsIDs.map((item: number) => {
            return (
              <Route key={item} path={`/page/${item}`} component={Page} exact />
            );
          })}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
