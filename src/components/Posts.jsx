import React, { useState } from 'react'

import Thumbnail1 from "../assets/blog1.jpg"
import Thumbnail2 from '../assets/blog2.jpg' 
import Thumbnail3 from '../assets/blog3.jpg'
import Thumbnail4 from '../assets/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
      id: '1',
      thumbnail: Thumbnail1,
      category: 'education',
      title: 'This is the title of the very first post on this blog.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
      authorID: 3,
    },
    {
      id: '2',
      thumbnail: Thumbnail2,
      category: 'science',
      title: 'This is the title of the very second post on this blog.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
      authorID: 1,
    },
    {
      id: '3',
      thumbnail: Thumbnail3,
      category: 'weather',
      title: 'This is the title of the very third post on this blog.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
      authorID: 13,
    },
    {
      id: '4',
      thumbnail: Thumbnail4,
      category: 'farming',
      title: 'This is the title of the very last post on this blog.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
      authorID: 11,
    },
  ];
  

const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
   <section className='flex flex-row flex-wrap justify-around'>
    {
 posts.map(({id, thumbnail,category,title,desc,authorID}) =>
 <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />
 )
    }
   </section>
  )
}

export default Posts
