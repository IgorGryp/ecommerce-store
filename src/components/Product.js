import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // imprting link
import { BsPlus, BsEyeFill } from 'react-icons/bs'; // imprting icons

const Product = ({ product }) => {
  console.log(product);

  const { id, image, category, title, price } = product; // destructuring product

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute flex flex-col items-center justify-center p-2 transition-all duration-300 opacity-0 -right-11 group-hover:right-5 top-6 group-hover:opacity-100 gap-y-2">
          <button>
            <div className="flex items-center justify-center w-12 h-12 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex items-center justify-center w-12 h-12 bg-white text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* categoty & title & price */}
      <div>
        <div className="mb-1 text-sm text-gray-500 capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="mb-1 font-semibold ">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
