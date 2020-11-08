import React from 'react'
import { Box, Typography, Grid} from '@material-ui/core'; 

import './Overview.css'

import useStyles from './overview.styles';
import { OTreatmentGrid } from './components/treatments/OTreatmentGrid';
import Units from './components/units/Units';

export const OverviewContainer = () => {
  const classes = useStyles();
  return (
    <div className="overview-section">
      {/*<div className={classes.firstGrid}>
        <Box className={classes.boxWrapper}>
          <Typography className={classes.boxTitle}>
            Siste behandlinger
          </Typography>
          <OTreatmentGrid />
        </Box>
        <Units /> 
      </div>*/}
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <OTreatmentGrid />
        </Grid>
        <Grid item xs={4}>
          <Units /> 
        </Grid>
      </Grid>
    </div>
  )
}
