import "./App.css";
import Main from "./Components/Main/Main";
import Page from "./Components/Page/Page";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "./Redux/Store";
import { fetchNews } from "./API/ServerAPI";

function App() {
  const lastNewsIDs = useSelector((state: any) => state.toolkit.lastNewsIDs);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />

          {lastNewsIDs.map((item: number) => {
            return <Route key={item} path={`/page/${item}`} component={Page} />;
          })}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
