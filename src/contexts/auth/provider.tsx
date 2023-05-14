import * as React from 'react'
import { AuthContext } from './context'

export interface AuthProviderProps {
  children?: any
}

export function AuthProvider(props: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const login = React.useCallback(() => {
    setIsAuthenticated(true)
  }, [])
  
  const logout = React.useCallback(() => {
    setIsAuthenticated(false)
  }, [])
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}