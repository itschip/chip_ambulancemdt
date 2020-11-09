RegisterCommand('cad:show', (source: number, args: string[], raw: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setVisibility",
      data: true
    })
  )
}, false)

RegisterCommand('cad:hide', (source: number, args: string[], raw: any) => {
  SendNuiMessage(
    JSON.stringify({
      app: "AMBULANCEMDT",
      method: "setVisibility",
      data: false
    })
  )
}, false)