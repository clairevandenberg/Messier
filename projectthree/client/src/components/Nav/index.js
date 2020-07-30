  
import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav>
      <Link className="messier navbar-brand navbar navbar-expand-lg navbar-light bg-light" href="/">
      MESSIER
      </Link>

      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="/journal">
        JOURNAL
      </Link>

      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="/moodTracker">
        MOOD
      </Link>


      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="usersAccount">
        ACCOUNT
      </Link>
      
      </nav>
    </div>
  );
}

export default Nav;