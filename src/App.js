import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception){
      console.log('Invalid credentials')
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

  return (
    <div>
      <h1>blogs</h1>
      {user === null
        ?loginForm()
        :<div> 
          <p>{user.name} logged in</p> 
          {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
          )} 
          </div>
      }

    </div>
  )
}

export default App