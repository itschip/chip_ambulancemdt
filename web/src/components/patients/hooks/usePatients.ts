import { useRecoilValue } from 'recoil';
import { patientState } from './state';

export const usePatients = (): any => {
  const patients = useRecoilValue(patientState.patients);
  return { patients };
}