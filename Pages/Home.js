import React from "react";
import Sidebar from "../src/Componenets/Sidebar";

import Chat from "../src/Componenets/Chat";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
