import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

import useStyles from './card.styles';
import { NavButton } from '../../../ui/UIButton';
import { Link } from 'react-router-dom';
import PatientPage from '../patient/PatientPage';

const PatientCard = (patient) => {

  const showPatientModal = (patient) => {
    
  }

  const classes = useStyles();
  return (
    <div className="patient-card">
    <Card className={classes.root} variant="elevation" >
      <CardContent>
        <Typography className={classes.cardTypo} style={{ fontSize: 20, fontWeight: 600 }}>
          {patient.name}
        </Typography>
        <Typography className={classes.cardTypo} style={{ fontWeight: 500 }}>
          Alder: {patient.age}
        </Typography>
        <Typography className={classes.cardTypo} style={{ fontWeight: 500 }}>
          Blodtype: {patient.bloodtype}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.cardAction} variant="contained" onClick={() => showPatientModal(patient)}>
          Les mer
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default PatientCard;

