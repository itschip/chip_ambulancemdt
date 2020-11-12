import { Card, CardActions, CardContent, Chip, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useTreatmentDetail } from '../../../../treatments/hooks/useTreatmentDetail';
import { useTreatmentModal } from '../../../../treatments/hooks/useTreatmentModal';

import useStyles from './treatment.styles';

export const TreatmentCard = (treatment) => {
  const classes = useStyles();
  const { setTreatmentDetail } = useTreatmentDetail();

  const { setTreatmentModal } = useTreatmentModal();

  const TagType = {
    Frisk: {background: '#2ed573', color: '#fff'},
    Kritisk: {background: '#ff4757', color: '#fff'},
    Behandlet: {background: 'fff', color: '#4f9cdb'}  
  }


  const handleOpenTreatment = (treatment) => {
    console.log(treatment)
    setTreatmentModal(true)
    setTreatmentDetail(treatment)
  }
  
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.cardChip}>
          {treatment.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" style={TagType[tag]}/>
          ))}
        </div>
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
            {treatment.note.slice(0, 50)}...
          </Typography>
          <div className={classes.cardFooter}>
            <Typography>
              {treatment.date}
            </Typography>
            <Typography>
              Av {treatment.doctor}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleOpenTreatment(treatment)} className={classes.cardActions}>
            Se mer
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
