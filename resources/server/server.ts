import { ESXServer } from "fivem-esx-js/server/esx_server";

import './db';
import './sv_main';
import './sv_patients';
import './functions';
import './sv_treatments';

export let ESX: ESXServer = null;

emit("esx:getSharedObject", (obj: ESXServer) => (ESX = obj));

export const getSource = () => parseInt(source);
