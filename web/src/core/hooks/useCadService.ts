import { useSetRecoilState } from 'recoil';
import { useVisibility } from './useVisibility';
import { coreState } from './state';
import { useNuiEvent } from '../../nui-events/hooks/useNuiEvent';


export const useCadService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  useNuiEvent("AMBULANCEMDT", "setVisibility", setShowHide);
  return useVisibility()
}