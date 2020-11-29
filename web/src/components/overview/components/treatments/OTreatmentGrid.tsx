import { CircularProgress } from '@material-ui/core';
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
      {treatments.slice(0, 3).map((treatment) => (
        <OTreatmentCard key={treatment.id} {...treatment}/>
      ))}
    </div>
  )
}
