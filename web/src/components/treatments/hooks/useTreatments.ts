import { useRecoilValue } from 'recoil';
import { treatmentState } from './state';
import { ITreatmentCard } from '../../../interfaces/treatment';


export const useTreatments = (): any => {
  const treatments = useRecoilValue(treatmentState.treatments)
  return { treatments }
}