import React, { useState } from "react";
import { TabTitle } from "../../changeTitle";
import { useLoaderData } from "react-router-dom";
import AlltoysTable from "./AlltoysTable";

const AllToys = () => {
  TabTitle("AllToys | WhizzyWheels");

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState(false);

  const toys = useLoaderData();

  const tableToys = toys.slice(0, 20);
  //   console.log(toys);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    filterData(searchText);
    setSearch(true);
  };
  const filterData = (searchText) => {
    const filteredData = toys.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="overflow-x-auto w-full mt-20">
      <div className="text-center my-14">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by name"
          className="h-10 p-2"
        />
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {search
            ? filteredData.map((toy) => (
                <AlltoysTable key={toy._id} toy={toy}></AlltoysTable>
              ))
            : tableToys.map((toy) => (
                <AlltoysTable key={toy._id} toy={toy}></AlltoysTable>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
