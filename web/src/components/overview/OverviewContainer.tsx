import React from 'react'
import { Grid } from '@material-ui/core'; 

import './Overview.css'


import { OTreatmentGrid } from './components/treatments/OTreatmentGrid';
import Units from './components/units/Units';
import TreatmentModal from '../treatments/components/TreatmentModal';

export const OverviewContainer = () => {
  return (
    <div className="overview-section">
      <TreatmentModal overview={true} />
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <h2>Behandlinger</h2>
          <OTreatmentGrid />
        </Grid>
        <Grid item xs={4}>
          <Units />
        </Grid>
      </Grid>
    </div>
  )
}
