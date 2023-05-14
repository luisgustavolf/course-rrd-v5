import * as React from 'react'
import { useParams } from 'react-router-dom'
import { IEmployeePageUrlParams } from './iEmployeePageUrlParams'

export function EmployeePage() {
  const params = useParams<IEmployeePageUrlParams>()

  return (
    <div className={'employeePage'}>
      {params.id &&
        <h4>Detalhes do colaborador {params.id}</h4>
      }
      
      {!params.id &&
        <h4>Novo colaborador</h4>
      }
    </div>
  )
}