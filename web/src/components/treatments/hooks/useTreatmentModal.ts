import { useRecoilState } from 'recoil';
import { treatmentState } from './state';

export const useTreatmentModal = () => {
  const [ treatmentModal, setTreatmentModal ] = useRecoilState(treatmentState.modal);
  return { treatmentModal, setTreatmentModal }
}