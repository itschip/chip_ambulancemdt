import React from 'react';
import './App.css';
import { OverviewContainer } from './components/overview/OverviewContainer';
import { useTreatmentService } from './components/treatments/hooks/useTreatmentService';
import Header from './components/ui/Header';
import { Wrapper, ContentWrapper } from './components/ui/Wrapper';
import { useCadService } from './core/hooks/useCadService';
import { useNuiService } from './nui-events/hooks/useNuiService';
import { useOverviewService } from './components/overview/hooks/useOverviewService';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// show and hide cad
import { useVisibility } from './core/hooks/useVisibility';
import PatientContainer from './components/patients/PatientContainer';
import { usePatientService } from './components/patients/hooks/usePatientService';
import { EmployeeContainer } from './components/employees/EmployeeContainer';
import { useEmployeeService } from './components/employees/hooks/useEmployeeService';


setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "TREATMENTS",
        method: "setTreatments",
        data: [
          {
            id: 1,
            firstname: "Cody",
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
          },
          {
            id: 2,

            name: "Petter Moen",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
          },
          {
            id: 3,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
          },
          {
            id: 4,
            name: "Frode Ortevik",
            date: "07/11/20",
            note: "Brukke ben. Fått med smertestillende hjem.",
            doctor: "Cody Axelson",
          },
          {
            id: 5,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
          },
          {
            id: 6,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
          },
          {
            id: 7,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
          },
          {
            id: 8,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
          },
          {
            id: 9,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
          },
        ]
      }
    })
  )
}, 1000)

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "PATIENTS",
        method: "setPatients",
        data: [
          {
            id: 1,
            firstname: "Petter",
            lastname: "Moen",
            age: 24,
            number: 34034524,
            bloodtype: 'A',
            image: 'https://i.imgur.com/PCsjGEs.png'
          },
          {
            id: 2,
            firstname: "Cody",
            lastname: "Axelson",
            age: 22,
            number: 39495838,
            bloodtype: 'B',
            image: 'https://i.imgur.com/v3F2Hy1.gif'
          },
          {
            id: 3,
            firstname: "Frode",
            lastname: "Ortevik",
            age: 36,
            bloodtype: 'Ukjent',
            number: 84758392,
            image: 'https://i.imgur.com/cQGpehY.jpg'
          },
        ]
      }
    })
  )
}, 1000)

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "AMBULANCEMDT",
        method: "setCredentials",
        data: {
          name: "Hello"
        }
      }
    })
  )
}, 1000)

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "AMBULANCE_UNITS",
        method: "setUnits",
        data: [
          {
            id: 1,
            name: "LEGE 210 | Petter Moen",
          },
          {
            id: 2,
            name: "AMBU 720 | Cody Axelson",
          },
          {
            id: 3,
            name: "02 HELSE | Frode Ortevik",
          }
        ]
      }
    })
  )
}, 1000)

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "AMBULANCECAD",
        method: "setEmployees",
        data: [
          {
            id: 1,
            firstname: "Petter",
            lastname: "Moen",
            name: "LEGE 210 | Petter Moen",
            treatments: 3,
            licenses: ["160", "Heli", "Førerkort Klasse B"],
            role: "boss",
            callsign: "lege 210",
            job_grade: 'Overlege',
          }
        ]
      }
    })
  )
}, 1000)

function App() {
  const { visibility } = useVisibility()
  useNuiService();
  useCadService();
  useTreatmentService();
  useOverviewService();
  usePatientService();
  useEmployeeService();
  console.log(!"wtf")

  return (
    <div style={ visibility ? { visibility: 'visible' } : { visibility: 'hidden' }}>
    <Router>
      <Wrapper>
        <ContentWrapper>
            <>
              <Header />
              <Switch>
                <Route exact path={"/"} component={OverviewContainer} />
                <Route path="/patients" component={PatientContainer}  />
                <Route path="/employees" component={EmployeeContainer} />
              </Switch>
              <Redirect to={"/"} />
            </>
        </ContentWrapper>
      </Wrapper>
    </Router>
    </div>
  );
}

export default App;
