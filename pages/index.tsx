import { useState } from 'react'
import styles from '../styles/index.module.scss'
import jwt from 'jsonwebtoken'

export default function Home() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loggedIn, setloggedIn] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then((t) => t.json()).catch(e => {
      console.log(e);
    })
    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string }
      setloggedIn(true)
      setMessage(`Welcome! ${json.username}. You are ${json.admin ? 'an admin.' : 'not an admin.'}`)
    }
  }

  return (
    <div className={styles.container}>
      {loggedIn ? message : <form>
        <input placeholder='Username' autoComplete={'off'} name='username' value={username} onChange={(prop)=>setUsername(prop.target.value)} type='text' />
        <br/>
        <input placeholder='Password' name='password' value={password} onChange={(prop)=>setPassword(prop.target.value)} type='password' />
        <br />
        <button onClick={submitForm}>Login</button>
      </form>}
    </div>
  )
}