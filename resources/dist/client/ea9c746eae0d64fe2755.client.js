!function(e){var t={};function E(T){if(t[T])return t[T].exports;var a=t[T]={i:T,l:!1,exports:{}};return e[T].call(a.exports,a,a.exports,E),a.l=!0,a.exports}E.m=e,E.c=t,E.d=function(e,t,T){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:T})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var T=Object.create(null);if(E.r(T),Object.defineProperty(T,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)E.d(T,a,function(t){return e[t]}.bind(null,a));return T},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E(E.s=1)}([function(e,t,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PATIENTS_FETCH_ALL_PATIENTS:"ambu:fetchAllPatients",PATIENTS_SEND_ALL_PATIENTS:"ambu:sendAllPatients",PATIENTS_UPDATE_CREDENTIALS:"ambu:updatePatientCredentials",PATIENTS_UPDATE_CREDENTIALS_SUCCESS:"ambu:updatePatientCredentialsSuccess",PATIENTS_SEARCH_PATIENTS:"ambu:searchPatients",TREATMENTS_ADD_TREATMENT:"ambu:newTreatmeant",TREATMENTS_FETCH_ALL_TREATMENTS:"ambu:fetchAllTreatments",TREATMETNS_FETCH_SCOPED_TREATMENTS:"ambu:fetchScopedTreatments",TREATMENTS_SEND_TREATMENTS:"ambu:sendTreatments",TREATMENTS_SEND_SCOPED_TREATMENTS:"ambu:sendScopedTreatments",TREATMENTS_FETCH_EMPLOYEE_TREATMENTS:"ambu:fetchEmployeeTreatments",TREATMENTS_SEND_EMPLOYEE_TREATMENTS:"ambu:sendEmployeeTreatments",TREATMENTS_UPDATE_TREATMENTS:"ambu:updateTreatment",TREATMENTS_ADD_TREATMENT_SUCCESS:"ambu:newTreatmentSuccess",TREATMENTS_DELETE_TREATMENT:"ambu:deleteTreatment",TREATMENTS_DELETE_TREATMENT_SUCCESS:"ambu:deleteTreatmentSuccess",FETCH_CREDENTIALS:"ambu:fetchCredentials",SEND_CREDENTIALS:"ambu:sendCredentials",FETCH_AMBULANCEPLAYERS:"ambu:fetchAmbulancePlayers",SEND_AMBULANCEPLAYERS:"ambu:sendAmbulancePlayers",EMPLOYEES_FETCH_EMPLOYEES:"ambu:fetchAmbulanceEmployees",EMPLOYEES_SEND_EMPLOYEES:"ambu:sendAmbulanceEmployees",EMPLOYEES_FETCH_JOBLABEL:"ambu:fetchJobLabel",EMPLOYEES_SEND_JOBLABEL:"ambu:sendJobLabel"}},function(e,t,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ESX=void 0,E(2),E(4),E(5),t.ESX=null,setTick(()=>{for(;null===t.ESX;)emit("esx:getSharedObject",e=>t.ESX=e)})},function(e,t,E){"use strict";var T=this&&this.__awaiter||function(e,t,E,T){return new(E||(E=Promise))((function(a,n){function _(e){try{u(T.next(e))}catch(e){n(e)}}function i(e){try{u(T.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof E?t:new E((function(e){e(t)}))).then(_,i)}u((T=T.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(E(0)),_=E(3),i=E(1);onNet("esx:setJob",e=>{i.ESX.GetPlayerData().job=e,SendNuiMessage(JSON.stringify({app:"AMBULANCECAD",method:"setJobGrade",data:e.grade_label}))});let u=!1;RegisterCommand("journal",(e,t,E)=>{"ambulance"==i.ESX.GetPlayerData().job.name?u?u&&(u=!1,SendNuiMessage(JSON.stringify({app:"AMBULANCEMDT",method:"setVisibility",data:!1})),SetNuiFocus(!1,!1),s()):(u=!0,function(){T(this,void 0,void 0,(function*(){o();const e="amb@world_human_seat_wall_tablet@female@base";yield function(e){return T(this,void 0,void 0,(function*(){for(;!HasAnimDictLoaded(e);)RequestAnimDict(e),yield _.Delay(100)}))}(e),TaskPlayAnim(PlayerPedId(),e,"base",6,-1,-1,50,0,!1,!1,!1),yield _.Delay(300),yield N()}))}(),N(),function(){let e=i.ESX.GetPlayerData().job.grade_name;SendNuiMessage(JSON.stringify({app:"AMBULANCEMDT",method:"setRole",data:e}))}(),SendNuiMessage(JSON.stringify({app:"AMBULANCEMDT",method:"setVisibility",data:!0})),SetNuiFocus(!0,!0),emitNet(n.default.FETCH_CREDENTIALS),emitNet(n.default.FETCH_AMBULANCEPLAYERS),emitNet(n.default.TREATMENTS_FETCH_ALL_TREATMENTS),SendNuiMessage(JSON.stringify({app:"AMBULANCECAD",method:"setJobGrade",data:i.ESX.GetPlayerData().job.grade_label}))):i.ESX.ShowHelpNotification("Du har ikke tilgang til Journalen",!0,!1,2e3)},!1);let S=0,l=!1;const N=()=>T(void 0,void 0,void 0,(function*(){if(o(),l)l&&console.log("prop already created");else{for(RequestModel("prop_cs_tablet");!HasModelLoaded("prop_cs_tablet");)yield _.Delay(1);const e=PlayerPedId(),[t,E,T]=GetEntityCoords(e,!0);S=CreateObject(GetHashKey("prop_cs_tablet"),t,E,T+.2,!0,!0,!0);const a=GetPedBoneIndex(e,28422);AttachEntityToEntity(S,e,a,0,0,0,0,0,-0,!0,!0,!1,!0,1,!0),l=!0}}));function o(){0!=S&&(DeleteEntity(S),S=0,l=!1)}function s(){o(),ClearPedTasks(PlayerPedId())}onNet(n.default.SEND_CREDENTIALS,e=>{SendNuiMessage(JSON.stringify({app:"AMBULANCEMDT",method:"setCredentials",data:e}))}),RegisterNuiCallbackType("ambu:cad:close"),on("__cfx_nui:ambu:cad:close",()=>{SendNuiMessage(JSON.stringify({app:"AMBULANCEMDT",method:"setVisibility",data:!1})),s(),SetNuiFocus(!1,!1),u=!1}),onNet(n.default.SEND_AMBULANCEPLAYERS,e=>{SendNuiMessage(JSON.stringify({app:"AMBULANCE_UNITS",method:"setUnits",data:e}))}),RegisterNuiCallbackType(n.default.EMPLOYEES_FETCH_EMPLOYEES),on("__cfx_nui:"+n.default.EMPLOYEES_FETCH_EMPLOYEES,()=>{emitNet(n.default.EMPLOYEES_FETCH_EMPLOYEES)}),RegisterNuiCallbackType(n.default.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS),on("__cfx_nui:"+n.default.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS,e=>{emitNet(n.default.TREATMENTS_FETCH_EMPLOYEE_TREATMENTS,e.doctor)}),RegisterNuiCallbackType(n.default.EMPLOYEES_FETCH_JOBLABEL),on("__cfx_nui:"+n.default.EMPLOYEES_FETCH_JOBLABEL,e=>{emitNet(n.default.EMPLOYEES_FETCH_JOBLABEL,e)}),onNet(n.default.EMPLOYEES_SEND_EMPLOYEES,e=>{SendNuiMessage(JSON.stringify({app:"AMBULANCECAD",method:"setEmployees",data:e}))})},function(e,t,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Delay=void 0,t.Delay=e=>new Promise(t=>setTimeout(t,e))},function(e,t,E){"use strict";var T=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=T(E(0));onNet(a.default.PATIENTS_SEND_ALL_PATIENTS,e=>{SendNuiMessage(JSON.stringify({app:"PATIENTS",method:"setPatients",data:e}))}),RegisterNuiCallbackType(a.default.PATIENTS_UPDATE_CREDENTIALS),on("__cfx_nui:"+a.default.PATIENTS_UPDATE_CREDENTIALS,e=>{emitNet(a.default.PATIENTS_UPDATE_CREDENTIALS,e)}),RegisterNuiCallbackType(a.default.PATIENTS_SEARCH_PATIENTS),on("__cfx_nui:"+a.default.PATIENTS_SEARCH_PATIENTS,e=>{emitNet(a.default.PATIENTS_SEARCH_PATIENTS,e)}),onNet(a.default.PATIENTS_UPDATE_CREDENTIALS_SUCCESS,()=>{emitNet(a.default.PATIENTS_FETCH_ALL_PATIENTS)})},function(e,t,E){"use strict";var T=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=T(E(0));RegisterNuiCallbackType(a.default.TREATMENTS_ADD_TREATMENT),on("__cfx_nui:"+a.default.TREATMENTS_ADD_TREATMENT,e=>{emitNet(a.default.TREATMENTS_ADD_TREATMENT,e)}),RegisterNuiCallbackType(a.default.TREATMETNS_FETCH_SCOPED_TREATMENTS),on("__cfx_nui:"+a.default.TREATMETNS_FETCH_SCOPED_TREATMENTS,e=>{const t=e.patientName;emitNet(a.default.TREATMETNS_FETCH_SCOPED_TREATMENTS,t)}),RegisterNuiCallbackType(a.default.TREATMENTS_UPDATE_TREATMENTS),on("__cfx_nui:"+a.default.TREATMENTS_UPDATE_TREATMENTS,e=>{emitNet(a.default.TREATMENTS_UPDATE_TREATMENTS,e)}),RegisterNuiCallbackType(a.default.TREATMENTS_DELETE_TREATMENT),on("__cfx_nui:"+a.default.TREATMENTS_DELETE_TREATMENT,e=>{emitNet(a.default.TREATMENTS_DELETE_TREATMENT,e)}),onNet(a.default.TREATMENTS_ADD_TREATMENT_SUCCESS,e=>{emitNet(a.default.TREATMETNS_FETCH_SCOPED_TREATMENTS,e.name)}),onNet(a.default.TREATMENTS_SEND_TREATMENTS,e=>{SendNuiMessage(JSON.stringify({app:"TREATMENTS",method:"setTreatments",data:e}))}),onNet(a.default.TREATMENTS_SEND_SCOPED_TREATMENTS,e=>{SendNuiMessage(JSON.stringify({app:"TREATMENTS",method:"setTreatments",data:e}))}),onNet(a.default.TREATMENTS_DELETE_TREATMENT_SUCCESS,e=>{emitNet(a.default.TREATMETNS_FETCH_SCOPED_TREATMENTS,e.name)})}]);