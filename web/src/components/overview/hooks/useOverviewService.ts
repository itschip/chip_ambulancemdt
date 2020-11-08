import { overviewState } from './state';
import { useSetRecoilState } from 'recoil';
import { useUnits } from './useUnits';
import { useNuiEvent } from '../../../nui-events/hooks/useNuiEvent';

export const useOverviewService = () => {
  const setUtils = useSetRecoilState(overviewState.units);
  useNuiEvent("AMBULANCE_UNITS", 'setUnits', setUtils);
  return useUnits(); 
}