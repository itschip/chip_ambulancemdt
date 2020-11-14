import { Button, TextField, Avatar as MuiAvatar } from '@material-ui/core'
import React, { useState } from 'react'
import Nui from '../../../../nui-events/utils/Nui'
import { Modal } from '../../../ui/Modal'
import { useCredsModal } from '../../hooks/useCredsModal'
import { usePatientCreds } from '../../hooks/usePatientCreds'
import useStyles from './patient.styles'


export const CredsModal = () => {

  const classes = useStyles();

  const { credsModal, setCredsModal } = useCredsModal()
  const { patientCreds } = usePatientCreds();

  const [avatar, setAvatar] = useState(patientCreds ? patientCreds.avatar : "");
  const [blood, setBlood] = useState(patientCreds ? patientCreds.bloodtype : "")

  const handleClose = () => {
    setCredsModal(false) 
  }

  const handleSave = () => {
    setCredsModal(false)
    Nui.send('ambu:updatePatientCredentials', {
      firstname: patientCreds?.firstname,
      lastname: patientCreds?.lastname,
      avatar,
      blood
    })
  }

  return (
    <div>
      <Modal visible={credsModal}>
        <Button className={classes.closeCredModal} onClick={handleClose}>Lukk</Button>
        <div className={classes.credsModalContainer}>
          <MuiAvatar src={avatar} style={{ width: 100, height: 100, margin: 10 }} />
          <TextField 
            placeholder="Avatar URL"
            className={classes.inputCreds}
            inputProps={{ className: classes.credsInput }}
            value={avatar}
            onChange={e => setAvatar(e.target.value)}
          />
          <TextField
            placeholder="Blodtype"
            className={classes.inputCreds}
            inputProps={{ className: classes.credsInputBlood }}
            value={blood}
            onChange={e => setBlood(e.target.value)}

          />
          <Button variant="contained" onClick={handleSave} className={classes.saveButton}>
            Lagre
          </Button>
        </div>
      </Modal>
    </div>
  )
}
