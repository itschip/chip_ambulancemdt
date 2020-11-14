import { useSetRecoilState } from 'recoil';
import { useVisibility } from './useVisibility';
import { coreState } from './state';
import { useNuiEvent } from '../../nui-events/hooks/useNuiEvent';
import { useCredentials } from './useCredentials';


export const useCadService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  const setCredentials = useSetRecoilState(coreState.credentials);
  useNuiEvent("AMBULANCEMDT", "setVisibility", setShowHide);
  useNuiEvent("AMBULANCEMDT", "setCredentials", setCredentials);
  return { useVisibility, useCredentials }
}