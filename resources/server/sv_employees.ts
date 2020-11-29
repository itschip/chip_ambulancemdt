import { pool } from './db';
import { IEmployee } from '../../web/src/interfaces/employees';
import events from '../utils/events';
import { getSource } from './server'

interface IJobLabel {
  label: string;
}

async function fetchEmployees(): Promise<IEmployee[]> {
  const query = "SELECT firstname, lastname, job_grade FROM users WHERE job = 'ambulance' OR job = 'offambulance'";
  const [results] = await pool.query(query);
  const employees = <IEmployee[]>results;
  return employees;
}

onNet(events.EMPLOYEES_FETCH_EMPLOYEES, async () => {
  const employees = await fetchEmployees();
  emitNet(events.EMPLOYEES_SEND_EMPLOYEES, getSource(), employees);
})

