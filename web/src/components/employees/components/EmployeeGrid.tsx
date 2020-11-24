import React from 'react'
import { Grid } from '@material-ui/core';
import { useEmployees } from '../hooks/useEmployees';
import EmployeeCard from './card/EmployeeCard';

const EmployeeGrid = () => {
  const { employees } = useEmployees()

  if (!employees) return null

  return (
    <div>
      <Grid container spacing={4}>
        {employees.map((employee) => (
          <Grid>
            <EmployeeCard key={employee.id} {...employee} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default EmployeeGrid;