import React from 'react';
import './App.css';
import { OverviewContainer } from './components/overview/OverviewContainer';
import { useTreatmentService } from './components/treatments/hooks/useTreatmentService';
import Header from './components/ui/Header';
import { Wrapper, ContentWrapper } from './components/ui/Wrapper';
import { useCadService } from './core/hooks/useCadService';
import { useNuiService } from './nui-events/hooks/useNuiService';
import { useOverviewService } from './components/overview/hooks/useOverviewService';

// show and hide cad
import { useVisibility } from './core/hooks/useVisibility';


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
            name: "Cody Axelson",
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
  return (
    <div style={ visibility ? { visibility: 'visible' } : { visibility: 'hidden' }}>
    <Wrapper>
      <ContentWrapper>
        <Header />
        <OverviewContainer />
      </ContentWrapper>
    </Wrapper>
    </div>
  );
}

export default App;
