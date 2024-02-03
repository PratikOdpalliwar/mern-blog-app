import React, { useState } from "react";
import Avatar1 from "../assets/avatar1.jpg";
import Avatar2 from "../assets/avatar2.jpg";
import Avatar3 from "../assets/avatar3.jpg";
import Avatar4 from "../assets/avatar4.jpg";
import Avatar5 from "../assets/avatar5.jpg";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Ernest Achiever", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Jane Doe", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Dramani Mahama", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Nana Addo", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Hajia Bintu", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {authors.length > 0 ? (
        authors.map(({ id, avatar, name, posts }) => (
          <Link
            key={id}
            to={`posts/users/${id}`}
            className="author-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="author-avatar overflow-hidden rounded-full mb-4">
              <img
                src={avatar}
                alt={`Image of ${name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">{name}</h4>
              <p className="text-gray-500">{posts} Posts</p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl font-bold text-center">No users/authors found.</h1>
      )}
    </section>
  );
};

export default Authors;
