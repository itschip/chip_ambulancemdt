import { useRecoilState } from 'recoil';
import { patientState } from './state';

export const useCredsModal = () => {
  const [ credsModal, setCredsModal ] = useRecoilState(patientState.showCredsModal);
  return { credsModal, setCredsModal };
}