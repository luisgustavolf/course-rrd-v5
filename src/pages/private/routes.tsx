import { Link, Route, Switch } from 'react-router-dom';
import { EmployeesRoutes } from './employees/routes';
import { ConfigsPage } from './configs';
import { AuthContext } from '../../contexts/auth/context';
import React from 'react';

export function PrivateRoutes() {
  const authContext = React.useContext(AuthContext)
  
  return (
    <div className={'Private'}>
      <Link to={'/employees'}>
        Colaboradores
      </Link>
      
      {' '}
      
      <Link to={'/configs'}>
        Configurações
      </Link>

      {' '}

      <button onClick={authContext.logout}>
        Logout
      </button>

      <hr />

      <Switch>
        <Route path={'/employees'} component={EmployeesRoutes} />
        <Route path={'/configs'} component={ConfigsPage} />
      </Switch>
    </div>
  )
}