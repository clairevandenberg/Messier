import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersAccount from "./pages/UsersAccount";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import MoodTracker from "./pages/MoodTracker"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/moodTracker" component={MoodTracker} />
          <Route exact path="/usersaccount" component={UsersAccount} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
