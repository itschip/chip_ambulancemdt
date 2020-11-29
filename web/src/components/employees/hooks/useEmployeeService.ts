import { useSetRecoilState } from 'recoil';
import { useNuiEvent } from '../../../nui-events/hooks/useNuiEvent';
import { employeeState } from './state';
import { useEmployees } from './useEmployees';
import { useGrade } from "./useGrade";

export const useEmployeeService = () => {
  const setEmployee = useSetRecoilState(employeeState.employees);
  const setJobGrade = useSetRecoilState(employeeState.employeeGrade);
  useNuiEvent("AMBULANCECAD", "setEmployees", setEmployee);
  useNuiEvent("AMBULANCECAD", "setJobGrade", setJobGrade);
  return { useEmployees, useGrade };
}