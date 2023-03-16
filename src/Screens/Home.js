import React, { useEffect, useState } from "react";
import "./Home.css";
import SideBar from "../Components/Molecules/Sidebar/SideBar";
import Header from "../Components/Molecules/Header/Header";
import Slider from "../Components/Molecules/Slider/Slider";
import fetchData from "../utils/helper";
import Footer from "../Components/Molecules/Footer/Footer";

const Home = () => {
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);

  console.log(" ==========> array", array);

  const loadData = async () => {
    const result1 = await fetchData(0, 30);
    const result2 = await fetchData(30, 60);
    const result3 = await fetchData(60, 90);
    setArray(result1);
    setArray2(result2);
    setArray3(result3);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="main-container">
      <div className="left-container">
        <SideBar />
      </div>

      <div className="right-container">
        <Header />
        <div className="release-lists">
          <Slider data={array} headerText={"RELEASED THIS WEEK"} />
          <Slider data={array2} headerText={"FEATURED PLAYLIST"} />
          <Slider data={array3} headerText={"BROWSE"} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
