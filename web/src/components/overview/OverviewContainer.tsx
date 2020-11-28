import React from 'react'
import { Grid } from '@material-ui/core'; 

import './Overview.css'
import useStyles from './overview.styles';

import { OTreatmentGrid } from './components/treatments/OTreatmentGrid';
import Units from './components/units/Units';
import TreatmentModal from '../treatments/components/TreatmentModal';
import { useTreatmentModal } from '../treatments/hooks/useTreatmentModal';

export const OverviewContainer = () => {
  const classes = useStyles();
  const { treatmentModal } = useTreatmentModal();

  return (
    <div className="overview-section">
      <TreatmentModal overview={true} />
      <div className={treatmentModal ? classes.backgroundModal : undefined} />
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <h2 className={classes.treatmentTitle}>Siste Behandlinger</h2>
          <OTreatmentGrid />
        </Grid>
        <Grid item xs={4}>
          <Units />
        </Grid>
      </Grid>
    </div>
  )
}
