import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { EmployeeTreatmentCard } from './EmployeeTreatmentCard';

const ModalCards = () => {
  const { treatments } = useTreatments();

  if (!treatments) return <CircularProgress />
  
  return (
    <div>
      <Grid container spacing={2}>
        {treatments.map((treatment) => (
          <Grid item xs={3}>
            <EmployeeTreatmentCard key={treatment.id} {...treatment}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ModalCards;
