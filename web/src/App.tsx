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
        app: "PATIENTS",
        method: "setPatients",
        data: [
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },

        ],
      },
    })
  );
}, 1000);

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent("message", {
      data: {
        app: "AMBULANCECAD",
        method: "setEmployees",
        data: [
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },
          {
            id: 1,
            firstname: "hello",
            lastname: "gangshit",
            DOB: "03/03/2001"
          },

        ],
      },
    })
  );
}, 1000);

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
