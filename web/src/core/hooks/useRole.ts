import { useRecoilValue } from 'recoil';
import { coreState } from './state';

export const useRole = (): any => {
  const role = useRecoilValue(coreState.role);
  return role;
}

