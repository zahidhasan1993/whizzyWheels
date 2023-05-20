import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TabToyCard from "./TabToyCard";

const WhizzyTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toycategory")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  const sportsToys = toys.filter((toy) => toy.category_id === 1);
  const offRoadVehicle = toys.filter((toy) => toy.category_id === 2);
  const vintageCar = toys.filter((toy) => toy.category_id === 3);
  const Convertible = toys.filter((toy) => toy.category_id === 4)

//   console.log(sportsToys);
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold text-center text-amber-700 mt-10 mb-20  underline">
        Shop By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Off-Road Vehicle</Tab>
          <Tab>Vintage Car</Tab>
          <Tab>Convertible</Tab>
        </TabList>

        <TabPanel>
          <div className="md:flex md:gap-3 ">
            {sportsToys.map((sportsToy) => (
              <TabToyCard key={sportsToy._id} data={sportsToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="md:flex md:gap-3 ">
            {offRoadVehicle.map((offRoadToy) => (
              <TabToyCard key={offRoadToy._id} data={offRoadToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="md:flex md:gap-3 ">
            {vintageCar.map((vintageToy) => (
              <TabToyCard key={vintageToy._id} data={vintageToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="md:flex md:gap-3 ">
            {Convertible.map((convertableToy) => (
              <TabToyCard key={convertableToy._id} data={convertableToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WhizzyTabs;
