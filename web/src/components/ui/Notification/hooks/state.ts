import { atom } from 'recoil';

export const notificatonState = {
  actionStatus: atom({
    key: 'actionStatus',
    default: null
  })
}