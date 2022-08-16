import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="main">
      <header className="App-header">Hello There</header>
      <body>
        <div className="top">
          <span className="topLeft">Search Engine</span>{" "}
          <span className="topRight">Top Right</span>
          <form className="searchForm">
            <input />
            <button>Search</button>
          </form>
          <form className="youtubeForm">
            <input />
            <button>Search</button>
          </form>
        </div>
        <div className="middle">
          <span className="middleLeft">Middle Left</span>{" "}
          <span className="middleRight">Middle Right</span>
        </div>

        <div className="bottom">
          <span className="bottomLeft">Bottom Left</span>{" "}
          <span className="bottomRight">Bottom Right</span>
        </div>
      </body>
    </div>
  );
}

export default App;
