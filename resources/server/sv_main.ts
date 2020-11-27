import events from '../utils/events';
import { ESX, getSource } from './server';

let ambulancePlayers: any = [];

async function fetchOnlinePlayers() {
  const players = ESX.GetPlayers();

  for (let index = 0; index < players.length; index++) {
    const xPlayer = ESX.GetPlayerFromId(players[index]);
    if (ambulancePlayers.includes(xPlayer.getName())) {
      console.log("name is already in the database")
    } else {
      ambulancePlayers.push(xPlayer.getName());
    }
  }
  emitNet(events.SEND_AMBULANCEPLAYERS, getSource(), ambulancePlayers);
}

RegisterCommand('checkplayers', (source: any, args: any, raw: any) => {
  fetchOnlinePlayers()
  ambulancePlayers.forEach((element: any) => {
    console.log(element.name)
  });
}, false)


onNet(events.FETCH_AMBULANCEPLAYERS, () => {
  fetchOnlinePlayers();
})


onNet(events.FETCH_CREDENTIALS, async () => {
  const name = ESX.GetPlayerFromId(getSource()).getName()
  const credentials = {
    name
  }
  emitNet(events.SEND_CREDENTIALS, getSource(), credentials)
})

