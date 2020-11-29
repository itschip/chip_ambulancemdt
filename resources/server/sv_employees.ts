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

async function fetchJobGrade(employee: IEmployee): Promise<number> {
  const query =  "SELECT job_grade FROM users WHERE firstname = ? AND lastname = ?";
  const [results] = await pool.query(query, [employee.firstname, employee.lastname])
  const jobGrade = <IEmployee[]>results;
  return jobGrade[0].job_grade;
}

async function getJobLabel(grade: number): Promise<string> {
  const query = "SELECT label FROM job_grades WHERE grade = ?";
  const [results] = await pool.query(query, [grade]);
  const jobLabel = <IJobLabel[]>results;
  return jobLabel[0].label;
}

onNet(events.EMPLOYEES_FETCH_JOBLABEL, async (employee: IEmployee) => {
  const jobGrade = await fetchJobGrade(employee)
  const jobLabel = await getJobLabel(jobGrade)
  console.log(jobGrade, jobLabel);
  emitNet(events.EMPLOYEES_SEND_JOBLABEL, -1, jobLabel)
})

onNet(events.EMPLOYEES_FETCH_EMPLOYEES, async () => {
  const employees = await fetchEmployees();
  emitNet(events.EMPLOYEES_SEND_EMPLOYEES, getSource(), employees);
})

