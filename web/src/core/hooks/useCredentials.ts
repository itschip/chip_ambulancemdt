import { useRecoilValue } from 'recoil';
import { coreState } from './state';

import { ICredentials } from '../../interfaces/credentials';

interface ICredentialsHook {
  credentials: ICredentials | null
}

export const useCredentials = (): any => {
  const credentials  = useRecoilValue(coreState.credentials);
  return { credentials }
}