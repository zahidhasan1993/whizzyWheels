import React from "react";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy }) => {
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
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="toy" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{available_quantity}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <th>
        <Link to={`/updatetoy/${_id}`}>
          <button className="btn btn-outline btn-xs text-amber-700 hover:bg-amber-700 hover:text-white">
            Update
          </button>
        </Link>
      </th>
      <th>
        <button className="btn btn-outline btn-xs btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default MyToysTable;
