import { atom } from 'recoil';

export const overviewState = {
  units: atom({
    key: 'ambulanceUnits',
    default: null
  })
}