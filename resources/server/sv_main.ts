import events from '../utils/events';
import { ESX, getSource } from './server';

onNet(events.FETCH_CREDENTIALS, async () => {
  const name = ESX.GetPlayerFromId(getSource()).getName()
  const credentials = {
    name
  }
  TriggerClientEvent(events.SEND_CREDENTIALS, getSource(), credentials)
})