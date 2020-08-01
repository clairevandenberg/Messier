import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersAccount from "./pages/UsersAccount";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import MoodTracker from "./pages/MoodTracker"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        
          <Route exact path="/" component={Login} />
          <Route exact path="/api/journal" component={Journal} />
          <Route exact path="/api/moodTracker" component={MoodTracker} />
          <Route exact path="/api/usersAccount" component={UsersAccount} />
          <Route exact path="/api/signUp" component={SignUp} />

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
