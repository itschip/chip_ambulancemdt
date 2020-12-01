import { atom } from 'recoil';

export const coreState = {
  visibility: atom({
    key: 'coreStateHidden',
    default: false
  }),
  credentials: atom({
    key: 'credentialsSource',
    default: null
  }),
  role: atom({
    key: 'ambuCadRole',
    default: "user"
  })
}