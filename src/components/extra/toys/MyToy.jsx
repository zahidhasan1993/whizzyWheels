import React, { useContext } from "react";
import { TabTitle } from "../../changeTitle";
import { useLoaderData } from "react-router-dom";
import { DataProvider } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";

const MyToy = () => {
  TabTitle("myToys | WhizzyWheels");
  const {user} = useContext(DataProvider)
  const toys = useLoaderData();
  const myToys = toys.filter(toy => toy.sellerEmail === user.email)

//   console.log(toys[1]);

  return (
    <div className="my-14">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
          <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Available_Quantity</th>
              <th>sub_category</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                myToys.map(toy => <MyToysTable key={toy._id} toy={toy}></MyToysTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
