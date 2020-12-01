import { useRecoilState } from 'recoil';
import { notificatonState } from './state';

export const useNotificaton = () => {
  const [notification, setNotificaton] = useRecoilState(notificatonState.actionStatus);
  return { notification , setNotificaton};
}