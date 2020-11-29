import events from '../utils/events';
import { ESX, getSource } from './server';

let ambutest: any = [];

function fetchOnlinePlayersTest() {
  const players = ESX.GetPlayers();

  for (let index = 0; index < players.length; index++) {
    const xPlayer = ESX.GetPlayerFromId(players[index]);
    if (!ambutest.includes(xPlayer.getName()) && xPlayer.getJob().grade_name === "ambulance") {
      ambutest.push(xPlayer.getName());
    }
  }
  emitNet(events.SEND_AMBULANCEPLAYERS, getSource(), ambutest);
}

onNet(events.FETCH_AMBULANCEPLAYERS, () => {
  fetchOnlinePlayersTest();
})


onNet(events.FETCH_CREDENTIALS, async () => {
  const name = ESX.GetPlayerFromId(getSource()).getName()
  const credentials = {
    name
  }
  emitNet(events.SEND_CREDENTIALS, getSource(), credentials)
})

