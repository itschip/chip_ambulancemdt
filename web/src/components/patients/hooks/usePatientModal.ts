import { useRecoilState } from 'recoil';
import { patientState } from './state';

export const usePatientModal = () => {
  const [ patientModal, setPatientModal ] = useRecoilState(patientState.showModal);
  return { patientModal, setPatientModal };
}