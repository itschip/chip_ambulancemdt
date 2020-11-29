import { useRecoilValue } from 'recoil';
import {employeeState} from "./state";

export const useGrade = () => {
  const grade = useRecoilValue(employeeState.employeeGrade);
  return grade;
}