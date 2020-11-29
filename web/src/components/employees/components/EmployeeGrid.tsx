import React from 'react'
import { Grid } from '@material-ui/core';
import { useEmployees } from '../hooks/useEmployees';
import EmployeeCard from './card/EmployeeCard';

const EmployeeGrid = () => {
  const { employees } = useEmployees()

  if (!employees) return null

  return (
    <div style={{ marginTop: 30, margin: 0, overflow: "auto", maxHeight: 560, overflowX: "hidden", padding: 10 }}>
      <Grid container spacing={4}>
        {employees.map((employee) => (
          <Grid item xs={2}>
            <EmployeeCard key={employee.id} {...employee} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default EmployeeGrid;