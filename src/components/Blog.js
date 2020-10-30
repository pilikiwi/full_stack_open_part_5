import React, { useState } from 'react'
//import blogService from '../services/blogs'

const blogStyle ={
  padding: 10,
  border: 'dashed',
  borderWidth: 1,
  borderRadius: 25,
  marginBottom: 5,
}

const Blog = ({ blog }) => {

  const [visible, setVisible] = useState(false)

  const showDetail = { display: visible ? 'none' : '' }
  const hideDetail = { display: visible ? '' : 'none' }

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
  <div style={blogStyle} >
    <h4 className='blogShort'>{blog.title} by {blog.author}</h4> 
    <div style={showDetail}> <button onClick={() => setVisible(true)}>view</button> </div>
    <div style={hideDetail}>
    <p >With Likes: {blog.likes} <button>Like</button> <br/>@ {blog.url}</p>
    <button onClick={() => setVisible(false)}>hide</button>
    </div>
  </div>
)}

export default Blog
