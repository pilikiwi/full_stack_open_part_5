import React from 'react'
const Blog = ({ blog }) => (
  <div>
    {blog.title} by {blog.author} With Likes: {blog.likes}
  </div>
)

export default Blog
