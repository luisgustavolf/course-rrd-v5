import * as React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages/public/login'
import { AuthContext } from './contexts/auth/context'
import { PrivateRoutes } from './pages/private/routes'

export function AppRoutes() {
  const authContext = React.useContext(AuthContext)

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/login'} component={LoginPage} />

        {authContext.isAuthenticated &&
          <PrivateRoutes />
        }

        {!authContext.isAuthenticated &&
          <Redirect to={'/login'} />
        }
      </Switch>
    </BrowserRouter>
  )
}