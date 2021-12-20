import React from "react";
import { Link } from "react-router-dom";

const Button = ({ value, href }) => {
  return (
    <Link to={href}>
      <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
        {value}
      </button>
    </Link>
  );
};

export default Button;
