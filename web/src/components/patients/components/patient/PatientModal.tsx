import { Button } from '@material-ui/core';
import React from 'react'
import { Modal } from '../../../ui/Modal';
import { usePatientCreds } from '../../hooks/usePatientCreds';
import { usePatientModal } from '../../hooks/usePatientModal';
import useStyles from './patient.styles';
import CloseIcon from '@material-ui/icons/Close';

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
      <div className={classes.modalParent}>
        <Button className={classes.modalCloseButton} onClick={handleClose}><CloseIcon /></Button>
        <PatientOverview />
      </div>
    </Modal>
  )
}

export default PatientModal;