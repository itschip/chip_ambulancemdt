export interface ITreatmentCard {
  id: number;
  name: string;
  date: string;
  note: string;
  doctor: string;
  tags?: string[];
  map?: any;
}