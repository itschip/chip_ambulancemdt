import { useRecoilValue } from 'recoil';
import { overviewState } from './state';

export const useUnits = (): any => {
  const units = useRecoilValue(overviewState.units);
  return { units };
}