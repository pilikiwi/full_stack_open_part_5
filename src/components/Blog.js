import React, { useState } from 'react'
import Togglable from './Togglable'
//import blogService from '../services/blogs'

const blogStyle ={
  padding: 10,
  border: 'dashed',
  borderWidth: 1,
  borderRadius: 25,
  marginBottom: 5,
}

const Blog = ({ blog }) => {

  /* step5.8 incomepeted 
  const like = async (event) => {
     event.preventDefault()
    const newLikes = blog.likes + 1
    const updatedBlog = { ...blog, newLikes }
    const response = await blogService.update(blog.id, blog.user._id, updatedBlog)
    return response.data
  }
  */
  return (
  <div style={blogStyle} className='blogFull'>
    <h4>{blog.title} by {blog.author}</h4> 
    <Togglable buttonLabel = 'view'>
    <p>With Likes: {blog.likes} <button>Like</button> <br/>@ {blog.url}</p>
    </Togglable>  
  </div>
)}

export default Blog
