import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import OTreatmentCard from './OTreatmentCard';
import useStyles from './otreatments.styles';


export const OTreatmentGrid = () => {
  const classes = useStyles();
  const { treatments } = useTreatments();

  if (!treatments) return <p>Loading</p>

  return (
    <div className={classes.rootGrid}>
      {treatments.map((treatment) => (
        <OTreatmentCard key={treatment.id} {...treatment}/>
      ))}
    </div>
  )
}
