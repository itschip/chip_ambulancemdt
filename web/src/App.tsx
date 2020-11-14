import React from 'react';
import './App.css';
import { OverviewContainer } from './components/overview/OverviewContainer';
import { useTreatmentService } from './components/treatments/hooks/useTreatmentService';
import Header from './components/ui/Header';
import { Wrapper, ContentWrapper } from './components/ui/Wrapper';
import { useCadService } from './core/hooks/useCadService';
import { useNuiService } from './nui-events/hooks/useNuiService';
import { useOverviewService } from './components/overview/hooks/useOverviewService';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// show and hide cad
import { useVisibility } from './core/hooks/useVisibility';
import PatientContainer from './components/patients/PatientContainer';
import { usePatientService } from './components/patients/hooks/usePatientService';


setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "TREATMENTS",
        method: "setTreatments",
        data: [
          {
            id: 1,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
            tags: ["Kritisk"]
          },
          {
            id: 2,
            name: "Petter Moen",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
            tags: ["Frisk", "Behandlet"]
          },
          {
            id: 3,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik",
            tags: ["en annen tag"]
          },
          {
            id: 4,
            name: "Frode Ortevik",
            date: "07/11/20",
            note: "Brukke ben. Fått med smertestillende hjem.",
            doctor: "Cody Axelson",
            tags: ["en annen tag"]
          },
          {
            id: 5,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
            tags: ["Frisk"]
          },
          {
            id: 6,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
            tags: ["Frisk"]
          },
          {
            id: 7,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem. Dette er helt kaos, liksom wallah.",
            doctor: "Frode Ortevik",
            tags: ["Frisk"]
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
            status: "Opptatt"
          },
          {
            id: 2,
            name: "AMBU 720 | Cody Axelson",
            status: "Ledig"
          },
          {
            id: 3,
            name: "02 HELSE | Frode Ortevik",
            status: "Pause"
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
  return (
    <div style={ visibility ? { visibility: 'visible' } : { visibility: 'hidden' }}>
    <Wrapper>
      <ContentWrapper>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={OverviewContainer} />
              <Route path="/patients" component={PatientContainer} />
            </Switch>
          </>
        </Router>
      </ContentWrapper>
    </Wrapper>
    </div>
  );
}

export default App;
