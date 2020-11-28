import events from '../utils/events';
import { ESX, getSource } from './server';

let ambutest: any = [];

RegisterCommand('checkplayers', (source: any, args: any, raw: any) => {
  fetchOnlinePlayersTest()
  ambutest.forEach((element: any) => {
    console.log("name:")
    console.log(element)
  });
}, false)



function fetchOnlinePlayersTest() {
  const players = ESX.GetPlayers();

  for (let index = 0; index < players.length; index++) {
    const xPlayer = ESX.GetPlayerFromId(players[index]);
    if (ambutest.includes(xPlayer.getName())) {
      console.log("name is already in the database")
    } else {
      ambutest.push(xPlayer.getName());
      console.log("player pushed")
    }
  }
  ambutest.forEach((element: any) => {
    console.log("name:" + element)
  });
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

