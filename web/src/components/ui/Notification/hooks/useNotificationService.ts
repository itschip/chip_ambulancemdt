import { useSetRecoilState } from 'recoil';
import { useNuiEvent } from '../../../../nui-events/hooks/useNuiEvent';
import { notificatonState } from './state';
import { useNotificaton } from './useNotification';

export const useNotificationService = () => {
  const setNotification = useSetRecoilState(notificatonState.actionStatus);
  useNuiEvent('AMBULANCECAD', 'setNotification', setNotification);
  return useNotificaton();
}
