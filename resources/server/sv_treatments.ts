import events from "../utils/events";
import { ESX, getSource } from "./server";
import { ITreatment } from "../../web/src/interfaces/treatment";
import { pool } from "./db";

/**
 *
 * @param treatment
 * Treatment contains all the types and values.
 */
async function createTreatment(treatment: ITreatment): Promise<any> {
  const query =
    "INSERT INTO or_ambu_treatments (name, date, note, doctor) VALUES (?, ?, ?, ?)";
  await pool.query(query, [
    treatment.name,
    treatment.date,
    treatment.note,
    treatment.doctor,
  ]);
}
/**
 *
 * @param playerName
 * The player's name.
 */
async function fetchAllTreatments(playerName: string): Promise<ITreatment[]> {
  const query = "SELECT * FROM or_ambu_treatments";
  const [results] = await pool.query(query);
  const treatments = <ITreatment[]>results;
  return treatments;
}

async function fetchScopedTreatments(
  playerName: string
): Promise<ITreatment[]> {
  const query = "SELECT * FROM or_ambu_treatments WHERE name = ?";
  const [results] = await pool.query(query, [playerName]);
  const scopedTreatments = <ITreatment[]>results;
  return scopedTreatments;
}

async function fetchEmployeeTreatments(playerName: string): Promise<ITreatment[]> {
  const query = "SELECT * FROM or_ambu_treatments WHERE doctor = ?";
  const [results] = await pool.query(query, [playerName])
  const employeeTreatments = <ITreatment[]>results;
  return employeeTreatments;
}

async function updateTreatments(treatment: ITreatment) {
  const query =
    "UPDATE or_ambu_treatments SET name = ?, date = ?, note = ?, doctor = ? WHERE id = ?";
  await pool.query(query, [
    treatment.name,
    treatment.date,
    treatment.note,
    treatment.doctor,
    treatment.id,
  ]);
}

async function deleteTreatment(treatment: ITreatment) {
  const query = "DELETE FROM or_ambu_treatments WHERE id = ?";
  await pool.query(query, [treatment.id]);
}

// Should probably add two functions. One for scoped treatments and one for every single. Or really just 7,
// which will be used in the overview page.

onNet(events.TREATMENTS_ADD_TREATMENT, (treatment: ITreatment) => {
  createTreatment(treatment);
  emitNet(events.TREATMENTS_ADD_TREATMENT_SUCCESS, getSource(), treatment);
});

onNet(events.TREATMENTS_FETCH_ALL_TREATMENTS, async (patientName: string) => {
  const treatments = await fetchAllTreatments(patientName);
  emitNet(events.TREATMENTS_SEND_TREATMENTS, getSource(), treatments);
});

onNet(events.TREATMETNS_FETCH_SCOPED_TREATMENTS, async (patientName: string) => {
  const scopedTreatments = await fetchScopedTreatments(patientName);
  emitNet(events.TREATMENTS_SEND_TREATMENTS, getSource(), scopedTreatments);
});

onNet(events.TREATMENTS_UPDATE_TREATMENTS, async (treatments: ITreatment) => {
  await updateTreatments(treatments);
});

onNet(events.TREATMENTS_DELETE_TREATMENT, async (treatment: ITreatment) => {
  await deleteTreatment(treatment);
  emitNet(events.TREATMENTS_DELETE_TREATMENT_SUCCESS, getSource(), treatment);
});

onNet(events.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS, async (playerName: string) => {
  const employeeTreatments = await fetchEmployeeTreatments(playerName);
  emitNet(events.TREATMENTS_SEND_TREATMENTS, getSource(), employeeTreatments);
})