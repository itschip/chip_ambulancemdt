import { atom } from 'recoil';

export const treatmentState = {
  treatments: atom({
    key: "treatments",
    default: null
  }),
  modal: atom({
    key: 'treatmentsModalYo',
    default: false
  }),
  detail: atom({
    key: 'tDetail',
    default: null
  })
}