import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section>
      {posts.length ? (
        <div className='flex flex-col'>
          {posts.map((post) => (
            <article key={post.id} className='flex flex-row m-5 shadow-2xl'>
              <div>
                <img className="w-16 sm:w-20 rounded m-2 flex justify-center" src={post.thumbnail} alt="" />
              </div>
              
              <div className='mx-5 text-sm font-bold font-mono flex flex-row justify-center items-center flex-wrap'>
                <h5>{post.title}</h5>
              </div>

              <div className='flex flex-row items-center ml-auto'>
                <Link className="p-2 h-6 mx-2 flex items-center rounded text-black text-sm hover:bg-black hover:text-white" to={`/posts/${post.id}`}>View</Link>
                <Link className='p-2 h-6 mx-2 flex items-center rounded text-white text-sm bg-blue-500 hover:bg-black hover:text-white' to={`/posts/${post.id}/edit`}>Edit</Link>
                <Link className='p-2 h-6 mx-2 flex items-center rounded text-white text-sm bg-red-500 hover:bg-black hover:text-white' to={`/posts/${post.id}/delete`}>Delete</Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className='text-3xl m-10 p-2 font-bold font-mono flex justify-center items-center'>You have no posts yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
