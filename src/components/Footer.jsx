import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-auto w-auto bg-black font-mono text-xs ">
      <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center py-5">
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Agriculture">Agriculture</Link>
      </li >
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Business">Business</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Education">Education</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Entertainment">Entertainment</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Art">Art</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Investment">Investment</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Uncategorized">Uncategorized</Link>
      </li>
      <li className="mx-5 my-2 bg-gray-700 p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer">
        <Link to="/posts/categories/Weather">Weather</Link>
      </li>
      </ul>  
      <div className="border border-t-2 boder-white">
        <small className="font-extralight my-2 flex flex-row justify-center items-center text-white">
          All Rights Reserved &copy; Copyright, Company Name.
        </small>
      </div>
    </footer>
  );
};

export default Footer;




