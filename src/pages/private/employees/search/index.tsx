import { Link, useRouteMatch } from 'react-router-dom'

export function EmployeeSearchPage() {
  const { url } = useRouteMatch()

  return (
    <div className={'EmployeeSearchPage'}>
      <h4>Busca de colaboradores</h4>

      <Link to={`${url}/employee`}>
        Novo colaborador
      </Link>
     
      {' '}

      <Link to={`${url}/employee/1`}>
        Ver colaborador 1
      </Link>
    </div>
  )
}