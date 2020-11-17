import React, {useState} from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) =>{ 
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  
  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
    title: newTitle,
    author: newAuthor,
    url: newUrl,
    })

    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

    return (
    <div>
    <h2>Create New Blog:</h2>

    <form onSubmit={addBlog}>
    title: <input value={newTitle} onChange={handleTitleChange}  id ='title'/> <br />
    author: <input value={newAuthor} onChange={handleAuthorChange} id ='author' /> <br />
    url: <input value={newUrl} onChange={handleUrlChange} id ='utl'/> <br />
    <button type='submit' id='create-btn'>Create</button>
    </form>
    </div>
  )}

  BlogForm.propTypes ={
    handleTitleChange: PropTypes.func.isRequired,
    handleAuthorChange: PropTypes.func.isRequired,
    handleUrlChange: PropTypes.func.isRequired,
    newTitle: PropTypes.string.isRequired,
    newAuthor: PropTypes.string.isRequired,
    newUrl: PropTypes.string.isRequired,
  }

  export default BlogForm