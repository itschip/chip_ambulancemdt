import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

import useStyles from './card.styles';
import { usePatientModal } from '../../hooks/usePatientModal';
import { usePatientCreds } from '../../hooks/usePatientCreds';
import Nui from '../../../../nui-events/utils/Nui';

const PatientCard = (patient) => {
  const { setPatientModal } = usePatientModal();
  const { setPatientCreds } = usePatientCreds();

  const showPatientModal = (patient) => {
    setPatientModal(true)
    setPatientCreds(patient);
    const patientName = patient.firstname + " " +  patient.lastname
    console.log(patientName)
    Nui.send('ambu:fetchScopedTreatments', {
      patientName
    })
  }

  const classes = useStyles();
  return (
    <div className="patient-card">
    <Card className={classes.root} variant="elevation" >
      <CardContent>
        <Typography className={classes.cardTypo} style={{ fontSize: 20, fontWeight: 600 }}>
          {patient.firstname} {patient.lastname}
        </Typography>
        <Typography className={classes.cardTypo} style={{ fontWeight: 500 }}>
          Alder: {patient.dateofbirth}
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

