import { useRecoilState } from 'recoil';
import { employeeState } from './state';

export const useModal = () => {
  const [ modal, setModal ] = useRecoilState(employeeState.modal);
  return { modal, setModal };
}