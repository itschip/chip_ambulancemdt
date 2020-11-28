import React from 'react'
import EmployeeGrid from './components/EmployeeGrid'
import EmployeeModal from './components/modal/EmployeeModal'
import './components/Employee.css'
import { useModal } from './hooks/useModal'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backgroundModal: {
    background: "black",
    opacity: "0.6",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  }
}))

export const EmployeeContainer = () => {
  const classes = useStyles();
  const { modal } = useModal();
  return (
    <div className="employee-container">
      <EmployeeModal/>
      <div className={modal ? classes.backgroundModal : undefined}/>
      <h1 style={{ color: '#73a3c9', margin: 25}}>Ansatte</h1>
      <EmployeeGrid />
    </div>
  )
}