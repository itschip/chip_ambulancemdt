import React from 'react'
import { Modal } from '../../ui/Modal';


import { Button } from '@material-ui/core'
import { useTreatmentModal } from '../hooks/useTreatmentModal';
import { useTreatmentDetail } from '../hooks/useTreatmentDetail';

const TreatmentModal = () => {
  const { treatmentModal, setTreatmentModal } = useTreatmentModal();
  const { treatmentDetail, setTreatmentDetail } = useTreatmentDetail();

  const handleClose = () => {
    setTreatmentDetail(null)
    setTreatmentModal(false)
  }

  if (!treatmentDetail) return null

  return (
    <div>
      <Modal visible={treatmentModal}>
        <Button onClick={handleClose}>Lukk</Button>
        <div>
          <h1>{treatmentDetail.name}</h1>  
        </div>
      </Modal>
    </div>
  )
}

export default TreatmentModal;
