import { useSetRecoilState } from 'recoil';
import { useNuiEvent } from '../../../nui-events/hooks/useNuiEvent';
import { employeeState } from './state';
import { useEmployees } from './useEmployees';

export const useEmployeeService = () => {
  const setEmployee = useSetRecoilState(employeeState.employees);
  useNuiEvent("AMBULANCECAD", "setEmployees", setEmployee);
  return useEmployees();
}