import { Server } from "esx.js";

import './db';
import './sv_main';
import './sv_patients';
import './functions';
import './sv_treatments';
import './sv_employees';

export let ESX: Server = null;

emit("esx:getSharedObject", (obj: Server) => (ESX = obj));

export const getSource = () => parseInt(source);