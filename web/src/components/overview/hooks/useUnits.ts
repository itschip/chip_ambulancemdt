import { useRecoilState } from 'recoil';
import { overviewState } from './state';

interface IUnitsHook {
  units: any;
  setUnits: any;
}

export const useUnits = (): IUnitsHook => {
  const [ units, setUnits ] = useRecoilState(overviewState.units);
  return { units, setUnits };
}