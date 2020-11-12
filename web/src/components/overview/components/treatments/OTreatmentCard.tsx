import { Card, CardActions, CardContent, Typography, Button, Chip } from '@material-ui/core'
import React, { useState } from 'react'

import useStyles from './otreatments.styles';

// kritisk: background: '#ff4757', color: '#fff'
// frisk : 

const OTreatmentCard = (treatment) => {
  const classes = useStyles();

  const TagType = {
    Frisk: {background: '#2ed573', color: '#fff'},
    Kritisk: {background: '#ff4757', color: '#fff'},
    Behandlet: {background: 'fff', color: '#4f9cdb'}  
  }


  return (
    <Card className={classes.root}>
      <div className={classes.cardChip}>
        {treatment.tags.map((tag) => (
          <Chip label={tag} size="small" style={TagType[tag]}/>
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
        <Button className={classes.cardActions}>
          Se mer
        </Button>
      </CardActions>
    </Card>
  )
}

export default OTreatmentCard;