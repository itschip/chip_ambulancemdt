import React from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import PatientGrid from './components/grid/PatientGrid'
import PatientModal from './components/patient/PatientModal'
import PatientSearch from './components/search/PatientSearch'
import { usePatientModal } from './hooks/usePatientModal';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundModal: {
    background: "black",
    opacity: "0.6",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  }
}))

const PatientContainer = () => {
  const classes = useStyles();
  const { patientModal } = usePatientModal();
  return (
    <div>
      <PatientModal />
      <div className={patientModal ? classes.backgroundModal : undefined} />
      <PatientSearch /> 
      <PatientGrid />
    </div>
  )
}

export default PatientContainer;
