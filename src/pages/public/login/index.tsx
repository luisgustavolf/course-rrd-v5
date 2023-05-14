import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../contexts/auth/context'

export function LoginPage() {
  const authContext = React.useContext(AuthContext)
  const history = useHistory()

  function handleLogin() {
    authContext.login()
    history.push('/')
  }

  return (
    <div className={'loginPage'}>
      <h4>Login</h4>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}