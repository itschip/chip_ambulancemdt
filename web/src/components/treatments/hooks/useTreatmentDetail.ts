import { useRecoilState } from 'recoil';
import { ITreatment } from '../../../interfaces/treatment';
import { treatmentState } from './state';

interface ITreatDetailHook {
  treatmentDetail: ITreatment | null;
  setTreatmentDetail: any;
}

export const useTreatmentDetail = (): ITreatDetailHook => {
  const [ treatmentDetail, setTreatmentDetail ] = useRecoilState(treatmentState.detail);
  return { treatmentDetail, setTreatmentDetail };
}