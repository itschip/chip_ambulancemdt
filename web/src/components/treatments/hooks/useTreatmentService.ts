import { useSetRecoilState } from 'recoil';
import { treatmentState } from './state';
import { useTreatments } from './useTreatments';
import { useNuiEvent } from '../../../nui-events/hooks/useNuiEvent';


export const useTreatmentService = () => {
  const setTreatments = useSetRecoilState(treatmentState.treatments);
  useNuiEvent("TREATMENTS", "setTreatments", setTreatments);
  return useTreatments();
}