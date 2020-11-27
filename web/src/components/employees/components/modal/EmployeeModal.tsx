import { Button, Chip, Divider } from '@material-ui/core';
import React from 'react'
import { Modal } from '../../../ui/Modal'
import { useEmployeeDetail } from '../../hooks/useEmployeeDetail';
import { useModal } from '../../hooks/useModal'
import useStyles from './modal.styles';
import ModalCards from './ModalCards';
import '../Employee.css';
import TreatmentModal from '../../../treatments/components/TreatmentModal';

const EmployeeModal = () => {
  const { modal, setModal } = useModal(); 
  const { detail, setDetail } = useEmployeeDetail();
  const classes = useStyles();

  const handleClose = () => {
    setModal(false);
    setDetail(null);
  }

  if (!detail) return null;

  return (
    <div>
      <Modal visible={modal}>
        <TreatmentModal overview={false} />
        <Button onClick={handleClose}>Lukk</Button>
        <div> 
          <div className={classes.headerContainer}>
            <h1 className={classes.employeeName}>{detail.firstname} {detail.lastname}</h1>
            <Divider orientation="vertical" flexItem variant="middle" />
            <h2 className={classes.jobGrade}><strong>Stilling:  </strong>{detail.job_grade}</h2>
            <Divider orientation="vertical" flexItem variant="middle" />
          </div>
          <ModalCards/>
        </div>
      </Modal>
    </div>
  )
}

export default EmployeeModal;
