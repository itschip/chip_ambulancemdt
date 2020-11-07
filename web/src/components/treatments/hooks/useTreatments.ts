import { useRecoilValue } from 'recoil';
import { treatmentState } from './state';
import { ITreatmentCard } from '../../../interfaces/treatment';

interface ITreatmentsHook {
  treatments: ITreatmentCard | null;
}

export const useTreatments = (): ITreatmentsHook => {
  const treatments = useRecoilValue<ITreatmentCard | null>(treatmentState.treatments)
  return { treatments }
}