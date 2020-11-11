import { useRecoilValue } from 'recoil';
import { treatmentState } from './state';
import { ITreatment } from '../../../interfaces/treatment';

interface ITreatmentHook {
  treatments: ITreatment | null
}

export const useTreatments = (): ITreatmentHook => {
  const treatments = useRecoilValue<ITreatment | null>(treatmentState.treatments)
  return { treatments }
}