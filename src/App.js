import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./myComponents/layout/MainNavigation";
import Layout from "./myComponents/layout/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/NewMeetup">
            <NewMeetup />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
