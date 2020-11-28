import React from 'react'
import EmployeeGrid from './components/EmployeeGrid'
import EmployeeModal from './components/modal/EmployeeModal'
import './components/Employee.css'

export const EmployeeContainer = () => {
  return (
    <div className="employee-container">
      <EmployeeModal/>
      <h1 style={{ color: '#73a3c9', margin: 25}}>Ansatte</h1>
      <EmployeeGrid />
    </div>
  )
}