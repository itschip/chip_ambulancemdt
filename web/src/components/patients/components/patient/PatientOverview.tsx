import { Button, Typography, Avatar as MuiAvatar, Paper } from '@material-ui/core';
import React from 'react'
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { usePatientCreds } from '../../hooks/usePatientCreds';
import useStyles from './patient.styles';
import EditIcon from '@material-ui/icons/Edit';
import { CredsModal } from './CredsModal';
import { useCredsModal } from '../../hooks/useCredsModal';

import './Patient.css'

const PatientOverview = () => {

  const { treatments } = useTreatments();
  const { patientCreds } = usePatientCreds();
  const { credsModal, setCredsModal } = useCredsModal()

  const classes = useStyles()

  const openCredsModal = () => {
    setCredsModal(true)
  }

  if (!patientCreds || !treatments) return <Typography variant="h3">Could not fetch data</Typography>

  return (
    <div className="patient-overview">
      <CredsModal />
      <div className={credsModal ? classes.backgroundModal : undefined} />
      <div className={classes.modalHeader}>
        <MuiAvatar className={classes.avatar} src={patientCreds?.image} />
        <Typography variant="h4" className={classes.modalTitle}>{patientCreds?.name}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Alder:</span> {patientCreds.age}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Blodtype:</span> {patientCreds.bloodtype}</Typography>
        <Typography className={classes.patientHeaderInfo}><span style={{ fontWeight: 600 }}>Telefon:</span> {patientCreds.number}</Typography>
        <Button variant="contained" onClick={openCredsModal} className={classes.editPatientBtn}><EditIcon /></Button>
      </div>
      <div className={classes.overviewContent}>
        <Typography variant="h5">Behandlinger</Typography>
        {treatments.filter(treatment => treatment.name.includes(patientCreds.name)).map(treatment => (
          <Paper>
            <p>{treatment.note}</p>
          </Paper>
        ))}
      </div>
    </div>
  )
}


export default PatientOverview;