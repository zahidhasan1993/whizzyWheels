import React from "react";
import { useLoaderData } from "react-router-dom";
import { TabTitle } from "../changeTitle";

const CardToysDetails = () => {
  TabTitle("ToyDetails | WhizztWheels");
    const data = useLoaderData();

    const {_id,category, details, picture, price, rating, name} = data;


  return (
    <div className="card card-side bg-base-100 shadow my-32">
      <figure className="w-1/2">
        <img
          src={picture}
          alt="CarToy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>Price: <span className="text-amber-700">{price}</span></p>
        <p>Category: <span className="text-amber-700">{category}</span></p>
        <p>Ratings: <span className="text-amber-700">{rating}</span></p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CardToysDetails;
