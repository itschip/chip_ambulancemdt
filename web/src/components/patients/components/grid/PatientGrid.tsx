import React from "react";
import { Grid } from "@material-ui/core";
import { usePatients } from "../../hooks/usePatients";
import PatientCard from "../card/PatientCard";
import { useFilteredPatients } from "../../hooks/useFilteredPatients";

const PatientGrid = () => {
  const { patients } = usePatients();
  const { filterPatient } = useFilteredPatients();

  if (!patients) return <p>loading</p>;

  return (
    <div style={{ marginTop: 30, margin: 20 }}>
      <Grid container spacing={4}>
        {patients
          .filter((patinet) => patinet.name.includes(filterPatient))
          .map((patient) => (
            <Grid key={patient.id} item xs={2}>
              <PatientCard key={patient.id} {...patient} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default PatientGrid;
