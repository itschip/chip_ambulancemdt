import {
  Button,
  Typography,
  Avatar as MuiAvatar,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useTreatments } from "../../../treatments/hooks/useTreatments";
import { usePatientCreds } from "../../hooks/usePatientCreds";
import useStyles from "./patient.styles";
import EditIcon from "@material-ui/icons/Edit";
import { CredsModal } from "./CredsModal";
import { useCredsModal } from "../../hooks/useCredsModal";

import "./Patient.css";
import { TreatmentCard } from "./treatments/TreatmentCard"
import TreatmentModal from "../../../treatments/components/TreatmentModal";
import { useTreatmentModal } from "../../../treatments/hooks/useTreatmentModal";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useTreatmentDetail } from "../../../treatments/hooks/useTreatmentDetail";


const PatientOverview = () => {
  const { treatments } = useTreatments();
  const { patientCreds } = usePatientCreds();
  const { credsModal, setCredsModal } = useCredsModal();
  const { treatmentModal, setTreatmentModal } = useTreatmentModal();
  const { setTreatmentDetail } = useTreatmentDetail()

  const classes = useStyles();

  const openCredsModal = () => {
    setCredsModal(true);
  };

  const openEmptyTreatment = () => {
    setTreatmentModal(true)
  }

  if (!patientCreds || !treatments)
    return <Typography variant="h3">Could not fetch data</Typography>;

  return (
    <div className="patient-overview">
      <TreatmentModal overview={false}/>
      <CredsModal />
      <div className={credsModal || treatmentModal ? classes.backgroundModal : undefined} />
      <div className={classes.modalHeader}>
        <MuiAvatar className={classes.avatar} src={patientCreds?.avatar} />
        <Typography variant="h4" className={classes.modalTitle}>
          {patientCreds?.firstname} {patientCreds.lastname}
        </Typography>
        <Typography className={classes.patientHeaderInfo}>
          <span style={{ fontWeight: 600 }}>Alder:</span> {patientCreds.dateofbirth}
        </Typography>
        <Typography className={classes.patientHeaderInfo}>
          <span style={{ fontWeight: 600 }}>Blodtype:</span>{" "}
          {patientCreds.bloodtype}
        </Typography>
        <Typography className={classes.patientHeaderInfo}>
          <span style={{ fontWeight: 600 }}>Fastlege:</span>{" "}
          {patientCreds.doctor}
        </Typography>
        <Typography className={classes.patientHeaderInfo}>
          <span style={{ fontWeight: 600 }}>Telefon:</span>{" "}
          {patientCreds.phone_number}
        </Typography>
        <Button
          variant="contained"
          onClick={openCredsModal}
          className={classes.editPatientBtn}
        >
          <EditIcon />
        </Button>
      </div>
      <div className={classes.overviewContent}>
        <div style={{ display: 'flex' }}>
          <Typography className={classes.overviewTitle} variant="h5">Behandlinger</Typography>'
          <Button onClick={openEmptyTreatment} style={{ color: '#fff' }}><AddCircleIcon /></Button>
        </div>
        <div className={classes.overviewCards}>
          <Grid container spacing={2}>
            {treatments
              .filter((treatment) => treatment.name.includes(patientCreds.firstname))
              .map((treatment) => (
                <Grid key={treatment.id} item xs={3}>
                  <TreatmentCard key={treatment.id} {...treatment}/>
                </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PatientOverview;
