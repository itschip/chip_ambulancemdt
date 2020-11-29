import events from '../utils/events';


onNet(events.PATIENTS_SEND_ALL_PATIENTS, (patients: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "PATIENTS",
      method: "setPatients",
      data: patients
    })
  )
})

RegisterNuiCallbackType(events.PATIENTS_UPDATE_CREDENTIALS);
on(`__cfx_nui:${events.PATIENTS_UPDATE_CREDENTIALS}`, (data: any) => {
  emitNet(events.PATIENTS_UPDATE_CREDENTIALS, data)
})

RegisterNuiCallbackType(events.PATIENTS_SEARCH_PATIENTS);
on(`__cfx_nui:${events.PATIENTS_SEARCH_PATIENTS}`, (data: any) => {
  console.log(data.filterPatient);
  emitNet(events.PATIENTS_SEARCH_PATIENTS, data)

})

onNet(events.PATIENTS_UPDATE_CREDENTIALS_SUCCESS, () => {
  emitNet(events.PATIENTS_FETCH_ALL_PATIENTS);
})

