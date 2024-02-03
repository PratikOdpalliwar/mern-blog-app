import React, { useState } from "react";
import PostItem from "../components/PostItem";
import { DUMMY_POSTS } from "../data";

const AuthorPosts = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="flex flex-row flex-wrap justify-around">
    {posts.length > 0 ? (
      posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
        <PostItem
          key={id}
          postID={id}
          thumbnail={thumbnail}
          category={category}
          title={title}
          desc={desc}
          authorID={authorID}
        />
      ))
    ) : (
      <h2 className="m-10 flex justify-center text-3xl font-bold">No Posts Found</h2>
    )}
  </section>
  )
}

export default AuthorPosts
