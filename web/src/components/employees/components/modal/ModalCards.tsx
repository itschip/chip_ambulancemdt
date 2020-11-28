import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { EmployeeTreatmentCard } from './EmployeeTreatmentCard';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  overviewCards: {
    maxHeight: 550,
    overflow: 'auto',
    overflowX: 'hidden'
  },
}))

const ModalCards = () => {
  const classes = useStyles();
  const { treatments } = useTreatments();

  if (!treatments) return <CircularProgress />
  
  return (
    <div className={classes.overviewCards}>
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
