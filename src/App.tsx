import "./App.css";
import Main from "./Components/Main/Main";
import Page from "./Components/Page/Page";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "./Types/NewsData";
import { useEffect } from "react";
import { AppDispatch } from "./Redux/Store";
import fetchNews from "./API/ServerAPI";

function App() {
  const news = useSelector((state: any) => state.toolkit.news);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />

          {news.map((item: NewsData) => {
            return (
              <Route
                key={item.id}
                path={`/page/${item.id}`}
                component={(props: any) => <Page {...props} data={item} />}
              />
            );
          })}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
