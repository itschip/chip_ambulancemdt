import { useSetRecoilState } from 'recoil';
import { useVisibility } from './useVisibility';
import { coreState } from './state';
import { useNuiEvent } from '../../nui-events/hooks/useNuiEvent';
import { useCredentials } from './useCredentials';
import { useRole } from './useRole';


export const useCadService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  const setCredentials = useSetRecoilState(coreState.credentials);
  const setRole = useSetRecoilState(coreState.role);
  useNuiEvent("AMBULANCEMDT", "setVisibility", setShowHide);
  useNuiEvent("AMBULANCEMDT", "setCredentials", setCredentials);
  useNuiEvent("AMBULANCEMDT", "setRole", setRole);
  return { useVisibility, useCredentials, useRole }
}