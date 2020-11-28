import React, { useEffect, useState } from "react";
import { Modal } from "../../ui/Modal";
import dayjs from 'dayjs'
import { Button, Grid, TextField, Typography, Tooltip } from "@material-ui/core";
import { useTreatmentModal } from "../hooks/useTreatmentModal";
import { useTreatmentDetail } from '../hooks/useTreatmentDetail'
import useStyles from "./modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { usePatientCreds } from "../../patients/hooks/usePatientCreds";
import Nui from "../../../nui-events/utils/Nui";
import CloseIcon from '@material-ui/icons/Close';
import { useCredentials } from "../../../core/hooks/useCredentials";
import { useRole } from "../../../core/hooks/useRole";


const TreatmentModal = ({ overview }) => {
  const { treatmentModal, setTreatmentModal } = useTreatmentModal();
  const { treatmentDetail, setTreatmentDetail } = useTreatmentDetail();
  const { patientCreds } = usePatientCreds();
  const { credentials } = useCredentials();
  const isBoss = useRole();

  const patientName = patientCreds?.firstname + " " + patientCreds?.lastname;

  const [name, setName] = useState<string | null>(null)
  const [note, setNote] = useState<string | null>(null)
  const [doctor, setDoctor] = useState<string | null>(treatmentDetail ? treatmentDetail.doctor : credentials?.name)
  const [date, setDate] = useState<string | null>(treatmentDetail ? treatmentDetail.date : dayjs().format("DD/MM/YYYY"))

  // FIXME:
  useEffect(() => {
    setNote(treatmentDetail ? treatmentDetail.note : "");
    setName(treatmentDetail ? treatmentDetail?.name : patientName)
  }, [treatmentDetail])
  
  const classes = useStyles();

  const handleClose = () => {
    setTreatmentModal(false);
    setTreatmentDetail(null);
    console.log(patientName)
  };

  // nui functions

  // sending new treatment
  const handleNewTreatment = () => {
    console.log(name)
    Nui.send('ambu:newTreatmeant', {
      name,
      note,
      doctor,
      date
    })
    setTreatmentModal(false);
    setTreatmentDetail(null);

  }

  // launch server with +set sv_enforceGameBuild 2060

  // updating treatment
  const handleUpdateTreatment = () => {
    Nui.send('ambu:updateTreatment', {
      id: treatmentDetail?.id,
      name,
      note,
      doctor,
      date
    })
    setTreatmentModal(false);
    setTreatmentDetail(null);
  }

  const handleDeleteTreatment = () => {
    Nui.send('ambu:deleteTreatment', {
      id: treatmentDetail?.id,
      name
    })
  }
  const ModalActions = () => {
    return (
      <div>
        {!treatmentDetail ? <Button onClick={handleNewTreatment} className={classes.modalAction}>Lagre</Button> : null}
        {treatmentDetail ? <Button onClick={handleUpdateTreatment} className={classes.modalAction}>Oppdater</Button> : null}
        {isBoss === 'boss' ? <Button onClick={handleDeleteTreatment} className={classes.modalActionDelete}>Slett</Button> : null}
      </div>
    )
  }

  if (!treatmentDetail && !patientCreds) return null

  return (
    <div>
      <Modal visible={treatmentModal}>
      <Button  className={classes.modalCloseButton} onClick={handleClose}><CloseIcon /></Button>
        <Typography variant="h4" className={classes.modalHeader}>{treatmentDetail ? 'Behandling' : 'Ny Behandling'}</Typography>
        <div style={{ marginBottom: 100, marginTop: 50 }}>
          <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={4}>
              <div style={{ margin: 20 }}>
                <div>
                  <FontAwesomeIcon style={{ display: 'flex', fontSize: 20, color: '#fff'}} icon={faUser} />
                  <TextField
                    className={classes.inputRootLeft}
                    value={name}
                    placeholder="Pasient"
                    inputProps={{
                      className: classes.inputInput,
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div >
                  <FontAwesomeIcon style={{ display: 'flex', fontSize: 20, color: '#fff'}} icon={faCalendar} />
                  <TextField
                    value={date}
                    placeholder="Dato"
                    inputProps={{
                      className: classes.inputInput,
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <TextField 
                  className={classes.inputRootRight}
                  placeholder="Notat"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  inputProps={{
                    className: classes.inputArea,
                  }}
                  variant="outlined"
                  rows={8}
                  multiline
                />
              </div>
              <div style={{ marginTop: 30 }}>
                <FontAwesomeIcon style={{ display: 'flex', fontSize: 20, color: '#fff'}} icon={faUserNurse} />
                <TextField
                  className={classes.inputRootRight}
                  value={doctor}
                  placeholder="Navn på loggfører"
                  inputProps={{
                    className: classes.inputDoctor,
                  }}
                />
              </div>
              <div style={{ display: 'flex' }}>
                {overview ? null : <ModalActions />}
              </div>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};



export default TreatmentModal;
