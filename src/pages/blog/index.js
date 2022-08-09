import React from 'react'

import {Outlet} from 'react-router-dom' 

const BlogLayout = () => {
  return (
    <div>
      <h1>Blog Sayfası</h1>
      <Outlet/>
    </div>
  )
}

export default BlogLayout;