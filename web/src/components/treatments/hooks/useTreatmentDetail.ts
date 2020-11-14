import { useRecoilState } from 'recoil';
import { ITreatment } from '../../../interfaces/treatment';
import { treatmentState } from './state';

interface ITreatmentHook {
  treatmentDetail: ITreatment | null;
  setTreatmentDetail: any;
}

export const useTreatmentDetail = (): ITreatmentHook => {
  const [ treatmentDetail, setTreatmentDetail ] = useRecoilState(treatmentState.detail);
  return { treatmentDetail, setTreatmentDetail };
}