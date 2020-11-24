export interface IEmployee {
  id: number;
  firstname?: string;
  lastname?: string;
  name?: string;
  treatments: number;
  licenses: string[];
  role: string;
  callsign: string;
  job_grade: string;

  map?: any;
}