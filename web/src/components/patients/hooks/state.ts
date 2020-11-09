import { atom } from 'recoil';

export const patientState = {
  patients: atom({
    key: 'patientsList',
    default: null
  }),
  filterPatients: atom({
    key: 'filterPatient',
    default: ""
  })
}