import React from 'react'
import { Grid } from '@material-ui/core';
import { usePatients } from '../../hooks/usePatients';
import PatientCard from '../card/PatientCard';

const PatientGrid = () => {
  const { patients } = usePatients()
  
  if (!patients) return <p>loading</p>

  return (
    <div>
      <Grid container spacing={4}>
        {patients.map((patient) => (
          <Grid item xs={4}> 
            <PatientCard key={patient.id} {...patient}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PatientGrid;