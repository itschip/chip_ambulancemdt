import React from 'react'
import { Box, Typography } from '@material-ui/core'; 

import useStyles from './overview.styles';
import { OTreatmentGrid } from './components/treatments/OTreatmentGrid';

export const OverviewContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.boxWrapper}>
        <Typography className={classes.boxTitle}>
          Nyeste behandlinger
        </Typography>
        <OTreatmentGrid />
      </Box>
    </div>
  )
}
