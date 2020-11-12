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
  showCredsModal: atom({
    key: 'showCredsModal',
    default: false
  }),
  patientCredentials: atom({
    key: 'patientCred',
    default: null
  }), 
  patientTreatmentModal: atom({
    key: 'patientTreatmentModal',
    default: false
  }),
  treatModal: atom({
    key: 'abcd',
    default: true
  }),
  treatDetail: atom({
    key: 'kos',
    default: null
  })
}