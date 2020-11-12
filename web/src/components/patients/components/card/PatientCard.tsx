import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

import useStyles from './card.styles';
import { usePatientModal } from '../../hooks/usePatientModal';
import { usePatientCreds } from '../../hooks/usePatientCreds';

const PatientCard = (patient) => {
  const { setPatientModal } = usePatientModal();
  const { patientCreds, setPatientCreds } = usePatientCreds();

  const showPatientModal = (patient) => {
    setPatientModal(true)
    setPatientCreds(patient);
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

