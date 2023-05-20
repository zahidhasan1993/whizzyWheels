import React from 'react';

const AlltoysTable = ({toy}) => {

    const {available_quantity,details,name,picture,price,rating,sellerEmail,sellerName,sub_category,_id} = toy;
    console.log(toy);
    return (
        <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={picture}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {sellerName}
            </td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
          </tr>
    );
};

export default AlltoysTable;