import React from "react";
import { Link } from "react-router-dom";

const TabToyCard = ({ data }) => {
  const { _id,category, details, picture, price, rating, name } = data;
  console.log(data);
  return (
    <div className="card w-full bg-base-100 shadow">
      <figure>
        <img src={picture} alt="Car Toy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Price: <span className="text-amber-700">{price}</span>
        </p>
        <p>
          Ratings: <span className="text-amber-700">{rating}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/cardtoys/${_id}`}>
            {" "}
            <button className="btn btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabToyCard;
