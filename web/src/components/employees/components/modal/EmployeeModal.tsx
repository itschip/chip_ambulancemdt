import { Button, Divider } from '@material-ui/core';
import React from 'react'
import { Modal } from '../../../ui/Modal'
import { useEmployeeDetail } from '../../hooks/useEmployeeDetail';
import { useModal } from '../../hooks/useModal'
import useStyles from './modal.styles';
import ModalCards from './ModalCards';
import CloseIcon from '@material-ui/icons/Close';
import '../Employee.css';
import TreatmentModal from '../../../treatments/components/TreatmentModal';
import { useTreatmentModal } from '../../../treatments/hooks/useTreatmentModal';
import {useGrade} from "../../hooks/useGrade";

const EmployeeModal = () => {
  const { modal, setModal } = useModal(); 
  const { detail, setDetail } = useEmployeeDetail();
  const classes = useStyles();
  const { treatmentModal } = useTreatmentModal();
  const grade = useGrade();

  const handleClose = () => {
    setModal(false);
    setDetail(null);
  }

  if (!detail) return null;

  return (
    <div>
      <Modal visible={modal}>
        <TreatmentModal overview={false} />
        <div className={treatmentModal ? classes.backgroundModal : undefined} />
        <Button onClick={handleClose} className={classes.modalCloseButton}><CloseIcon /></Button>
        <div> 
          <div className={classes.headerContainer}>
            <h1 className={classes.employeeName}>{detail.firstname} {detail.lastname}</h1>
            <Divider orientation="vertical" flexItem variant="middle" />
            <h2 className={classes.jobGrade}><strong>Stilling:  </strong>{grade}</h2>
            <Divider orientation="vertical" flexItem variant="middle" />
          </div>
          <ModalCards/>
        </div>
      </Modal>
    </div>
  )
}

export default EmployeeModal;
