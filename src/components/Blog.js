import React, { useState } from 'react'

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

  return (
  <div style={blogStyle}>
    <h4>{blog.title} by {blog.author}</h4> 
    <div style={showDetail}> <button onClick={() => setVisible(true)}>view</button> </div>
    <div style={hideDetail}>
    <p >With Likes: {blog.likes} <button>Like</button> <br/>@ {blog.url}</p>
    <button onClick={() => setVisible(false)}>hide</button>
    </div>
  </div>
)}

export default Blog
