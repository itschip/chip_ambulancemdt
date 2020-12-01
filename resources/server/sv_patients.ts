import { pool } from "./db";
import events from "../utils/events";
import { ESX, getSource } from "./server";
import { IPatient } from "../../web/src/interfaces/patients";


async function getFilteredPatients(search: string): Promise<any> {
  const query =
    "SELECT firstname, lastname, dateofbirth, bloodtype, avatar, phone_number, doctor FROM users WHERE lower(firstname) LIKE lower(?) LIMIT 50";
  const [results] = await pool.query(query, [`%${search}%`]);
  const patients = results;
  return patients;
}

async function updatePatientCredentials(credentials: IPatient) {
  const query =
    "UPDATE users SET bloodtype = ?, avatar = ?, doctor = ? WHERE firstname = ? AND lastname = ?";
  await pool.query(query, [
    credentials.blood,
    credentials.avatar,
    credentials.doctor,
    credentials.firstname,
    credentials.lastname,
  ]);
}

onNet(events.PATIENTS_UPDATE_CREDENTIALS, async (credentials: IPatient) => {
  await updatePatientCredentials(credentials);
  emitNet(events.PATIENTS_UPDATE_CREDENTIALS_SUCCESS, getSource());
});

onNet(events.PATIENTS_SEARCH_PATIENTS, async (search: any) => {
  const patients = await getFilteredPatients(search.filterPatient);
  emitNet(events.PATIENTS_SEND_ALL_PATIENTS, getSource(), patients);
});
