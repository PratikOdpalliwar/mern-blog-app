import React, { useState, useEffect} from "react";
import PostItem from "../components/PostItem";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";


const CategoryPosts = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  const {category} = useParams()

  useEffect(()=>{
const fetchPosts = async ()=>{
  setIsLoading(true)
  try{
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
    setPosts(response?.data)
    }catch (err) {
      console.log(err)
    }
    setIsLoading(false)
}
fetchPosts()
  },[category])

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

export default CategoryPosts
