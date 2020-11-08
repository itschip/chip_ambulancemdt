import { useSetRecoilState } from 'recoil';
import { useNuiEvent } from '../../../nui-events/hooks/useNuiEvent';
import { patientState } from './state';
import { usePatients } from './usePatients';

export const usePatientService = () => {
  const setPatients = useSetRecoilState(patientState.patients)
  useNuiEvent('PATIENTS', 'setPatients', setPatients);
  return usePatients();
}