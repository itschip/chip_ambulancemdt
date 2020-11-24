import { useRecoilState } from 'recoil';
import { IEmployee } from '../../../interfaces/employees';
import { employeeState } from './state';

interface IEmployeeDetailHook {
  detail: IEmployee | null;
  setDetail: any;

}

export const useEmployeeDetail = (): IEmployeeDetailHook => {
  const [ detail, setDetail ] = useRecoilState(employeeState.employeeDetail);
  return { detail, setDetail };
}

