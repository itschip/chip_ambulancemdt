import { Client } from 'esx.js'

import './cl_main';
import './cl_patients'
import './cl_treatments';

export let ESX: Client = null;

setTick(() => {
  while (ESX === null) {
    emit("esx:getSharedObject", (obj: Client) => (ESX = obj));
  }
});