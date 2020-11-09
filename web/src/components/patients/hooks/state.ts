import { atom } from 'recoil';

export const patientState = {
  patients: atom({
    key: 'patientsList',
    default: null
  }),
  filterPatients: atom({
    key: 'filterPatient',
    default: ""
  }),
  showModal: atom({
    key: 'patientModal',
    default: false
  }),
  patientCredentials: atom({
    key: 'patientCred',
    default: null
  }), 
  patientTreatments: atom({
    key: 'patientTreatments',
    default: null  
  })
}