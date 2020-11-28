import events from '../utils/events';
import { Delay } from '../utils/fivem';
import { ESX } from './client';

on('esx:setJob', (job: any) => {
  ESX.GetPlayerData().job = job
})

let cadOpen = false;

RegisterCommand('journal', (source: any, args: any, raw: any) => {
  if (ESX.GetPlayerData().job.name == "ambulance") {
    if (!cadOpen) {
      cadOpen = true
      cadOpenAnim()
      newCadProp()
      checkRole()
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
      emitNet(events.FETCH_AMBULANCEPLAYERS);

    } else if (cadOpen) {
      cadOpen = false;
      SendNuiMessage(
        JSON.stringify({
          app: "AMBULANCEMDT",
          method: "setVisibility",
          data: false
        })
      )
      SetNuiFocus(false, false);
      cadCloseAnim()
    }
  } else {
    console.log("fuck off")
  }
}, false);


let prop = 0;
let propCreated = false;
let cadModel = "prop_cs_tablet"; 

const newCadProp = async () => {
  deleteCad(); 
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
    );
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
  cadOpen = false
})

function checkRole() {
  let jobRole = ESX.GetPlayerData().job.grade_name; 
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setRole",
      data: jobRole
    })
  )
}

onNet(events.SEND_AMBULANCEPLAYERS, (ambulancePlayers: any[]) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCE_UNITS",
      method: "setUnits",
      data: ambulancePlayers
    })
  )
})

RegisterNuiCallbackType(events.EMPLOYEES_FETCH_EMPLOYEES);
on(`__cfx_nui:${events.EMPLOYEES_FETCH_EMPLOYEES}`, () => {
  emitNet(events.EMPLOYEES_FETCH_EMPLOYEES)
})

RegisterNuiCallbackType(events.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS);
on(`__cfx_nui:${events.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS}`, (data: any) => {
  emitNet(events.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS, data.doctor)
})

onNet(events.EMPLOYEES_SEND_EMPLOYEES, (employees: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: 'AMBULANCECAD',
      method: 'setEmployees',
      data: employees
    })
  )
})