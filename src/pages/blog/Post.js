import React from 'react'
import { useParams } from 'react-router-dom'


const Post = () => {

    const {url,id} = useParams();
    console.log(url,id);
  return (
    <div>Post Page</div>
  )
}

export default Post