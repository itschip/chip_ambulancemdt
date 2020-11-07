import React from 'react';
import './App.css';
import { OverviewContainer } from './components/overview/OverviewContainer';
import { useTreatmentService } from './components/treatments/hooks/useTreatmentService';
import Header from './components/ui/Header';
import { Wrapper, ContentWrapper } from './components/ui/Wrapper';
import { useNuiService } from './nui-events/hooks/useNuiService';

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
            doctor: "Frode Ortevik"
          },
          {
            id: 2,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik"
          },
          {
            id: 3,
            name: "Cody Axelson",
            date: "07/11/20",
            note: "Brukket arm. Fått med smertestillende hjem.",
            doctor: "Frode Ortevik"
          }
        ]
      }
    })
  )
})

function App() {
  useNuiService();
  useTreatmentService()
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <OverviewContainer />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;
