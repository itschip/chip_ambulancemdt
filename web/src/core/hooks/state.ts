import { atom } from 'recoil';

export const coreState = {
  visibility: atom({
    key: 'coreStateHidden',
    default: true
  }),
  credentials: atom({
    key: 'credentialsSource',
    default: null
  }),
  role: atom({
    key: 'ambuCadRole',
    default: "boss"
  })
}