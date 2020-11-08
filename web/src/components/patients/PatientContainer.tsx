import React from 'react'
import PatientGrid from './components/grid/PatientGrid'
import PatientSearch from './components/search/PatientSearch'

const PatientContainer = () => {
  return (
    <div>
      <PatientSearch /> 
      <PatientGrid />
    </div>
  )
}

export default PatientContainer;
