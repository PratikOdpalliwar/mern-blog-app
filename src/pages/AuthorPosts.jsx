import React, { useState, useEffect} from "react";
import PostItem from "../components/PostItem";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";


const AuthorPosts = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  const {id} = useParams()

  useEffect(()=>{
const fetchPosts = async ()=>{
  setIsLoading(true)
  try{
    const response = await axios.get(`https://mern-blog-server-rmvk.onrender.com/api/posts/users/${id}`)
    setPosts(response?.data)
    }catch (err) {
      console.log(err)
    }
    setIsLoading(false)
}
fetchPosts()
  },[id])

if(isLoading){
  return <Loader/>
}
  return (
    <section className="flex flex-row flex-wrap justify-around">
      {posts.length > 0 ? (
        posts.map(({ _id:id, thumbnail, category, title, description, creator, createdAt }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            desc={description}
            authorID={creator}
            createdAt={createdAt}
          />
        ))
      ) : (
        <h2 className="m-10 flex justify-center text-3xl font-bold">No Posts Found</h2>
      )}
    </section>
  );
};

export default AuthorPosts
