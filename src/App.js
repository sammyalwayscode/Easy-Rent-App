import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroBody/Hero";
import SignUp from "./components/SignUp/SignUp";
import Form from "./components/DashBoard/View/Form";
import MaterialDash from "./components/DashBoard/MaterialDash";
import CardRoute from "./components/CardRoute/CardRoute";
import { GlobalProvider } from "./components/AuthState/GlobalContext";
import TheBoard from "./components/TheBoard/TheBoard";
import BoardHome from "./components/BaordHome/BoardHome";
import BoardAgents from "./components/BoardAgents/BoardAgents";
import DashBoardHome from "./components/BaordHome/DashBoardHome";
import DashBoardAgents from "./components/BoardAgents/DashBoardAgents";
import DashBoardFlat from "./components/BoardFlat/DashBoardFlat";
import DashBoardOneRoom from "./components/BoardOneRoom/DashBoardOneRoom";
import DashBoardStore from "./components/BoardStore/DashBoardStore";
import DashBoardUploads from "./components/BoardUploads/DashBoardUploads";
import AllRoomPost from "./components/AllRoomPost/AllRoomPost";
import AllFlatPost from "./components/AllFlatPost/AllFlatPost";
import AllStorePost from "./components/AllStorePost/AllStorePost";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/upload" component={Form} />
            <Route path="/dashboard" component={MaterialDash} />
            <Route path="/detail/:id" component={CardRoute} />
            <Route path="/thedash" component={TheBoard} />
            <Route path="/thedashhome" component={DashBoardHome} />
            <Route path="/thedashagent" component={DashBoardAgents} />
            <Route path="/thedashflatupload" component={DashBoardFlat} />
            <Route path="/thedashoneroomupload" component={DashBoardOneRoom} />
            <Route path="/thedashstoreupload" component={DashBoardStore} />
            <Route path="/thedashmyuploads" component={DashBoardUploads} />
            <Route path="/allroomuploads" component={AllRoomPost} />
            <Route path="/allflatupload" component={AllFlatPost} />
            <Route path="/allstoreuploads" component={AllStorePost} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
