import { useRecoilValue } from 'recoil';
import { IEmployee } from '../../../interfaces/employees';
import { employeeState } from './state';

interface IEmployeeHook {
  employees: IEmployee | null;
}

export const useEmployees = (): IEmployeeHook => {
  const employees = useRecoilValue(employeeState.employees);
  return { employees }
}