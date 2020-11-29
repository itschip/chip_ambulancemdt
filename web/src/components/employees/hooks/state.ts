import { atom } from 'recoil';

export const employeeState = {
  employees: atom({
    key: 'employeesList',
    default: null
  }),
  modal: atom({
    key: 'employeeModal',
    default: false
  }),
  employeeDetail: atom({
    key: 'employeeDetail',
    default: null
  }),
  employeeGrade: atom({
    key: 'employeeGrade',
    default: ""
  })
}