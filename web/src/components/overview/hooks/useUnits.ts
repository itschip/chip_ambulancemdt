import { useRecoilValue } from 'recoil';
import { overviewState } from './state';

export const useUnits = (): string[] => {
  const units = useRecoilValue(overviewState.units);
  return units;
}