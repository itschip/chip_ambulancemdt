import { atom } from 'recoil';

export const treatmentState = {
  treatments: atom({
    key: "treatments",
    default: null
  })
}