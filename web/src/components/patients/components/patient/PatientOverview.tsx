import { Button, Typography, Avatar as MuiAvatar } from '@material-ui/core';
import React from 'react'
import { Modal } from '../../../ui/Modal';
import { usePatientCreds } from '../../hooks/usePatientCreds';
import { usePatientModal } from '../../hooks/usePatientModal';
import useStyles from './patient.styles';

const PatientOverview = () => {
  const { patientCreds, setPatientCreds } = usePatientCreds()

  const classes = useStyles()

  if (!patientCreds) return <Typography variant="h3">Could not fetch data</Typography>

  return (
    <div className="patient-overview">
      <div className={classes.modalHeader}>
        <MuiAvatar className={classes.avatar} src={patientCreds?.image} />
        <Typography variant="h4" className={classes.modalTitle}>{patientCreds?.name}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Alder:</span> {patientCreds.age}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Blodtype:</span> {patientCreds.bloodtype}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Telefon:</span> {patientCreds.number}</Typography>
      </div>
      <div className={classes.overviewContent}>
        <Typography variant="h5">Behandlinger</Typography>
      </div>
    </div>
  )
}

export default PatientOverview;