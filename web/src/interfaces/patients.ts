export interface IPatients {
  name: string;
  firstname: string;
  lastname: string;
  avatar: string;
  dateofbirth: any;
  bloodtype: string;
  phone_number: string;
}

export interface IPatient {
  avatar: string;
  blood: string;
  phone_number?: string;
  firstname: string;
  lastname: string;
}