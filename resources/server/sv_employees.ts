import { pool } from './db';
import { IEmployee } from '../../web/src/interfaces/employees';
import events from '../utils/events';
import { getSource } from './server'
import { EEXIST } from 'constants';

interface IJobThing {
  label: any;
  job_grade: any;
}

async function fetchEmployees(): Promise<IEmployee[]> {
  const query = "SELECT firstname, lastname, job_grade FROM users WHERE job = 'ambulance' OR job = 'offambulance'";
  const [results] = await pool.query(query);
  const employees = <IEmployee[]>results;
  return employees;
}

async function fetchJobGrade(employee: any): Promise<IJobThing[]> {
  const query = "SELECT job_grade FROM users WHERE firstname = ? AND lastname = ?";
  const [ results ] = await pool.query(query, [employee.firstname, employee.lastname])
  const jobGrade = <IJobThing[]>results;
  return jobGrade;
}

async function fetchJobLabel(jobGrade: any): Promise<string> {
  const query = "SELECT label FROM job_grades WHERE grade = ? AND job_name = 'ambulance'"
  const [ results ] = await pool.query(query, [jobGrade]);
  const jobLabel =<IJobThing[]>results;
  return jobLabel[0].label;
}

onNet(events.EMPLOYEES_FETCH_EMPLOYEES, async () => {
  const employees = await fetchEmployees();
  emitNet(events.EMPLOYEES_SEND_EMPLOYEES, getSource(), employees);
})

onNet(events.EMPLOYEES_FETCH_JOBLABEL, async (employee: any) => {
  try {
    const _source = (global as any).source;
    const jobGrade = await fetchJobGrade(employee);
    const jobLabel = await fetchJobLabel(jobGrade);
    emitNet(events.EMPLOYEES_SEND_JOBLABEL, _source, jobLabel);
  } catch (error) {
    console.log(error)
  }
})


