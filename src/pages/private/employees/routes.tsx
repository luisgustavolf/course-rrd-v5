import * as React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { EmployeeSearchPage } from './search';
import { EmployeePage } from './employee';

export function EmployeesRoutes() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={EmployeeSearchPage} />
      <Route path={`${path}/employee/:id?`} component={EmployeePage} />
    </Switch>
  )
}