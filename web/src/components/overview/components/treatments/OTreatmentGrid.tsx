import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import OTreatmentCard from './OTreatmentCard';
import useStyles from './otreatments.styles';


export const OTreatmentGrid = () => {
  const classes = useStyles();
  const { treatments } = useTreatments();
  if (!treatments) return <h2 style={{ color: '#73a3c9', margin: 10 }}>Ingen behandlinger</h2>

  return (
    <div className={classes.rootGrid}>
      <Grid container spacing={0}>
        {treatments.slice(0, 6).map((treatment) => (
          <Grid item xs={4}>
            <OTreatmentCard key={treatment.id} {...treatment}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
