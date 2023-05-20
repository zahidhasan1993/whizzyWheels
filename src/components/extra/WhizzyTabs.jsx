import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabToyCard from "./TabToyCard";
import AOS from "aos";
import "aos/dist/aos.css";


const WhizzyTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  useEffect(() => {
    AOS.init(
      {
        duration: 1000, // Set the default animation duration to 1000 milliseconds
      }
    );
  }, []);

  const sportsToys = toys.filter((toy) => toy.sub_category === "Sports Car");
  const offRoadVehicle = toys.filter((toy) => toy.sub_category === "Off-Road Vehicle");
  const vintageCar = toys.filter((toy) => toy.sub_category === "Vintage Car");
  const Convertible = toys.filter((toy) => toy.sub_category === "Convertible")

  console.log(toys);
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
          <div data-aos="fade-left" className="md:grid md:grid-cols-5 md:gap-3 ">
            {sportsToys.map((sportsToy) => (
              <TabToyCard key={sportsToy._id} data={sportsToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div data-aos="fade-left" className="md:grid md:grid-cols-5 md:gap-3 ">
            {offRoadVehicle.map((offRoadToy) => (
              <TabToyCard key={offRoadToy._id} data={offRoadToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div data-aos="fade-left" className="md:grid md:grid-cols-5 md:gap-3 ">
            {vintageCar.map((vintageToy) => (
              <TabToyCard key={vintageToy._id} data={vintageToy}></TabToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div data-aos="fade-left" className="md:grid md:grid-cols-5 md:gap-3 ">
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
