import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
