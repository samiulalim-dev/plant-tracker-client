import React from "react";
import Banner from "../../Components/Banner/Banner";
import NewPlants from "../../Components/NewPlants/NewPlants";
import QuickTips from "../../Components/QuickTips/QuickTips";
import PopularPlant from "../../Components/PopularPlant/PopularPlant";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <section className=" w-11/12 mx-auto">
        <div>
          <NewPlants></NewPlants>
        </div>
        <div>
          <QuickTips></QuickTips>
        </div>
        <div>
          <PopularPlant></PopularPlant>
        </div>
      </section>
    </div>
  );
};

export default Home;
