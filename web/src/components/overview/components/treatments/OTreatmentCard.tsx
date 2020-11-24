import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useTreatmentDetail } from '../../../treatments/hooks/useTreatmentDetail';
import { useTreatmentModal } from '../../../treatments/hooks/useTreatmentModal';

import useStyles from './otreatments.styles';

const OTreatmentCard = (treatment) => {
  const classes = useStyles();
  const { setTreatmentDetail } = useTreatmentDetail();
  const { setTreatmentModal } = useTreatmentModal();

  const openOverviewTreatmentModal = (treatment) => {
    setTreatmentModal(true)
    setTreatmentDetail(treatment)
  }


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.cardHeader}>
          {treatment.name}
        </Typography>
        <Typography 
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500
          }}
        >
          {treatment.note}
        </Typography>
        <div className={classes.cardFooter}>
          <Typography>
            {treatment.date}
          </Typography>
          <Typography>
            Av {treatment.doctor}.
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button className={classes.cardActions} onClick={() => openOverviewTreatmentModal(treatment)}>
          Se mer
        </Button>
      </CardActions>
    </Card>
  )
}

export default OTreatmentCard;