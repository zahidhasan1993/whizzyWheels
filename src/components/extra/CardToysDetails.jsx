import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TabTitle } from "../changeTitle";

const CardToysDetails = () => {
  TabTitle("ToyDetails | WhizztWheels");
  const data = useLoaderData();

  const {
    available_quantity,
    details,
    name,
    picture,
    price,
    rating,
    sellerEmail,
    sellerName,
    sub_category,
    _id,
  } = data;

  return (
    <div className="card md:card-side bg-base-100 shadow my-32">
      <figure className="md:w-1/2">
        <img src={picture} alt="CarToy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-amber-700">{name}</h2>

        <p>{details}</p>
        <p>
          Seller Name: <span className="text-amber-700">{sellerName}</span>
        </p>
        <p>
          Seller Email: <span className="text-amber-700">{sellerEmail}</span>
        </p>
        <p>
          Price: <span className="text-amber-700">${price}</span>
        </p>
        <p>
          Available Quantity: <span className="text-amber-700">{available_quantity}</span>
        </p>
        <p>
          Category: <span className="text-amber-700">{sub_category}</span>
        </p>
        <p>
          Ratings: <span className="text-amber-700">{rating}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to='/'>
          <button className="btn btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">
            Back to home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardToysDetails;
