import { useRecoilState } from "recoil";
import { patientState } from "./state";

export const useFilteredPatients = () => {
  const [filterPatient, setFilterPatient] = useRecoilState(patientState.filterPatients);
  return { filterPatient, setFilterPatient };
};
