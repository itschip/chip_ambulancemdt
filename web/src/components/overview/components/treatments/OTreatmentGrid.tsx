import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import OTreatmentCard from './OTreatmentCard';
import useStyles from './otreatments.styles';


export const OTreatmentGrid = () => {
  const classes = useStyles();
  const { treatments } = useTreatments();
  if (!treatments) return (
    <CircularProgress 
      thickness={6}
      style={{
        color: '#4f9cdb',
        position: 'absolute',
      }}
    />
  )

  return (
    <div className={classes.rootGrid}>
      {treatments.slice(0, 3).map((treatment) => (
        <OTreatmentCard key={treatment.id} {...treatment}/>
      ))}
    </div>
  )
}
