import { pool } from './db';
import events from '../utils/events';
import { ESX, getSource } from './server';
import { IPatient } from '../../web/src/interfaces/patients';


async function getAllPatients(): Promise<any> {
  const query = "SELECT * FROM users";
  const [ results ] = await pool.query(query);
  const patients = results;
  return patients;
}


async function fetchPatientCredentials(playerName: string): Promise<IPatient[]> {
  const query = "SELECT firstname, lastname, dateofbirth, bloodtype, avatar, phone_number FROM users"; 
  const [ results ] = await pool.query(query);
  const credentials = <IPatient[]>results;
  return credentials;
}


async function updatePatientCredentials(credentials: IPatient) {
  const query = "UPDATE users SET bloodtype = ?, avatar = ? WHERE firstname = ? AND lastname = ?";
  await pool.query(query, [
    credentials.blood,
    credentials.avatar,
    credentials.firstname,
    credentials.lastname
  ])
}

onNet(events.PATIENTS_FETCH_ALL_PATIENTS, async () => {
  const _source = (global as any).source
  try {
    const patients = await getAllPatients();
    emitNet(events.PATIENTS_SEND_ALL_PATIENTS, _source, patients) 
  } catch (error) {
    console.log("ERROR: ", error)
  }
})

onNet(events.PATIENTS_UPDATE_CREDENTIALS, async (credentials: IPatient) => {
  await updatePatientCredentials(credentials) 
  emitNet(events.PATIENTS_UPDATE_CREDENTIALS_SUCCESS, getSource());
})
