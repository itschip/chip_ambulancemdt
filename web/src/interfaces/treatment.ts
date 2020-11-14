export interface ITreatment {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  date: string;
  note: string;
  doctor: string;
  tags?: string[];
  map?: any;
  slice?: any;
  filter?: any;
}