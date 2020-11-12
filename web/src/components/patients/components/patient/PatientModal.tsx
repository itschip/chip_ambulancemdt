import { Button } from '@material-ui/core';
import React from 'react'
import { Modal } from '../../../ui/Modal';
import { usePatientCreds } from '../../hooks/usePatientCreds';
import { usePatientModal } from '../../hooks/usePatientModal';
import useStyles from './patient.styles';

import PatientOverview from './PatientOverview';

const PatientModal = () => {
  const { patientModal, setPatientModal } = usePatientModal();
  const { setPatientCreds } = usePatientCreds()
  const classes = useStyles();

  const handleClose = () => {
    setPatientModal(false);
    setPatientCreds(null);
  }



  return (
    <Modal visible={patientModal}>
      <Button style={{ color: '#fff', fontWeight: 600, fontSize: 20, fontFamily: "'Montserrat', sans-serif", }} onClick={handleClose}>Lukk</Button>
      <PatientOverview />
    </Modal>
  )
}

export default PatientModal;