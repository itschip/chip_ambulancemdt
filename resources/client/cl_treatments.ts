import events from '../utils/events';

RegisterNuiCallbackType(events.TREATMETNS_FETCH_SCOPED_TREATMENTS);
on(`__cfx_nui:${events.TREATMETNS_FETCH_SCOPED_TREATMENTS}`, (data: any) => {
  const patientName = data.patientName
  emitNet(events.TREATMETNS_FETCH_SCOPED_TREATMENTS, patientName);
})

// update treatment
RegisterNuiCallbackType(events.TREATMENTS_UPDATE_TREATMENTS);
on(`__cfx_nui:${events.TREATMENTS_UPDATE_TREATMENTS}`, (data: any) => {
  emitNet(events.TREATMENTS_UPDATE_TREATMENTS, data)
})

onNet(events.TREATMENTS_UPDATE_TREATMENTS_RESULT, (result: string) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCECAD",
      method: "setNotification",
      data: result,
    })
  )
})


// Add new  treatment

RegisterNuiCallbackType(events.TREATMENTS_ADD_TREATMENT)
on(`__cfx_nui:${events.TREATMENTS_ADD_TREATMENT}`, (data: any) => {
  emitNet(events.TREATMENTS_ADD_TREATMENT, data)
})

onNet(events.TREATMENTS_ADD_TREATMENT_SUCCESS, (treatment: any) => {
  emitNet(events.TREATMETNS_FETCH_SCOPED_TREATMENTS, treatment.name)
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCECAD",
      method: "setNotification",
      data: 'treatmentAddedSuccessful',
    })
  )
})

onNet(events.TREATMENTS_ADD_TREATMENT_FAILED, () => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCECAD",
      method: "setNotification",
      data: 'treatmentUpdatedSuccessful',
    })
  )
})



// sending treatments to nui
onNet(events.TREATMENTS_SEND_TREATMENTS, (treatments: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "TREATMENTS",
      method: "setTreatments",
      data: treatments
    })
  )
})

onNet(events.TREATMENTS_SEND_SCOPED_TREATMENTS, (scopedTreatments: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "TREATMENTS",
      method: "setTreatments",
      data: scopedTreatments
    })
  )
})

// delete treatment

RegisterNuiCallbackType(events.TREATMENTS_DELETE_TREATMENT);
on(`__cfx_nui:${events.TREATMENTS_DELETE_TREATMENT}`, (data: any) => {
  emitNet(events.TREATMENTS_DELETE_TREATMENT, data)
})

onNet(events.TREATMENTS_DELETE_TREATMENT_SUCCESS, (treatment: any) => {
  emitNet(events.TREATMETNS_FETCH_SCOPED_TREATMENTS, treatment.name)
})

onNet(events.TREATMENTS_DELETE_TREATMENT_RESULT, (result: string) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCECAD",
      method: "setNotification",
      data: result,
    })
  )
})


