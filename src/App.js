import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [addMessage, setAddMessage] = useState(null)
  const [newNoteVisbile, setNewNoteVisible] = useState(false)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception){
      setTimeout(()=>{
        setAddMessage(null)
      }, 5000);
      setAddMessage('Invalid username or password ')
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        Username: <input 
                  type="text"
                  value={username}
                  name="Username"
                  onChange={({ target }) => setUsername(target.value)}
                  />
      </div>
      <div>
        Password: <input 
                  type="text"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
                  />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const handleLogOut = () =>{
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const logoutForm = () => (
    <button onClick={handleLogOut}>Log Out</button>
  )

  const addBlog = (blogObject) =>{
       blogService
    .create(blogObject)
    .then(returnedBlog=>{
      setBlogs(blogs.concat(returnedBlog))
      setTimeout(()=>{
        setAddMessage(null)
      }, 5000);
      setAddMessage(`${blogObject.title} by ${blogObject.author} added `)
    })
  }


  const hideWhenVisible = { display: newNoteVisbile ? 'none' : ''}
  const showWhenVisible = { display: newNoteVisbile ? '' : 'none'}


  return (
    <div>
      <h1>blogs</h1>
      <Notification message={addMessage} />
      {user === null
        ?loginForm()
        :<div> 
          <p>{user.name} logged in {logoutForm()}</p>
          <div style={hideWhenVisible}>
            <button onClick={() => setNewNoteVisible(true)}>add new note</button>
          </div>
          <div style={showWhenVisible}>
          <BlogForm createBlog={addBlog} />
          <button onClick={() => setNewNoteVisible(false)}>cancel</button>
          </div>
          <br />
          {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
          )}
          </div>
      }

    </div>
  )
}

export default App