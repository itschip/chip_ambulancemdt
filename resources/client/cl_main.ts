import events from '../utils/events';
import { Delay } from '../utils/fivem';

RegisterCommand('cad:show', (source: any, args: any, raw: any) => {
  cadOpenAnim()
  newCadProp()
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setVisibility",
      data: true
    })
  )
  SetNuiFocus(true, true);
  emitNet(events.PATIENTS_FETCH_ALL_PATIENTS);
  emitNet(events.FETCH_CREDENTIALS)
}, false);


let prop = 0;
let propCreated = false;
let cadModel = "prop_cs_tablet"; // Refered to in newphoneProp function. Requires custom phone being streamed.

const newCadProp = async () => {
  //Function for creating the phone prop
  deleteCad(); //deletes the already existing prop before creating another.
  if (!propCreated) {
    RequestModel(cadModel);
    while (!HasModelLoaded(cadModel)) {
      await Delay(1);
    }

    const playerPed = PlayerPedId();
    const [x, y, z] = GetEntityCoords(playerPed, true);
    prop = CreateObject(
      GetHashKey(cadModel),
      x,
      y,
      z + 0.2,
      true,
      true,
      true
    );
    const boneIndex = GetPedBoneIndex(playerPed, 28422);
    AttachEntityToEntity(
      prop,
      playerPed,
      boneIndex,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      -0.0,
      true,
      true,
      false,
      true,
      1.0,
      true
    ); //-- Attaches the phone to the player.
    propCreated = true;
  } else if (propCreated) {
    console.log("prop already created");
  }
};

function deleteCad() {
  if (prop != 0) {
    DeleteEntity(prop);
    prop = 0;
    propCreated = false;
  }
}


async function loadAnimDict(dict: any) {
  while (!HasAnimDictLoaded(dict)) {
    RequestAnimDict(dict);
    await Delay(100);
  } 
}

 
// amb@world_human_seat_wall_tablet@female@base | base

async function cadOpenAnim() {
  deleteCad()
  const dict = "amb@world_human_seat_wall_tablet@female@base"
  await loadAnimDict(dict);
  TaskPlayAnim(PlayerPedId(), dict, "base", 6.0, -1, -1, 50, 0, false, false, false)
  await Delay(300);
  await newCadProp();
}
 
function cadCloseAnim() {
  deleteCad();
  ClearPedTasks(PlayerPedId())

}


RegisterCommand('cad:hide', (source: any, args: any, raw: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setVisibility",
      data: false
    })
  )
  SetNuiFocus(false, false);
  cadCloseAnim()
}, false);

onNet(events.SEND_CREDENTIALS, (credentials: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setCredentials", 
      data: credentials
    })
  )
});

RegisterNuiCallbackType('ambu:cad:close');
on(`__cfx_nui:ambu:cad:close`, () => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setVisibility",
      data: false
    })
  )
  cadCloseAnim()
  SetNuiFocus(false, false);
})
